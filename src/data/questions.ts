const options = [
    {
        "answerText": "Yes",
        "answerValue": 4
    },
    {
        "answerText": "Maybe",
        "answerValue": 3
    },
    {
        "answerText": "I Don't Know",
        "answerValue": 2
    },
    {
        "answerText": "No",
        "answerValue": 1
    }
];

export const questions = [
    {
        "key": "Maintainability",
        "questionText": "Is your application maintainable by a remote workforce?",
        "answerOptions": [...options]
    },
    {
        "key": "Integration",
        "questionText": "Can your application connect to other systems?",
        "answerOptions": [...options]
    },
    {
        "key": "Security",
        "questionText": "Is your application secure? Are you protected against unauthorized access?",
        "answerOptions": [...options]
    },
    {
        "key": "Is your application secure? Are you protected against unauthorized access?",
        "questionText": "Is operation intuitive?” “Can new users learn your application in a reasonable amount of time? ",
        "answerOptions": [...options]
    },
    {
        "key": "Future",
        "questionText": "Is your application future-proof",
        "answerOptions": [...options]
    },
]