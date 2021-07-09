// In this file you can create your own custom view templates

// A view template is a function that returns a view,
// this functions gets some config (e.g. trial_data, name, etc.) information as input
// A view is an object, that has a name, CT (the counter of how many times this view occurred in the experiment),
// trials the maximum number of times this view is repeated
// and a render function, the render function gets CT and the magpie-object as input
// and has to call magpie.findNextView() eventually to proceed to the next view (or the next trial in this view),
// if it is an trial view it also makes sense to call magpie.trial_data.push(trial_data) to save the trial information

const sentence_choice_custom = function(config, CT) {
    const view = {
        name: config.name,
        CT: 0,
        trials: config.trials,
        
        render: function (CT, magpie) {
            $("main").html(`<div class='magpie-view'>
                <h1 class='magpie-view-title'>${config.title}</h1>

                <p class='magpie-view-text'> Im Folgenden sind einige Themen aufgelistet, die von 
                    politischer und/oder sozialer Relevanz sind. Bitte wähle das Thema aus, welches 
                    Dir am wichtigsten ist.
                </p>

                <div class='magpie-view-answer-container'>
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
                </div>
                </div>`);
            /*
            const handle_click = function(click) {
                let trial_data = {
                    trial_name: config.name,
                    trial_number: CT,
                    response: click.target.id
                };
            
                magpie.trial_data.push(trial_data);
                magpie.findNextView();
            };
            
            // Add handle_click functions to all buttons
            $('#s1').on('click', handle_click);
            $('#s2').on('click', handle_click);
            $('#s3').on('click', handle_click);
            $('#s4').on('click', handle_click);
            $('#s5').on('click', handle_click);
            $('#s6').on('click', handle_click);
            $('#s7').on('click', handle_click);
            $('#s8').on('click', handle_click);
            */
        }
    };
    return view;
}