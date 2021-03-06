# Analysis script
# This script is strongly based on the original script by Pryor et al. (2019).
# Most modifications have been made for data preparation, further, everything not
# related to experiment 1 of their original study has been removed.
# This link leads directly to their repository: https://osf.io/tgf96/

# Initial set-up
library(ordinal)
library(tidyverse)
library(rstan)
library(bridgesampling)
library(shinystan)
library(data.table)
rstan_options(auto_write = TRUE)
options(mc.cores = parallel::detectCores())
set.seed(123)

# Set APA theme to use with ggplot
theme_set(theme_bw(18)+
              theme(panel.grid.major=element_blank(),
                    panel.grid.minor=element_blank(),
                    panel.border=element_blank(),
                    strip.background=element_blank(),
                    strip.text = element_text(face="bold"),
                    axis.line=element_line(),
                    text=element_text(family="serif")))

setwd('/analysis/final')

# Read in data
full_data <- read.csv('/data/results.csv', sep=';', header=TRUE)

# Bring data in usable format
tidy_data <- full_data %>% 
    pivot_wider(
        names_from = 'trial_name',
        names_sep = '.',
        values_from = c('submission_id', 'topIssue',	'topIssueRating', 'ingroupNorm', 
                        'bothShown', 'ingroupFirst', 'response', 'rating', 'understandingCheckResponse', 
                        'correct', 'identityIngroupResponse', 'identityOutgroupResponse', 'ingroupAgree', 
                        'outgroupDisagree')
        ) %>% 
    as.data.table()

# Remove na columns resulting from pivoting, remove columns not needed for analysis
tidy_data[,which(unlist(lapply(tidy_data, function(x)!all(is.na(x))))),with=F]
tidy_data <- tidy_data %>% 
    select(where(function(x) any(!is.na(x))), -'comments', -'trial_number', -'startDate', -'startTime',
           -'endTime', -'timeSpent', -'submission_id.issue_choice', -'submission_id.issue_rating',
           -'submission_id.dilemma', -'submission_id.dilemma_rating', -'submission_id.control',
           -'submission_id.group_identity', -'education', -'languages', -'experiment_id') %>% 
    mutate(
        condition = ifelse(
            ingroupNorm.dilemma==1 & bothShown.dilemma==0, 
            'Ingroup norm favoured \n leaving robber alone \n Only ingroup norm shown', 
            ifelse(
                ingroupNorm.dilemma==0 & bothShown.dilemma==0,
                'Ingroup norm favoured \n calling the police \n Only ingroup norm shown',
                ifelse(
                    ingroupNorm.dilemma==1 & bothShown.dilemma==1,
                    'Ingroup norm favoured \n leaving robber alone \n Both norms shown',
                    'Ingroup norm favoured \n calling the police \n Both norms shown'
                ))))

# Renaming column names to original variable names
colnames(tidy_data) <- c('age', 'gender', 'topIssue', 'topIssueRating', 'ingroupNorm',
                         'bothShown', 'ingroupFirst', 'response', 'rating', 
                         'understandingCheckResponse', 'correct', 'identityIngroupResponse', 
                         'identityOutgroupResponse', 'ingroupAgree', 'outgroupDisagree', 'condition')

tidy_data$responseLabels <- ordered(
    tidy_data$response,
    labels = c("1 = Definitely call the police", 
               "2", "3", "4", "5", 
               "6 = Definitely leave the robber alone")
    )

# Filter out unusable data
usable_data <- filter(tidy_data,
                      # Control trial
                      understandingCheckResponse == 1,
                      topIssueRating != 5 | is.na(topIssueRating),
                      )

# Number of (usable) submissions
nr_subs <- tidy_data %>% 
    count() %>% 
    print()

nr_usable_subs <- usable_data %>% 
    count() %>% 
    print()

# Number of removals due to failure of understanding check OR indecisive issue rating
nr_removals <- nr_subs - nr_usable_subs %>% 
    print()

# Equal assignment of conditions
cond <- usable_data %>% 
    count(ingroupNorm, bothShown) %>% 
    print()

prop_bothShown <- ((count(usable_data) - count(usable_data[bothShown == 0])) / count(usable_data)) %>% 
    print()

# Most choosen topics
climate <- usable_data %>% 
    count(topIssue == 1) %>% 
    print()

abortion <- usable_data %>% 
    count(topIssue == 7) %>% 
    print()

# Demographic summary
demographics_data <- filter(usable_data,
                            # Use only submissions with demographic detail
                            is.na(age) == FALSE,
                            is_empty(gender) == F)


demographics_summary <- demographics_data %>% 
    summarise(
        mean_age = mean(age),
        min_age = min(age),
        max_age = max(age),
        sd_age = sd(age),
        median_age = median(age),
        num_males = sum(gender == 'männlich'),
        N = length(age),
        prop_female = (N-num_males) / N
)
demographics_summary

#Frequentist Analysis ----
ordinal_1 <- clm(as.factor(response)~ingroupNorm*bothShown, data=usable_data)
ordinal_1

source("functions/produce_mean_and_count_bar_plot.R")
plot_1 <- produce_mean_and_count_bar_plot(usable_data, bar_width_means=0.5, bar_width_response=0.3)
ggsave(file="plot_1.png", plot=plot_1, width=190, height = 110, units="mm")  

#Bayesian analysis ----
# Set up data for STAN
usable_data <- usable_data %>%
    select(response, ingroupNorm, bothShown, ingroupAgree, outgroupDisagree) #select relevant columns

# Fit STAN data
stan_data <- as.list(c(usable_data, N = dim(usable_data)[1]))
stan_data

# Fit models
fit_SCT <- stan(file = "stan_models/SCT.stan", data=stan_data, iter=10000, chains=4, seed = 123, control=list(adapt_delta = 0.99))
fit_herding <- stan(file = "stan_models/herding.stan", data=stan_data, iter=10000, chains=4, control=list(adapt_delta = 0.99))

# Compare models using Bayes Factors
marg_lik_SCT <- bridge_sampler(samples = fit_SCT)
marg_lik_herding <- bridge_sampler(samples = fit_herding)
bf(marg_lik_herding, marg_lik_SCT)

# Create prior-posterior plots
source("plot_priors_posteriors.R")

# Plot which issues people cared about and the extent to which they agreed with them
issue_plot <- ggplot(usable_data, aes(x=factor(topIssue,labels = c("Climate \npolicy",
                                                                  "Migration \npolicy",
                                                                  "Feminism",
                                                                  "Cannabis \nlegalisation",
                                                                  "Pension \nage",
                                                                  #"Education", # this topic wasn't chosen at all
                                                                  "Abortion",
                                                                  "Meat \nconsumption")),
                                  y = topIssueRating, 
                                  colour = factor(topIssue),
                                  fill = factor(topIssue))) + 
    geom_dotplot(binaxis = "y", stackdir = "center", binwidth = 0.15) +
    labs(x = "Issue", y="Agreement") + 
    guides(color=FALSE, fill=FALSE) +
    scale_y_continuous(breaks=c(0,5,10), labels = c("Strongly disagree", "Neutral", "Strongly agree"))
ggsave("issue_plot.png", issue_plot, width=34, height=13, units="cm")
