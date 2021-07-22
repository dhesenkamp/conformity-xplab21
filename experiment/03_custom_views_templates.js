// In this file you can create your own custom view templates

// A view template is a function that returns a view,
// this functions gets some config (e.g. trial_data, name, etc.) information as input
// A view is an object, that has a name, CT (the counter of how many times this view occurred in the experiment),
// trials the maximum number of times this view is repeated
// and a render function, the render function gets CT and the magpie-object as input
// and has to call magpie.findNextView() eventually to proceed to the next view (or the next trial in this view),
// if it is an trial view it also makes sense to call magpie.trial_data.push(trial_data) to save the trial information

const issue_choice_custom_view = function(config, CT) {
    const view = {
        name: config.name,
        CT: 0,
        trials: config.trials,

        render: function (CT, magpie) {
            $("main").html(`<div class='magpie-view'>
                <h1 class='magpie-view-title'>${config.title}</h1>

                <div class='magpie-view-stimulus-container'>
                <p class='magpie-view-text'>${config.text}</p>
                <br/>
                </div>

                <div class='magpie-view-answer-container'>
                <label id="1" class='magpie-response-sentence'>${config.data[CT].option1}</label>
                <label id="2" class='magpie-response-sentence'>${config.data[CT].option2}</label>
                <label id="3" class='magpie-response-sentence'>${config.data[CT].option3}</label>
                <label id="4" class='magpie-response-sentence'>${config.data[CT].option4}</label>
                <label id="5" class='magpie-response-sentence'>${config.data[CT].option5}</label>
                <label id="6" class='magpie-response-sentence'>${config.data[CT].option6}</label>
                <label id="7" class='magpie-response-sentence'>${config.data[CT].option7}</label>
                <label id="8" class='magpie-response-sentence'>${config.data[CT].option8}</label>
                </div>

                </div>`);

            const handle_click = function(e) {
                let trial_data = {
                    trial_name: config.name,
                    trial_number: CT + 1,
                    response: e.target.id
                };

                magpie.trial_data.push(trial_data);
                magpie.findNextView();
            };

            $('#1').on("click", handle_click);
            $('#2').on("click", handle_click);
            $('#3').on("click", handle_click);
            $('#4').on("click", handle_click);
            $('#5').on("click", handle_click);
            $('#6').on("click", handle_click);
            $('#7').on("click", handle_click);
            $('#8').on("click", handle_click);
        }
    };
    return view;
};

const issue_rating_custom_view = function(config, CT) {
    const view = {
        name: config.name,
        CT: 0,
        trials: config.trials,

        render: function (CT, magpie) {
            //console.log(magpie.trial_data[0].response)
            //console.log(config.data[CT])
            let statement = magpie.trial_data[0].response -1

            $("main").html(`<div class='magpie-view'>
                <h1 class='magpie-view-title'>${config.title}</h1>

                <div class='magpie-view-stimulus-container-custom'>
                <p class='magpie-view-text'>${config.text}</p>
                </div>
                <br/>
                <br/>
                <div class='magpie-view-statement'>
                <p class='magpie-view-text'>${config.data[CT].statements[statement]}</p>
                </div>

                <div class='magpie-view-answer-container'>
                <strong class='magpie-response-rating-option magpie-view-text'>${config.optionLeft}</strong>
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
                <strong class='magpie-response-rating-option magpie-view-text'>${config.optionRight}</strong>
                </div>

                </div>`);

            const handle_click = function(e) {
                let trial_data = {
                    trial_name: config.name,
                    trial_number: CT + 1,
                    response: e.target.id
                };

                magpie.trial_data.push(trial_data);
                magpie.findNextView();
            };

            $('#1').on("click", handle_click);
            $('#2').on("click", handle_click);
            $('#3').on("click", handle_click);
            $('#4').on("click", handle_click);
            $('#5').on("click", handle_click);
            $('#6').on("click", handle_click);
            $('#7').on("click", handle_click);
            $('#8').on("click", handle_click);
            $('#9').on("click", handle_click);
            $('#10').on("click", handle_click);
            $('#11').on("click", handle_click);
        }
    };
    return view;
};

const dilemma_custom_view = function(config, CT) {
    const view = {
        name: config.name,
        CT: 0,
        trials: config.trials,

        render: function (CT, magpie) {
            let response = magpie.trial_data[0].response -1
            let groups = [
                'Klimapolitik',
                'Migrationspolitik',
                'Feminismus',
                'Legalisierung von Cannabis',
                'Rentenalter',
                'Fleischkonsum',
                'Bildung',
                'Abtreibung'
            ]
            let group = groups[response]
            let group2 = ''
            // Dynamic display of 2nd sentence dependend on exp. condition
            let cond = config.data[CT].id
            if (cond > 2) {
                group2 = group
            };

            $("main").html(`<div class='magpie-view'>
                <h1 class='magpie-view-title'>${config.title}</h1>

                <div class='magpie-view-stimulus-container-custom'>
                <p class='magpie-view-text'>${config.text}</p>
                <br/>
                <br/>
                <p class='magpie-view-text'>${config.data[CT].chunk1}${group}${config.data[CT].chunk2}</p>
                <br/>
                <p class='magpie-view-text'>${config.data[CT].chunk3}${group2}${config.data[CT].chunk4}</p>
                </div>

                <div class='magpie-view-answer-container'>
                <label id="1" class='magpie-response-sentence'>${config.data[CT].option1}</label>
                <label id="2" class='magpie-response-sentence'>${config.data[CT].option2}</label>
                <label id="3" class='magpie-response-sentence'>${config.data[CT].option3}</label>
                <label id="4" class='magpie-response-sentence'>${config.data[CT].option4}</label>
                <label id="5" class='magpie-response-sentence'>${config.data[CT].option5}</label>
                <label id="6" class='magpie-response-sentence'>${config.data[CT].option6}</label>
                </div>

                </div>`);

            const handle_click = function(e) {
                let trial_data = {
                    trial_name: config.name,
                    trial_number: CT + 1,
                    condition: config.data[CT].id,
                    response: e.target.id
                };

                magpie.trial_data.push(trial_data);
                magpie.findNextView();
            };

            $('#1').on("click", handle_click);
            $('#2').on("click", handle_click);
            $('#3').on("click", handle_click);
            $('#4').on("click", handle_click);
            $('#5').on("click", handle_click);
            $('#6').on("click", handle_click);
        },
    };
    return view;
};

const understanding_custom_view = function(config, CT) {
    const view = {
        name: config.name,
        CT: 0,
        trials: config.trials,

        render: function (CT, magpie) {
            $("main").html(`<div class='magpie-view'>
                <h1 class='magpie-view-title'>${config.title}</h1>

                <div class='magpie-view-stimulus-container-custom'>
                <p class='magpie-view-text'>${config.text}</p>
                <br/>
                </div>

                <div class='magpie-view-answer-container'>
                <label id="1" class='magpie-response-sentence'>${config.data[CT].option1}</label>
                <label id="2" class='magpie-response-sentence'>${config.data[CT].option2}</label>
                <label id="3" class='magpie-response-sentence'>${config.data[CT].option3}</label>
                <label id="4" class='magpie-response-sentence'>${config.data[CT].option4}</label>
                </div>

                </div>`);

            const handle_click = function(e) {
                let trial_data = {
                    trial_name: config.name,
                    trial_number: CT + 1,
                    response: e.target.id,
                    // Hard-coded correctness
                    // correct: config.data[CT].expected
                    // double-check correct option in 04_trials.js and corresponding ID of label
                    correct: 1
                };

                magpie.trial_data.push(trial_data);
                magpie.findNextView();
            };

            $('#1').on("click", handle_click);
            $('#2').on("click", handle_click);
            $('#3').on("click", handle_click);
            $('#4').on("click", handle_click);
        }
    };
    return view;
};

const double_dropdown_custom = function(config, CT) {
    const view = {
        name: config.name,
        CT: 0,
        trials: config.trials,

        render: function(CT, magpie) {
            let response1;
            let response2;
            let response_flags = [0,0];
            let group = magpie.trial_data[0].response -1;


            $("main").html(`<div class='magpie-view'>
            <h1 class='magpie-view-title'>${config.title}</h1>

            <div class='magpie-view-stimulus-container-custom'>
            <p class='magpie-view-text'>${config.text}</p>
            </div>

            <br/>
            <br/>

            <div class='magpie-view-answer-container magpie-response-dropdown'>
            <p class='magpie-view-text'>Ich identifiziere mich mit <strong>${config.data[CT].groups[group][0]}</strong>.</p>
            <select id='response1' name='answer_1'>
                <option disabled selected></option>
                <option value=1>${config.data[CT].choice[0]}</option>
                <option value=2>${config.data[CT].choice[1]}</option>
                <option value=3>${config.data[CT].choice[2]}</option>
                <option value=4>${config.data[CT].choice[3]}</option>
                <option value=5>${config.data[CT].choice[4]}</option>
                <option value=6>${config.data[CT].choice[5]}</option>
                <option value=7>${config.data[CT].choice[6]}</option>
            </select>
            <br />
            <br />
            <p class='magpie-view-text'>Ich identifiziere mich mit <strong>${config.data[CT].groups[group][1]}</strong>.</p>
            <select id='response2' name='answer_2'>
                <option disabled selected></option>
                <option value=1>${config.data[CT].choice[0]}</option>
                <option value=2>${config.data[CT].choice[1]}</option>
                <option value=3>${config.data[CT].choice[2]}</option>
                <option value=4>${config.data[CT].choice[3]}</option>
                <option value=5>${config.data[CT].choice[4]}</option>
                <option value=6>${config.data[CT].choice[5]}</option>
                <option value=7>${config.data[CT].choice[6]}</option>
            </select>
            </p>
            <button id='next' class='magpie-view-button magpie-nodisplay'>Next</button>
            </div>

            </div>`);

            response1 = $('#response1');
            response2 = $('#response2');

            const display_button_checker = function(response_nr) {
                response_flags[response_nr] = 1;
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

            $('#next').on('click', function() {
                let trial_data = {
                    trial_name: config.name,
                    trial_number: CT + 1,
                    response1: $(response1).val(),
                    response2: $(response2).val(),
                };
                magpie.trial_data.push(trial_data);
                magpie.findNextView();
            });
        },
    };
    return view;
};