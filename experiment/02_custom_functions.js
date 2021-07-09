// Here, you can define all custom functions you want to use and initialize some variables

/* Variables
*
*
*/

const coin = _.sample(["head", "tail"]); // You can determine global (random) parameters here
// Declare your variables here


/* Helper functions
*
*
*/

/* For generating random participant IDs */
    // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
// dec2hex :: Integer -> String
const dec2hex = function(dec) {
    return ("0" + dec.toString(16)).substr(-2);
};
// generateId :: Integer -> String
const generateID = function(len) {
    let arr = new Uint8Array((len || 40) /2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, this.dec2hex).join("");
};
// Declare your helper functions here


/* Hooks  
*
*
*/

// Error feedback if participants exceeds the time for responding
const time_limit = function(data, next) {
    if (typeof window.timeout === 'undefined'){
        window.timeout = [];
    }
    // Add timeouts to the timeoutarray
    // Reminds the participant to respond after 5 seconds
    window.timeout.push(setTimeout(function(){
          $('#reminder').text('Please answer more quickly!');
    }, 5000));
    next();
};

// compares the chosen answer to the value of `option1`
check_response = function(data, next) {
    $('input[name=answer]').on('change', function(e) {
        if (e.target.value === data.correct) {
            alert('Your answer is correct! Yey!');
        } else {
            alert('Sorry, this answer is incorrect :( The correct answer was ' + data.correct);
        }
        next();
    })
};

// Declare your hooks here


/* Generators for custom view templates, answer container elements and enable response functions
*
*
*/


const stimulus_container_generator_custom = {
    // Display sentences or longer text without canvas
    social_issue_choice: function(config, CT) {
        return `<div class='magpie-view'>
                    <h1 class='magpie-view-title'>${config.title}</h1>

                    <div class='magpie-view-stimulus-container'>
                        <p class='magpie-view-text'>${config.text}</p>
                    </div>
                </div>`;
    },

    social_issue_rating: function(config, CT) {
        //let statement = null,
        //if magpie.trial_data.response['issue_choice']
        return `<div class='magpie-view'>
                    <h1 class='magpie-view-title'>${config.title}</h1>

                    <div class='magpie-view-stimulus-container'>
                        <p class='magpie-view-text'>${config.text}</p>
                    </div>
                </div>`;
    },

    sentence_choice_dilemma: function(config, CT) {
        return `<div class='magpie-view'>
                    <h1 class='magpie-view-title'>${config.title}</h1>

                    <p class='magpie-view-text'>${config.text}</p>
                    <br />
                    <br />
                    <p class='magpie-view-text'>Statement</p>                    
                </div>`;
    },

    // Control trial
    understanding_check: function(config, CT) {
        return `<div class='magpie-view'>
                    <h1 class='magpie-view-title'>${config.title}</h1>

                    <p class='magpie-view-text'>${config.text}</p>                   
                </div>`;
    },

    // Thank participant
    thank_you: function(config, CT) {
        return `<div class='magpie-view'>
                    <h1 class='magpie-view-title'>${config.title}</h1>
                    <section class="magpie-text-container">
                        <p class="magpie-view-text">${config.text}</p>
                    </section>
                </div>`;
    },
};

const answer_container_generator_custom = {
    // 11-point Likert scale
    rating_scale_11: function(config, CT) {
        return `<p class='magpie-view-text'>${config.text}</p>
                <p class_'magpie.view-text'>${config.statement}</p>
                <p class='magpie-view-question'>${config.data[CT].question}</p>

                <div class='magpie-view-answer-container'>
                    <strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
                    <label for="1" class='magpie-response-rating'>1</label>
                    <input type="radio" name="answer" id="1" value="1" />
                    <label for="2" class='magpie-response-rating'>2</label>
                    <input type="radio" name="answer" id="2" value="2" />
                    <label for="3" class='magpie-response-rating'>3</label>
                    <input type="radio" name="answer" id="3" value="3" />
                    <label for="4" class='magpie-response-rating'>4</label>
                    <input type="radio" name="answer" id="4" value="4" />
                    <label for="5" class='magpie-response-rating'>5</label>
                    <input type="radio" name="answer" id="5" value="5" />
                    <label for="6" class='magpie-response-rating'>6</label>
                    <input type="radio" name="answer" id="6" value="6" />
                    <label for="7" class='magpie-response-rating'>7</label>
                    <input type="radio" name="answer" id="7" value="7" />
                    <label for="8" class='magpie-response-rating'>8</label>
                    <input type="radio" name="answer" id="8" value="8" />
                    <label for="9" class='magpie-response-rating'>9</label>
                    <input type="radio" name="answer" id="9" value="9" />
                    <label for="10" class='magpie-response-rating'>10</label>
                    <input type="radio" name="answer" id="10" value="10" />
                    <label for="11" class='magpie-response-rating'>11</label>
                    <input type="radio" name="answer" id="11" value="11" />
                    <strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
                </div>`;
    },
    
    // 6-point Likert scale
    rating_scale_6: function(config, CT) {
        return `<p class='magpie-view-question'>${config.data[CT].question}</p>
                <div class='magpie-view-answer-container'>
                    <strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
                    <label for="1" class='magpie-response-rating'>1</label>
                    <input type="radio" name="answer" id="1" value="1" />
                    <label for="2" class='magpie-response-rating'>2</label>
                    <input type="radio" name="answer" id="2" value="2" />
                    <label for="3" class='magpie-response-rating'>3</label>
                    <input type="radio" name="answer" id="3" value="3" />
                    <label for="4" class='magpie-response-rating'>4</label>
                    <input type="radio" name="answer" id="4" value="4" />
                    <label for="5" class='magpie-response-rating'>5</label>
                    <input type="radio" name="answer" id="5" value="5" />
                    <label for="6" class='magpie-response-rating'>6</label>
                    <input type="radio" name="answer" id="6" value="6" />
                    <strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
                </div>`;
    },

    sentence_choice_topic: function(config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='s1' class='magpie-response-sentence'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='s1' value="${config.data[CT].option1}" />
                    <label for='s2' class='magpie-response-sentence'>${config.data[CT].option2}</label>
                    <input type='radio' name='answer' id='s2' value="${config.data[CT].option2}" />
                    <label for='s3' class='magpie-response-sentence'>${config.data[CT].option3}</label>
                    <input type='radio' name='answer' id='s3' value="${config.data[CT].option3}" />
                    <label for='s4' class='magpie-response-sentence'>${config.data[CT].option4}</label>
                    <input type='radio' name='answer' id='s4' value="${config.data[CT].option4}" />
                    <label for='s5' class='magpie-response-sentence'>${config.data[CT].option5}</label>
                    <input type='radio' name='answer' id='s5' value="${config.data[CT].option5}" />
                    <label for='s6' class='magpie-response-sentence'>${config.data[CT].option6}</label>
                    <input type='radio' name='answer' id='s6' value="${config.data[CT].option6}" />
                    <label for='s7' class='magpie-response-sentence'>${config.data[CT].option7}</label>
                    <input type='radio' name='answer' id='s7' value="${config.data[CT].option7}" />
                    <label for='s8' class='magpie-response-sentence'>${config.data[CT].option8}</label>
                    <input type='radio' name='answer' id='s8' value="${config.data[CT].option8}" />
                </div>`;
    },

    sentence_choice_dilemma: function(config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question-custom'>${config.question}</p>
                    <label for='s1' class='magpie-response-sentence-custom'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='s1' value="${config.data[CT].option1}" />
                    <label for='s2' class='magpie-response-sentence-custom'>${config.data[CT].option2}</label>
                    <input type='radio' name='answer' id='s2' value="${config.data[CT].option2}" />
                    <label for='s3' class='magpie-response-sentence-custom'>${config.data[CT].option3}</label>
                    <input type='radio' name='answer' id='s3' value="${config.data[CT].option3}" />
                    <label for='s4' class='magpie-response-sentence-custom'>${config.data[CT].option4}</label>
                    <input type='radio' name='answer' id='s4' value="${config.data[CT].option4}" />
                    <label for='s5' class='magpie-response-sentence-custom'>${config.data[CT].option5}</label>
                    <input type='radio' name='answer' id='s5' value="${config.data[CT].option5}" />
                    <label for='s6' class='magpie-response-sentence-custom'>${config.data[CT].option6}</label>
                    <input type='radio' name='answer' id='s6' value="${config.data[CT].option6}" />
                </div>`;
    },

    understanding_check: function(config, CT) {
        return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question-custom'>${config.question}</p>
                    <label for='s1' class='magpie-response-sentence-custom'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='s1' value="${config.data[CT].option1}" />
                    <label for='s2' class='magpie-response-sentence-custom'>${config.data[CT].option2}</label>
                    <input type='radio' name='answer' id='s2' value="${config.data[CT].option2}" />
                    <label for='s3' class='magpie-response-sentence-custom'>${config.data[CT].option3}</label>
                    <input type='radio' name='answer' id='s3' value="${config.data[CT].option3}" />
                    <label for='s4' class='magpie-response-sentence-custom'>${config.data[CT].option4}</label>
                    <input type='radio' name='answer' id='s4' value="${config.data[CT].option4}" />
                </div>`;
    },

    identity_check_scale: function(config, CT) {
        return `<p class='magpie-view-question'>${config.question}</p>
                <br />
                <br />
                <p class='magpie-view-question'>${config.data[CT].statement1}</p>
                <div class='magpie-view-answer-container-custom'>
                    <strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
                    <label for="1" class='magpie-response-rating'>1</label>
                    <input type="radio" name="answer" id="1" value="1" />
                    <label for="2" class='magpie-response-rating'>2</label>
                    <input type="radio" name="answer" id="2" value="2" />
                    <label for="3" class='magpie-response-rating'>3</label>
                    <input type="radio" name="answer" id="3" value="3" />
                    <label for="4" class='magpie-response-rating'>4</label>
                    <input type="radio" name="answer" id="4" value="4" />
                    <label for="5" class='magpie-response-rating'>5</label>
                    <input type="radio" name="answer" id="5" value="5" />
                    <label for="6" class='magpie-response-rating'>6</label>
                    <input type="radio" name="answer" id="6" value="6" />
                    <label for="7" class='magpie-response-rating'>7</label>
                    <input type="radio" name="answer" id="7" value="7" />
                    <strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
                </div>
                <br />
                <br />
                <p class='magpie-view-question'>${config.data[CT].statement2}</p>
                <div class='magpie-view-answer-container-custom'>
                    <strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
                    <label for="1" class='magpie-response-rating'>1</label>
                    <input type="radio" name="answer" id="1" value="1" />
                    <label for="2" class='magpie-response-rating'>2</label>
                    <input type="radio" name="answer" id="2" value="2" />
                    <label for="3" class='magpie-response-rating'>3</label>
                    <input type="radio" name="answer" id="3" value="3" />
                    <label for="4" class='magpie-response-rating'>4</label>
                    <input type="radio" name="answer" id="4" value="4" />
                    <label for="5" class='magpie-response-rating'>5</label>
                    <input type="radio" name="answer" id="5" value="5" />
                    <label for="6" class='magpie-response-rating'>6</label>
                    <input type="radio" name="answer" id="6" value="6" />
                    <label for="7" class='magpie-response-rating'>7</label>
                    <input type="radio" name="answer" id="7" value="7" />
                    <strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
                </div>
                <br />
                <br />
                <button id='next' class='magpie-view-button magpie-nodisplay'>Next</button>`;
    },

    identity_check_dropdown: function(config, CT) {
        return `<div class='magpie-view-answer-container magpie-response-dropdown'>
                ${config.data[CT].statement1}
                <select id='response1' name='answer_1'>
                    <option disabled selected></option>
                    <option value=${config.data[CT].choice_options[0]}>${config.data[CT].choice_options[0]}</option>
                    <option value=${config.data[CT].choice_options[1]}>${config.data[CT].choice_options[1]}</option>
                    <option value=${config.data[CT].choice_options[2]}>${config.data[CT].choice_options[2]}</option>
                    <option value=${config.data[CT].choice_options[3]}>${config.data[CT].choice_options[3]}</option>
                    <option value=${config.data[CT].choice_options[4]}>${config.data[CT].choice_options[4]}</option>
                    <option value=${config.data[CT].choice_options[5]}>${config.data[CT].choice_options[5]}</option>
                    <option value=${config.data[CT].choice_options[6]}>${config.data[CT].choice_options[6]}</option>
                </select>
                <br />
                <br />
                ${config.data[CT].statement2}
                <select id='response2' name='answer_2'>
                    <option disabled selected></option>
                    <option value=${config.data[CT].choice_options[0]}>${config.data[CT].choice_options[0]}</option>
                    <option value=${config.data[CT].choice_options[1]}>${config.data[CT].choice_options[1]}</option>
                    <option value=${config.data[CT].choice_options[2]}>${config.data[CT].choice_options[2]}</option>
                    <option value=${config.data[CT].choice_options[3]}>${config.data[CT].choice_options[3]}</option>
                    <option value=${config.data[CT].choice_options[4]}>${config.data[CT].choice_options[4]}</option>
                    <option value=${config.data[CT].choice_options[5]}>${config.data[CT].choice_options[5]}</option>
                    <option value=${config.data[CT].choice_options[6]}>${config.data[CT].choice_options[6]}</option>
                </select>
                </p>
                <button id='next' class='magpie-view-button magpie-nodisplay'>Next</button>
            </div>`
    },
};

const handle_response_custom = {
    // Only omitted RT recording so far
    // Adds .response property with recorded answer to trial object -> how to access?
    social_issue_choice: function(config, CT, magpie, answer_container_generator) {
        $('.magpie-view').append(answer_container_generator(config, CT));

        $('input[name=answer').on('change', function() {
            let trial_data = {
                trial_name: config.name,
                trial_number: CT + 1,
                response: $("input[name=answer]:checked").val(),
                
            };
            trial_data = magpieUtils.view.save_config_trial_data(config.data[CT], trial_data);
            magpie.trial_data.push(trial_data);
            console.log(trial_data);
            magpie.findNextView();
        });
    },

    identity_check: function (config, CT, magpie, answer_container_generator, startingTime) {
        let response1;
        let response2;

        $(".magpie-view").append(answer_container_generator(config, CT));

        response1 = $("#response1");
        response2 = $("#response2");

        // flags to check if dropdown menus have been used
        let response_flags = [0, 0];

        const display_button_checker = function(response_number) {
            response_flags[response_number] = 1;
            if (_.min(response_flags) === 1) {
                $("#next").removeClass("magpie-nodisplay");
            }
        };

        response1.on("change", function() {
            response_flags[0] = 1;
            display_button_checker(0);
        });
        response2.on("change", function() {
            response_flags[1] = 1;
            display_button_checker(1);
        });

        
        $("#next").on("click", function() {
            let trial_data = {
                trial_name: config.name,
                trial_number: CT + 1,
                response_1: $(response1).val(),
                response_2: $(response2).val(),
            };
            

            trial_data = magpieUtils.view.save_config_trial_data(config.data[CT], trial_data);

            magpie.trial_data.push(trial_data);
            magpie.findNextView();
        });
    }
};