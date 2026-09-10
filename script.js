let questionNumber = 0;
 
let questions = [
    {
        question: "Hva er hovedoppgaven til en IT-driftstekniker?",
        answers: ["Vedlikeholde og sikre IT-systemer", "Lage reklame", "Designe nettsider", "Lage dataspill"],
        correct: 0
    },
    {
        question: "Hva brukes en brannmur til?",
        answers: ["Å kjøle ned datamaskinen", "Å beskytte nettverket mot uønsket trafikk", "Å øke skjermoppløsningen", "Å varme datamaskinen"],
        correct: 1
    },
    {
        question: "Hva er en server?",
        answers: ["En datamaskin som tilbyr tjenester til andre enheter", "En Mincraft server", "Et antivirusprogram", "En nettverkskabel"],
        correct: 0
    },
        {
        question: "Hvorfor er sikkerhetskopi viktig?",
        answers: ["For å gjøre internett raskere", "For å få bedre grafikk", "For å kunne gjenopprette data ved tap eller feil", "For å redusere strømforbruket"],
        correct: 2
    },
            {
        question: "Hva betyr det å oppdatere et operativsystem?",
        answers: ["Å slette alle filer", "Å bytte tastatur", "Å koble fra internett", "Å installere nye versjoner"],
        correct: 3
    }
];

function startQuiz() {
    questionNumber = 0;
 
    document.getElementById("start").style.display = "none";
 
    showQuestion();
}
 
function showQuestion() {
 
    let question = questions[questionNumber];
 
    document.getElementById("question").innerText = question.question;
 
    let buttons = document.querySelectorAll("#answers button");
 
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerText = question.answers[i];
        buttons[i].className = "";
        buttons[i].style.display = "block";
    }
 
    document.getElementById("next").style.display = "none";
}
 
function checkAnswer(answer) {
 
    let question = questions[questionNumber];
 
    let buttons = document.querySelectorAll("#answers button");
 
    if (answer == question.correct) {
        buttons[answer].className = "correct";
    } else {
        buttons[answer].className = "wrong";
        buttons[question.correct].className = "correct";
    }
 
    document.getElementById("next").style.display = "inline";
}
 
function nextQuestion() {
 
    questionNumber++;
 
    if (questionNumber < questions.length) {
        showQuestion();
    } else {
        document.getElementById("question").innerText = "Quiz ferdig!";
        document.getElementById("answers").style.display = "none";
        document.getElementById("next").style.display = "none";
        document.getElementById("start").innerText = "Start på nytt";
        document.getElementById("start").style.display = "inline";
    }
} 
