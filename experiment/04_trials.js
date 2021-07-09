// In this file you can specify the trial data for your experiment

const social_issues = {
    choice: [
        {
            //question: 'Which of the following social and political issues do you deem most important?',
            option1: 'Klimapolitik',
            option2: 'Migrationspolitik',
            option3: 'Feminismus',
            option4: 'Legalisierung von Cannabis',
            option5: 'Rentenalter',
            option6: 'Fleischkonsum',
            option7: 'Bildung',
            option8: 'Abtreibung',

            //response: 'NULL',
        },
    ],

    rate_statement: [
        {
            question: 'Bewerten Sie nun bitte folgende Aussage zu dem von Ihnen gewählten Thema.',

            s1: 'Eine Benzinsteuer ist eine essentielle Maßnahme für die Rettung des Klimas.',
            s2: 'Deutschland braucht eine Migrationsobergrenze von 300.000 Personen.',
            s3: 'Eine Frauenquote in allen Institutionen ist essentiell für Gleichberechtigung.',
            s4: 'Cannabis sollte für Erwachsene (18 J.) frei zugänglich sein.',
            s5: 'Das Rentenalter sollte auf 69 Jahre angehoben werden.',
            s6: 'Der Fleischkonsum muss deutlich reduziert werden, daher esse ich kein Fleisch.',
            s7: 'G8 sollte in ganz Deutschland eingeführt werden.',
            s8: 'Jede Frau sollte die Möglichkeit haben, ihr Kind bis zum 3. Monat abtreiben zu können.',

            optionLeft: 'Stimme gar nicht zu',
            optionRight: 'Stimme voll zu',
        },
    ]
};

const dilemma = {
    stimulus: [
        // Ingroup option 1
        {
            ingroup: '60% der Teilnehmer, die mit Ihnen in Hinsicht auf [social / political issue] übereinstimmen, würden den Dieb laufen lassen.',
            option1: 'Definitiv würde ich die Polizei anrufen und den Dieb melden.',
            option2: 'Höchstwahrscheinlich würde ich die Polizei anrufen und den Dieb melden.',
            option3: 'Vermutlich würde ich die Polizei anrufen und den Dieb melden.',
            option4: 'Vermutlich würde ich nichts tun und den Dieb laufen lassen.',
            option5: 'Höchstwahrscheinlich würde ich nichts tun und den Dieb laufen lassen.',
            option6: 'Definitiv würde ich nichts tun und den Dieb laufen lassen.',
        },
        // Ingroup option 2
        {
            ingroup: '60% der Teilnehmer, die mit Ihnen in Hinsicht auf [social / political issue] übereinstimmen, würden den Dieb bei der Polizei melden.',
            option1: 'Definitiv würde ich die Polizei anrufen und den Dieb melden.',
            option2: 'Höchstwahrscheinlich würde ich die Polizei anrufen und den Dieb melden.',
            option3: 'Vermutlich würde ich die Polizei anrufen und den Dieb melden.',
            option4: 'Vermutlich würde ich nichts tun und den Dieb laufen lassen.',
            option5: 'Höchstwahrscheinlich würde ich nichts tun und den Dieb laufen lassen.',
            option6: 'Definitiv würde ich nichts tun und den Dieb laufen lassen.',
        },
    ],

    rating: [
        {
            question: 'Wie gut fühlen Sie sich mit dieser Entscheidung?',
            optionRight: 'Sehr gut',
            optionLeft: 'Sehr schlecht',
        },
    ],
};

const understanding_check = {
    check: [
        {
            option1: 'Die Teilnehmer sollten das Experiment mit geschlossenen Augen absolvieren.',
            option2: 'In dem Experiment, nahmen die Teilnehmer Stellung zu einem moralischen Dilemma.',
            option3: 'Wegen eines Computerfehlers konnten die Teilnehmer nicht richtig verteilt um sich die Ausführungen der verschiedenen Handlungen vorzustellen.',
            option4: 'Die Daten aus den vorherigen Experiment wurden nicht gespeichert.',
            expected: 'In dem Experiment, nahmen die Teilnehmer Stellung zu einem moralischen Dilemma.',
        },
    ],
};

const identity_check = {
    check: [
        {
            statement1: 'Ich würde mich als Teil der Gruppe der [ingroup] bezeichnen.',
            statement2: 'Ich würde mich als Teil der Gruppe der [outgroup] bezeichnen.',
            choice_options: [
                'Stimme voll zu',
                'Stimme zu',
                '3',
                '4',
                '5',
                '6',
                'Stimme gar nicht zu',
            ]
        },
    ],
};