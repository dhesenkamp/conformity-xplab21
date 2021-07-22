// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties
    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  title: 'Hallo!',
  text: `Vielen Dank, dass Sie an unserem Experiment teilnehmen.
            <br />
            <br />
            Auf den nächsten Seiten werden Ihnen einige Fragen gestellt. Die Aufzeichnung
            der Antworten erfolgt vollständig anonymisiert, es können keine Rückschlüsse auf
            Ihre Person gezogen werden. Bitte antworten Sie ehrlich und wählen Sie die Aussagen,
            die am besten Ihre Einstellung beschreiben.`,
  buttonText: 'Starten Sie das Experiment'
});

const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'General Instructions',
  text: `This is a sample instructions view.
            <br />
            <br />
            Tell your participants what they are to do here.`,
  buttonText: 'go to trials'
});

// Post-test questionaire
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Zusätzliche Informationen',
  text: 'Die folgenden Fragen zu beantworten ist optional, hilft uns aber dabei, unsere Ergebnisse zu analysieren.',

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  buttonText: 'Weiter',
  age_question: 'Alter',
  gender_question: 'Geschlecht',
  gender_male: 'männlich',
  gender_female: 'weiblich',
  gender_other: 'divers',
  edu_question: 'Höchster Bildungsabschluss',
  edu_graduated_high_school: 'Abitur',
  edu_graduated_college: 'Hochschulabschluss',
  edu_higher_degree: 'Universitärer Abschluss',
  languages_question: 'Muttersprache',
  languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  comments_question: 'Weitere Kommentare'
});

// Custom thank you screen with message
const thank_participant = magpieViews.view_generator(
  'instructions',
  {
    trials: 1,
    name: 'thank_participant',
    title: 'Vielen Dank für die Teilnahme an diesem Experiment!',
    text: 'Vielen Dank, dass Sie sich die Zeit genommen haben, um an unserem Experiment teilzunehmen. Sie können unten auf weiter klicken und danach das Browserfenster schließen.',
    buttonText: 'Weiter',
  },
);


// Don't delete, responsible for submission of answers
const thanks = magpieViews.view_generator(
  "thanks",
  {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',

  prolificConfirmText: 'Press the button'
  },
);

/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/


// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale

const issue_choice = issue_choice_custom_view(
  {
    trials: social_issues.choice.length,
    name: 'issue_choice',
    title: 'Themenwahl',
    text: `Im Folgenden sind einige Themen aufgelistet, die von politischer und/oder
            sozialer Relevanz sind. Bitte wählen Sie das Thema aus, welches Ihnen
            am wichtigsten erscheint.`,
    data: social_issues.choice
  }
);

const issue_rating = issue_rating_custom_view(
  {
    trials: social_issues.rating.length,
    name: 'issue_rating',
    title: 'Bewertung',
    text: `Bitte bewerten Sie nun die folgende Aussage. Die Mitte der Skala bedeutet,
            dass Sie neutral zu der Aussage eingestellt sind.`,
    data: social_issues.rating,
    optionLeft: 'Stimme gar nicht zu',
    optionRight: 'Stimme voll zu',
  },
);

const dilemma_instructions = magpieViews.view_generator(
  'instructions',
  {
    trials: 1,
    name: 'instructions_moral_dilemma',
    title: 'Anweisungen',
    text: `Wir führen dieses Experiment als Folgestudie eines bereits veröffentlichten Papers durch.
            Dieses Paper beschäftigte sich mit der Frage, wie sich Menschen in moralischen Dilemmata fühlen.
            <br/>
            <br/>
            In dem Paper wurde ein moralisches Dilemma vorgestellt, zu welchem die Teilnehmer
            zwei mögliche Handlungsschritte ergreifen konnten. Die Teilnehmer suchten sich den Handlungsschritt aus,
            den sie bevorzugten, und sollten angeben, wie sie sich mit dieser Entscheidung fühlten.
            <br/>
            <br/>
            In diesem Experiment wird Ihnen nun auch ein moralisches Dilemma präsentiert.
            Sie müssen ebenfalls entscheiden, wie Sie handeln würden,
            und im Anschluss angeben, wie gut oder schlecht Sie sich mit Ihrer Entscheidung fühlen würden.`,
    buttonText: 'Weiter',
  },
);

const dilemma_choice = dilemma_custom_view(
  {
    trials: 1,
    name: 'dilemma',
    title: 'Das Dilemma',
    text: `Stellen Sie sich vor, Sie hätten einen Mann dabei beobachtet, eine Bank auszurauben.
            Sie beobachten etwas Unerwartetes: Er spendet das Geld an ein heruntergekommenes
            Waisenhaus, wo es sehr gut gebraucht werden kann. Nun müssen Sie entscheiden,
            ob Sie die Polizei verständigen und den Dieb melden, oder ob Sie die Sache auf sich
            beruhen und den Dieb laufen lassen.`,
    data: _.shuffle(dilemma.choice),
  },
);

const dilemma_rating = magpieViews.view_generator(
  'rating_scale',
  {
    trials: dilemma.rating.length,
    title: 'Bewertung',
    text: `Wie fühlen Sie sich mit Ihrer Entscheidung?`,
    name: 'dilemma_rating',
    data: dilemma.rating,
  }
);

const dilemma_rating2 = dilemma_rating_custom_view(
  {
    trials: dilemma.rating.length,
    title: 'Bewertung',
    text: `Wie fühlen Sie sich mit Ihrer Entscheidung?`,
    name: 'dilemma_rating',
    data: dilemma.rating,
  }
);

const control_trial = understanding_custom_view(
  {
    trials: understanding.choice.length,
    title: 'Platzhalter',
    name: 'control',
    text: `Wie zuvor erwähnt, wird dieses Experiment in Folge einer anderen Studie durchgeführt. Mit
            den Informationen, die Sie über die vorherige Studie bekommen haben, welche Aussage trifft
            auf das vorherige Experiment zu?`,
    data: understanding.choice
  },
);

const group_identity_check = double_dropdown_custom(
  {
    trials: 1,
    title: 'Gruppenzuordnung',
    name: 'group_identity',
    text: `Bitte wählen Sie aus, inwiefern Sie den folgenden Aussagen zustimmen.
            Wählen sie dabei diejenige Aussage, die Ihnen am treffendsten erscheint.`,
    data: group_identity.check
  }

)
