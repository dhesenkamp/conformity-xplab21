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
                'Zum Erreichen des 1,5°-Grad-Ziels müssen strengere Maßnahmen ergriffen werden.',
                'In Deutschland muss es eine Migrationsobergrenze geben.',
                'Eine Frauenquote in allen Institutionen ist essentiell für Gleichberechtigung.',
                'Cannabis sollte für Erwachsene frei zugänglich sein.',
                'Das Rentenalter sollte angehoben werden.',
                'Der Fleischkonsum muss deutlich reduziert werden, daher esse ich kein Fleisch.',
                'G8 sollte in ganz Deutschland eingeführt werden.',
                'Jede Frau sollte die Möglichkeit haben, ihr Kind bis zum 3. Schwangerschaftsmonat abtreiben zu können.'
            ],
        },
    ],
};

// Experimental conditions are hard-coded. One of the below trials will be choosen randomly.
// Throughout the trials, the
//  i. ingroup statements
//  ii. outgroup statements
//  iii. oder of in-/outgroup statements changes.
const dilemma = {
    choice: [
        {
            id: 1,
            ingroupNorm: 0,
            bothShown: 0,
            ingroupFirst: 0,
            chunk1: '...etwa 60% der Teilnehmer, die mit Ihnen in Hinsicht auf ',
            chunk2: ' übereinstimmen, entschieden, nichts zu tun und den Dieb laufen zu lassen.',
            chunk3: '',
            chunk4: '',
            option1: 'Definitiv die Polizei anrufen und den Dieb melden.',
            option2: 'Höchstwahrscheinlich die Polizei anrufen und den Dieb melden.',
            option3: 'Vermutlich die Polizei anrufen und den Dieb melden.',
            option4: 'Vermutlich nichts tun und den Dieb laufen lassen.',
            option5: 'Höchstwahrscheinlich nichts tun und den Dieb laufen lassen.',
            option6: 'Definitiv nichts tun und den Dieb laufen lassen.',
        },
        {
            id: 2,
            ingroupNorm: 1,
            bothShown: 0,
            ingroupFirst: 0,
            chunk1: '...etwa 60% der Teilnehmer, die mit Ihnen in Hinsicht auf ',
            chunk2: ' übereinstimmen, entschieden, die Polizei anzurufen und den Dieb zu melden.',
            chunk3: '',
            chunk4: '',
            option1: 'Definitiv die Polizei anrufen und den Dieb melden.',
            option2: 'Höchstwahrscheinlich die Polizei anrufen und den Dieb melden.',
            option3: 'Vermutlich die Polizei anrufen und den Dieb melden.',
            option4: 'Vermutlich nichts tun und den Dieb laufen lassen.',
            option5: 'Höchstwahrscheinlich nichts tun und den Dieb laufen lassen.',
            option6: 'Definitiv nichts tun und den Dieb laufen lassen.',
        },
        {
            id: 3,
            ingroupNorm: 0,
            bothShown: 0,
            ingroupFirst: 0,
            chunk1: '...etwa 60% der Teilnehmer, die mit Ihnen in Hinsicht auf ',
            chunk2: ' übereinstimmen, entschieden, nichts zu tun und den Dieb laufen zu lassen.',
            chunk3: '',
            chunk4: '',
            option1: 'Definitiv die Polizei anrufen und den Dieb melden.',
            option2: 'Höchstwahrscheinlich die Polizei anrufen und den Dieb melden.',
            option3: 'Vermutlich die Polizei anrufen und den Dieb melden.',
            option4: 'Vermutlich nichts tun und den Dieb laufen lassen.',
            option5: 'Höchstwahrscheinlich nichts tun und den Dieb laufen lassen.',
            option6: 'Definitiv nichts tun und den Dieb laufen lassen.',
        },
        {
            id: 4,
            ingroupNorm: 1,
            bothShown: 0,
            ingroupFirst: 0,
            chunk1: '...etwa 60% der Teilnehmer, die mit Ihnen in Hinsicht auf ',
            chunk2: ' übereinstimmen, entschieden, die Polizei anzurufen und den Dieb zu melden.',
            chunk3: '',
            chunk4: '',
            option1: 'Definitiv die Polizei anrufen und den Dieb melden.',
            option2: 'Höchstwahrscheinlich die Polizei anrufen und den Dieb melden.',
            option3: 'Vermutlich die Polizei anrufen und den Dieb melden.',
            option4: 'Vermutlich nichts tun und den Dieb laufen lassen.',
            option5: 'Höchstwahrscheinlich nichts tun und den Dieb laufen lassen.',
            option6: 'Definitiv nichts tun und den Dieb laufen lassen.',
        },
        {
            id: 5,
            ingroupNorm: 0,
            bothShown: 1,
            ingroupFirst: 1,
            chunk1: '...etwa 60% der Teilnehmer, die mit Ihnen in Hinsicht auf ',
            chunk2: ' übereinstimmen, entschieden, nichts zu tun und den Dieb laufen zu lassen.',
            chunk3: '...etwa 85% der Teilnehmer, die Ihnen in Hinsicht auf ',
            chunk4: ' widersprechen, entschieden, die Polizei anzurufen und den Dieb zu melden.',
            option1: 'Definitiv die Polizei anrufen und den Dieb melden.',
            option2: 'Höchstwahrscheinlich die Polizei anrufen und den Dieb melden.',
            option3: 'Vermutlich die Polizei anrufen und den Dieb melden.',
            option4: 'Vermutlich nichts tun und den Dieb laufen lassen.',
            option5: 'Höchstwahrscheinlich nichts tun und den Dieb laufen lassen.',
            option6: 'Definitiv nichts tun und den Dieb laufen lassen.',
        },
        {
            id: 6,
            ingroupNorm: 0,
            bothShown: 1,
            ingroupFirst: 1,
            chunk1: '...etwa 60% der Teilnehmer, die mit Ihnen in Hinsicht auf ',
            chunk2: ' übereinstimmen, entschieden, die Polizei anzurufen und den Dieb zu melden.',
            chunk3: '...etwa 85% der Teilnehmer, die Ihnen in Hinsicht auf ',
            chunk4: ' widersprechen, entschieden, nichts zu tun und den Dieb laufen zu lassen.',
            option1: 'Definitiv die Polizei anrufen und den Dieb melden.',
            option2: 'Höchstwahrscheinlich die Polizei anrufen und den Dieb melden.',
            option3: 'Vermutlich die Polizei anrufen und den Dieb melden.',
            option4: 'Vermutlich nichts tun und den Dieb laufen lassen.',
            option5: 'Höchstwahrscheinlich nichts tun und den Dieb laufen lassen.',
            option6: 'Definitiv nichts tun und den Dieb laufen lassen.',
        },
        {
            id: 7,
            ingroupNorm: 1,
            bothShown: 1,
            ingroupFirst: 0,
            chunk1: '...etwa 85% der Teilnehmer, die Ihnen in Hinsicht auf ',
            chunk2: ' widersprechen, entschieden, die Polizei anzurufen und den Dieb zu melden.',
            chunk3: '...etwa 60% der Teilnehmer, die mit Ihnen in Hinsicht auf ',
            chunk4: ' übereinstimmen, entschieden, nichts zu tun und den Dieb laufen zu lassen.',
            option1: 'Definitiv die Polizei anrufen und den Dieb melden.',
            option2: 'Höchstwahrscheinlich die Polizei anrufen und den Dieb melden.',
            option3: 'Vermutlich die Polizei anrufen und den Dieb melden.',
            option4: 'Vermutlich nichts tun und den Dieb laufen lassen.',
            option5: 'Höchstwahrscheinlich nichts tun und den Dieb laufen lassen.',
            option6: 'Definitiv nichts tun und den Dieb laufen lassen.',
        },
        {
            id: 8,
            ingroupNorm: 0,
            bothShown: 1,
            ingroupFirst: 0,
            chunk1: '...etwa 85% der Teilnehmer, die Ihnen in Hinsicht auf ',
            chunk2: ' widersprechen, entschieden, nichts zu tun und den Dieb laufen zu lassen.',
            chunk3: '...etwa 60% der Teilnehmer, die mit Ihnen in Hinsicht auf ',
            chunk4: ' übereinstimmen, entschieden, die Polizei anzurufen und den Dieb zu melden.',
            option1: 'Definitiv die Polizei anrufen und den Dieb melden.',
            option2: 'Höchstwahrscheinlich die Polizei anrufen und den Dieb melden.',
            option3: 'Vermutlich die Polizei anrufen und den Dieb melden.',
            option4: 'Vermutlich nichts tun und den Dieb laufen lassen.',
            option5: 'Höchstwahrscheinlich nichts tun und den Dieb laufen lassen.',
            option6: 'Definitiv nichts tun und den Dieb laufen lassen.',
        },
    ],

    rating: [
        {
            optionRight: 'Sehr gut',
            optionLeft: 'Sehr schlecht',
            choices: [
                ' definitiv die Polizei anzurufen und den Dieb zu melden?',
                ' höchstwahrscheinlich die Polizei anzurufen und den Dieb zu melden?',
                ' vermutlich die Polizei anzurufen und den Dieb zu melden?',
                ' vermutlich nichts zu tun und den Dieb laufen zu lassen?',
                ' höchstwahrscheinlich nichts zu tun und den Dieb laufen zu lassen?',
                ' definitiv nichts zu tun und den Dieb laufen zu lassen?',
            ],
        },
    ],
};

const understanding = {
    choice: [
        {
            option1: 'Die Teilnehmer nahmen Stellung zu einem moralischen Dilemma.',
            option2: 'Die Teilnehmer sollten das Experiment mit geschlossenen Augen absolvieren.',
            option3: 'Die Teilnehmer mussten Haustiere nach Niedlichkeit bewerten.',
            option4: 'Die Daten aus dem vorherigen Experiment wurden nicht gespeichert.',
            // correct: option 1
            expected: 1,
        }
    ]
};

const group_identity = {
    check: [
        {
            groups: [
                ['Klimaaktivist:innen', 'Klimakrisenleugnern'],
                ['Migrationsgegnern', 'Migrationsbefürwortenden',],
                ['Feminist:innen', 'Nicht-Feministen'],
                ['Legalisierungsbefürwortenden', 'Legalisierungsgegnern'],
                ['Befürwortenden zur Anhebung des Rentenalters', 'Befürwortenden zur Beibehaltung des Rentenalters'],
                ['Veganern und Vegetariern', 'Omnivoren'],
                ['G8-Befürwortenden', 'G9-Befürwortenden'],
                ['Pro-Choice-Befürwortenden', 'Pro-Life-Befürwortenden'],
            ],
            choice: [
                'Stimme gar nicht zu',
                'Stimme nicht zu',
                'Stimme teils nicht zu',
                'Weder noch',
                'Stimme teils zu',
                'Stimme zu',
                'Stimme voll zu',
            ],
            // not used
            statement1: 'Ich würde mich als Teil der Gruppe der [ingroup] bezeichnen.',
            statement2: 'Ich würde mich als Teil der Gruppe der [outgroup] bezeichnen.',
        },
    ],
};
