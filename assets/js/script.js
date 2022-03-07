var startBtn = document.querySelector("#start-btn");
var quizBox = document.querySelector("#quiz-box");
var qCount = 0;

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

    clearQuizBox();
    newQuestion();
}

//load new question data
var newQuestion = function() {
    if(qCount >= allQuestions.length){
        clearQuizBox();
    }
    else{
        clearQuizBox();
        
        var questionText = document.createElement("h2");
        questionText.className = "questionHeader";
        questionText.textContent = allQuestions[qCount].question;

        var answers = document.createElement("div");
        answers.className = "answers";
        var answer1 = document.createElement("button");
        var answer2 = document.createElement("button");
        var answer3 = document.createElement("button");
        var answer4 = document.createElement("button");

        answer1.className = "answer-btn";
        answer2.className = "answer-btn";
        answer3.className = "answer-btn";
        answer4.className = "answer-btn";

        answer1.textContent = "1. " + allQuestions[qCount].answers[1];
        answer2.textContent = "2. " + allQuestions[qCount].answers[2];
        answer3.textContent = "3. " + allQuestions[qCount].answers[3];
        answer4.textContent = "4. " + allQuestions[qCount].answers[4];

        quizBox.appendChild(questionText);
        quizBox.appendChild(answers);
        answers.appendChild(answer1);
        answers.appendChild(answer2);
        answers.appendChild(answer3);
        answers.appendChild(answer4);
    }
}

startBtn.addEventListener("click", startQuiz);