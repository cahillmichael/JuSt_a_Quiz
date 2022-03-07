var startBtn = window.document.querySelector("#start-btn");
var quizBox = window.document.querySelector("#quiz-box");

var allQuestions = [
    {
        question: "Commonly used data types do NOT include:",
        answers: {
            1: "Strings",
            2: "Booleans",
            3: "Alerts",
            4: "Numbers",
        },
        correctAnswer: "Alerts",
    },
    {
        question: "The condition in an if/else statement is enclosed with _____.",
        answers: {
            1: "Quotes",
            2: "Curly Brackets",
            3: "Square Brackets",
            4: "Parentheses",
        },
        correctAnswer: "Parentheses",
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        answers: {
            1: "Numbers and Strings",
            2: "Other Arrays",
            3: "Booleans",
            4: "All of the Above",
        },
        correctAnswer: "All of the Above",
    },
    {
        question: "String values must be enclosed in _____ when being assigned to variables.",
        answers: {
            1: "Commas",
            2: "Quotes",
            3: "Curly Brackets",
            4: "Parentheses",
        },
        correctAnswer: "Quotes",
    },   
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: {
            1: "JavaScript",
            2: "Terminal Bash",
            3: "For Loops",
            4: "Console.log",
        },
        correctAnswer: "Console.log",
    },    
]

//clear quiz box
var clearQuizBox = function() {
    quizBox.innerHTML = "";
}

//start quiz
var startQuiz = function() {
    console.log("clicked");
    clearQuizBox();

}

startBtn.addEventListener("click", startQuiz);