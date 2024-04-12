// script.js

// Define quiz data
const quizData = [
    {
        question: "Penses-tu que notre amour peut surmonter n'importe quel obstacle?",
        answer: "oui"
    },
    {
        question: "Crois-tu que notre amour peut durer pour toujours",
        answer: "oui"
    },
    {
        question: "Est-ce que tu te sens en sécurité et soutenu dans notre relation amoureuse?",
        answer: "oui"
    }
];

// Get elements from the DOM
const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const yesButton = document.getElementById("oui-btn");
const noButton = document.getElementById("no-btn");
const submitButton = document.getElementById("submit-btn");
const resultElement = document.getElementById("result");
const endingElement = document.getElementById("ending");

// Initialize variables
let currentQuestionIndex = 0;
let score = 0;

// Function to load question
function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
}

// Function to handle option selection
function selectOption(option) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (option === currentQuestion.answer) {
        score++;
    }
    moveToNextQuestion();
}

// Function to move to the next question or show result
function moveToNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// Function to show result
function showResult() {
    quizContainer.style.display = "none";
    resultElement.innerText = `You scored ${score}/${quizData.length}`;
    resultElement.style.display = "block";
    endingElement.style.display = "block";
}

// Load the first question
loadQuestion();

// Event listeners for option buttons
yesButton.addEventListener("click", function() {
    selectOption("oui");
});

noButton.addEventListener("click", function() {
    selectOption("No");
});
