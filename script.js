const questions = [
    {
        question: "Which organization defines Web standards?",
        answers: [
            { text: "Apple Inc", correct: false},
            { text: "IBM Corporation", correct:false},
            { text: "World wide web", correct:true},
            { text: "Microsoft Corporation", correct:false},
        ]
    },    
    {
        question: "HTML is considered as ______ ?",
        answers: [
            { text: "Programming language", correct: false},
            { text: "OOP language", correct:false},
            { text: "High level language", correct:false},
            { text: "Markup language", correct:true},
        ]
    },
    {
        question: " HTML uses ______?",
        answers: [
            { text: "User-defined tags", correct: false},
            { text: "Predefined tags", correct:false},
            { text: "Fixed tags defined by the language", correct:true},
            { text: "Tags for links only", correct:false},
        ]
    },
    {
        question: "HTML was first proposed in ___.",
        answers: [
            { text: "1980", correct: false},
            { text: "1990", correct:true},
            { text: "1995", correct:false},
            { text: "2000", correct:false},
        ]
    },
    {
        question: "Which of the following is not a browser?",
        answers: [
            { text: "Mozilla Firefox", correct: false},
            { text: "Netscape", correct:false},
            { text: "Microsoft Bing", correct:true},
            { text: "Opera", correct:false},
        ]
    },
    {
        question: "Who is the main author of the HTML?",
        answers: [
            { text: "Brendan Eich", correct: false},
            { text: "Tim Berners-Lee", correct:true},
            { text: "Web developer", correct:false},
            { text: "Google Inc", correct:false},
        ]
    },
    {
        question: "If we want to set the style for just one element, which css selector will we use?",
        answers: [
            { text: "id", correct: true},
            { text: "text", correct:false},
            { text: "class", correct:false},
            { text: "name", correct:false},
        ]
    },
    {
        question: " The HTML tag that specifies a CSS style embedded in an element is called ____?",
        answers: [
            { text: "Design", correct: false},
            { text: "Style", correct:true},
            { text: "Modify", correct:false},
            { text: "Define", correct:false},
        ]
    },


];

const questionElement = document.querySelector(".question");
const answerButtons = document.querySelector(".answer-buttons");
const nextButton = document.querySelector(".next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNO = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNO + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.styledisplay = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.ariaDisabled = true;
    });
    nextButton.style.display = "block";
    }
    function showScore(){
        resetState();
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
        nextButton.innerHTML = "Play Again";
        nextButton.style.display = "block";
    }
    function handleNextButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
            showQuestion();
        }else{
            showScore();
        }
    }
    nextButton.addEventListener("click", ()=>{
     if(currentQuestionIndex < questions.length){
        handleNextButton();
     }else{
        startQuiz();
     }
 })
startQuiz();
