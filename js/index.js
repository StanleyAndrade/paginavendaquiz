const quizData = [
    {
        question: "You already make  sales in the digital market?",
        a: {
            text: "I've tried everything and I'm not selling",
            emoji: "😫"
        },
        b: {
            text: "I already make sales, but very little",
            emoji: "😐"
        },
        c: {
            text: "I 've never tried",
            emoji: "😪"
        },
        d: {
            text: "I live 100% Digitally",
            emoji: "😁"
        },
        correct: "c"
    },
    {
        question: "Have you done any training?",
        a: {
            text: "Yes, but I didn't get any results.",
            emoji: "😟" // Preocupado
        },
        b: {
            text: "I have never done training",
            emoji: "😕" // Confuso
        },
        c: {
            text: "Yes, and I had good results.",
            emoji: "😄" // Sorridente
        },
        d: {
            text: "I'm the box",
            emoji: "😜" // Brincalhão
        },
        correct: "b"
    },    
    {
        question: "Now, to help me understand better, what is your current turnover?",
        a: {
            text: "ZERO",
            emoji: "😢" // Triste
        },
        b: {
            text: "Between 1k and 10k month",
            emoji: "😐" // Neutro
        },
        c: {
            text: "Between 50k and 100k per month",
            emoji: "😊" // Satisfeito
        },
        d: {
            text: "Above 100k month",
            emoji: "😎" // Descolado
        },
        correct: "b"
    },
    
    {
        question: "Do you want an interactive quiz?",
        a: {
            text: "Yes, now! I want to sell more!",
            emoji: "🚀"
        },
        b: {
            text: "I don't want to, I prefer to continue being a failure.",
            emoji: "😞"
        },
        // c e d são omitidos, pois não são necessários
        correct: "b"
    }
    
];


const startScreen = document.getElementById('start-screen');
const startBtn = document.getElementById('start-btn');
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer');

let currentQuiz = 0;
let score = 0;

// Evento para iniciar o quiz
startBtn.addEventListener('click', () => {
    startScreen.style.display = 'none';
    quiz.style.display = 'block';
    loadQuiz();
});

const emojis = ["😫", "😐", "😪", "😁"]; // Lista de emojis para cada resposta

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    // Cria um array para armazenar as respostas
    const answers = [currentQuizData.a, currentQuizData.b, currentQuizData.c, currentQuizData.d];

    // Limpa as respostas anteriores
    answerEls.forEach((answerEl, index) => {
        // Verifica se a resposta existe e atualiza o HTML
        if (answers[index]) {
            answerEl.innerHTML = `${answers[index].text} <span class="emoji">${answers[index].emoji}</span>`;

        } else {
            answerEl.innerHTML = ''; // Limpa o conteúdo se não houver resposta
            answerEl.style.display = 'none'; // Esconde o card
        }
    });
    
    // Atualiza a barra de progresso
    const progressBar = document.getElementById('progress-bar');
    const progressPercentage = ((currentQuiz + 1) / quizData.length) * 100; // Cálculo da porcentagem
    progressBar.style.width = `${progressPercentage}%`; // Atualiza a largura da barra
}



function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.classList.remove('selected'));
}

answerEls.forEach(answerEl => {
    answerEl.addEventListener('click', () => {
        const selectedAnswer = answerEl.getAttribute('data-answer');

        if (selectedAnswer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                
                <iframe width="540" height="555" src="https://64a50b06.sibforms.com/serve/MUIFAHma3Ir6rd6sA740TRzVFxhVaK9VKBtKuAAjBH4CxBVkHbsbzKAGAp3SLYyrgTn-dtXe8bRZeMV8h0bQa95ik2ayD4uitkytNmPmmIHYvHBBCH1U39YbyiiKJ2aCxL69T0dRNSqJO8czoOR_shUtSUkCibtwc_IkslF7BTcVkYzicezEWQ-T85_7ljmfMrtwEQAPkyDeOitD" frameborder="0" scrolling="auto" allowfullscreen style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe>
            `;
        }
    });
});
