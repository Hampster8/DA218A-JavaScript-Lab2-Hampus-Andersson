
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffleQuestions, currentQuestionIndex;
let quizScore = 0;




const questions = [
    {
    question: "Which one of these is a JavaScript framework?",
    answers: [
        {text: "Python", correct: false},
        {text: "Django", correct: false},
        {text: "React", correct: true},
        {text: "Eclipse", correct: false},
            ],
    },
    {
    question: "Who's the prime minister of India?",
    answers: [
        {text: "Narendra Modie", correct: true},
        {text: "Rahul Gandhi", correct: false},
        {text: "Mahatma Gandhi", correct: false}
                ],
    },
    question: "What is 4*3?",
    answers: [
        {text: "15", correct: false},
        {text: "12", correct: true},
        {text: "10", correct: false}
                ],
    },
]



