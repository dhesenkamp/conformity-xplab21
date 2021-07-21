// In this file you can specify the trial data for your experiment

const social_issues = {
    choice: [
        {
            question: 'Bitte wählen Sie das Thema aus, welches Ihnen am wichtigsten ist.',
            option1: 'Klimapolitik',
            option2: 'Migrationspolitik',
            option3: 'Feminismus',
            option4: 'Legalisierung von Cannabis',
            option5: 'Rentenalter',
            option6: 'Fleischkonsum',
            option7: 'Bildung',
            option8: 'Abtreibung',
        },
    ],

    rating: [
        {
            // array entries sorted like 'choice'
            statements: [
                'Eine Benzinsteuer ist eine essentielle Maßnahme für die Rettung des Klimas.',
                'Deutschland braucht eine Migrationsobergrenze von 300.000 Personen.',
                'Eine Frauenquote in allen Institutionen ist essentiell für Gleichberechtigung.',
                'Cannabis sollte für Erwachsene (18 J.) frei zugänglich sein.',
                'Das Rentenalter sollte auf 69 Jahre angehoben werden.',
                'Der Fleischkonsum muss deutlich reduziert werden, daher esse ich kein Fleisch.',
                'G8 sollte in ganz Deutschland eingeführt werden.',
                'Jede Frau sollte die Möglichkeit haben, ihr Kind bis zum 3. Monat abtreiben zu können.'
            ],
        },
    ],
};

// Experimental conditions are hard-coded. One of the below trials will be choosen randomly.
const dilemma = {
    choice: [
        {
            id: 1,
            chunk1: '60% der Teilnehmer, die mit Ihnen in Hinsicht auf ',
            chunk2: ' übereinstimmen, würden den Dieb laufen lassen.',
            chunk3: '',
            chunk4: '',
            option1: 'Definitiv würde ich die Polizei anrufen und den Dieb melden.',
            option2: 'Höchstwahrscheinlich würde ich die Polizei anrufen und den Dieb melden.',
            option3: 'Vermutlich würde ich die Polizei anrufen und den Dieb melden.',
            option4: 'Vermutlich würde ich nichts tun und den Dieb laufen lassen.',
            option5: 'Höchstwahrscheinlich würde ich nichts tun und den Dieb laufen lassen.',
            option6: 'Definitiv würde ich nichts tun und den Dieb laufen lassen.',
        },
        {
            id: 2,
            chunk1: '60% der Teilnehmer, die mit Ihnen in Hinsicht auf ',
            chunk2: ' übereinstimmen, würden den Dieb bei der Polizei melden.',
            chunk3: '',
            chunk4: '',
            option1: 'Definitiv würde ich die Polizei anrufen und den Dieb melden.',
            option2: 'Höchstwahrscheinlich würde ich die Polizei anrufen und den Dieb melden.',
            option3: 'Vermutlich würde ich die Polizei anrufen und den Dieb melden.',
            option4: 'Vermutlich würde ich nichts tun und den Dieb laufen lassen.',
            option5: 'Höchstwahrscheinlich würde ich nichts tun und den Dieb laufen lassen.',
            option6: 'Definitiv würde ich nichts tun und den Dieb laufen lassen.',
        },
        {
            id: 3,
            chunk1: '60% der Teilnehmer, die mit Ihnen in Hinsicht auf ',
            chunk2: ' übereinstimmen, würden den Dieb laufen lassen.',
            chunk3: '85% der Teilnehmer, die mit Ihnen in Hinsucht auf ',
            chunk4: ' nicht übereinstimmen, würden den Dieb bei der Polizei melden.',
            option1: 'Definitiv würde ich die Polizei anrufen und den Dieb melden.',
            option2: 'Höchstwahrscheinlich würde ich die Polizei anrufen und den Dieb melden.',
            option3: 'Vermutlich würde ich die Polizei anrufen und den Dieb melden.',
            option4: 'Vermutlich würde ich nichts tun und den Dieb laufen lassen.',
            option5: 'Höchstwahrscheinlich würde ich nichts tun und den Dieb laufen lassen.',
            option6: 'Definitiv würde ich nichts tun und den Dieb laufen lassen.',
        },
        {
            id: 4,
            chunk1: '60% der Teilnehmer, die mit Ihnen in Hinsicht auf ',
            chunk2: ' übereinstimmen, würden den Dieb bei der Polizei melden.',
            chunk3: '85% der Teilnehmer, die mit Ihnen in Hinsicht auf ',
            chunk4: ' nicht übereinstimmen, würden den Dieb laufen lassen.',
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
            question: 'Angenommen, Sie entscheiden sich dafür die Polizei zu verständigen und den Dieb zu melden. Wie gut fühlen Sie sich mit dieser Entscheidung?',
            optionRight: 'Sehr gut',
            optionLeft: 'Sehr schlecht',
        },
    ],
};

const understanding = {
    choice: [
        {
            option1: 'Die Teilnehmer sollten das Experiment mit geschlossenen Augen absolvieren.',
            option2: 'In dem Experiment nahmen die Teilnehmer Stellung zu einem moralischen Dilemma.',
            option3: 'Wegen eines Computerfehlers konnten die Teilnehmer nicht richtig verteilt werden, um sich die Ausführungen der verschiedenen Handlungen vorzustellen.',
            option4: 'Die Daten aus den vorherigen Experiment wurden nicht gespeichert.',
            expected: 'In dem Experiment nahmen die Teilnehmer Stellung zu einem moralischen Dilemma.',
        }
    ]
};

const group_identity = {
    check: [
        {
            groups: [
                ['KlimaaktivistInnen', 'Klimaleugnern'],
                ['Migrationsbefürwortenden', 'Migrationsgegnern'],
                ['FeministInnen', 'Nicht-Feministen'],
                ['Legalisierungsbefürwortenden', 'Legalisierungsgegnern'],
                ['Befürwortenden zur Beibehaltung des Rentenalters', 'Rentenalter-Anhebungs-Befürwortern'],
                ['Veganern und Vegetariern', 'Omnivoren'],
                ['G8-Befürwortenden', 'G9-Befürwortenden'],
                ['Pro-Choice-Befürwortenden', 'Pro-Life-Befürwortenden'],
            ],
            choice: [
                'Stimme voll zu',
                'Stimme zu',
                'Stimme teils zu',
                'Weder noch',
                'Stimme teils nicht zu',
                'Stimme nicht zu',
                'Stimme gar nicht zu',
            ],
            statement1: 'Ich würde mich als Teil der Gruppe der [ingroup] bezeichnen.',
            statement2: 'Ich würde mich als Teil der Gruppe der [outgroup] bezeichnen.',
        },    
    ],
};