const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")
const controlsElement = document.getElementById("controls")
const timerElement = document.getElementById("timer")

let shuffledQuestions, currentQuestionIndex


// Whenever you cick on START button, it will execute the STARTGAME function
startButton.addEventListener("click", startGame)
// startButton.addEventListener("click", startTimer)

nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})

// // Timer: What happens when you click START
// function startTimer() {
//     timeCount = 180000
//     timer = setInterval(function) {
//         timerCount--;
//         timerElement.textContent = timerCount;
//         if (timerCount-- 0) {
//             clearInterval(timer);
//         }
//     }, 1000
// }


// Game: What happens when you click START
function startGame() {
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    controlsElement.classList.remove("hide")
    setNextQuestion()
}

// What happens when you click NEXT
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
            (answerButtonsElement.firstChild)
    }
}


// What happens when you choose an answer
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide")
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
    }
}


function setStatusclass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

const questions = [
    {
        question1: "Are you a silly goose?",
        answer1: [
            { text: "I am the silliest", correct: true },
            { text: "Yes", correct: true },
            { text: "No", correct: false }
        ]
    }
]