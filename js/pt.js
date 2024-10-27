const quizData = [
        {
            question: "Você já faz vendas no mercado digital?",
            a: {
                text: "Já tentei de tudo e não estou vendendo",
                emoji: "😫"
            },
            b: {
                text: "Já faço vendas, mas muito pouco",
                emoji: "😐"
            },
            c: {
                text: "Nunca tentei",
                emoji: "😪"
            },
            d: {
                text: "Vivo 100% Digitalmente",
                emoji: "😁"
            },
            correto: "c"
        },
        {
            question: "Você já fez algum treinamento?",
            a: {
                text: "Sim, mas não obtive resultados.",
                emoji: "😟" // Preocupado
            },
            b: {
                text: "Nunca fiz treinamento",
                emoji: "😕" // Confuso
            },
            c: {
                text: "Sim, e tive bons resultados.",
                emoji: "😄" // Sorridente
            },
            d: {
                text: "Eu sou a caixa",
                emoji: "😜" // Brincalhão
            },
            correto: "b"
        },
        {
            question: "Agora, para me ajudar a entender melhor, qual é o seu faturamento atual?",
            a: {
                text: "ZERO",
                emoji: "😢" // Triste
            },
            b: {
                text: "Entre 1k e 10k por mês",
                emoji: "😐" // Neutro
            },
            c: {
                text: "Entre 50k e 100k por mês",
                emoji: "😊" // Satisfeito
            },
            d: {
                text: "Acima de 100k por mês",
                emoji: "😎" // Descolado
            },
            correto: "b"
        },
        {
            question: "Você quer um quiz interativo?",
            a: {
                text: "Sim, agora! Quero vender mais!",
                emoji: "🚀"
            },
            b: {
                text: "Não quero, prefiro continuar sendo um fracassado.",
                emoji: "😞"
            },
            // c e d são omitidos, pois não são necessários
            correto: "b"
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
                <iframe width="540" height="555" src="https://64a50b06.sibforms.com/serve/MUIFAGG0ybEoqzWvGapnuPmSmuEFM7K-mVAO0BQLAlz6o--ncCcfPFfHKtKkBkvSrQJ52r6XGOLXB-agQI-y1Qa5a4pm4q05nAnlj_Qo8kWiRluajGT-czKjJq_6XmQgc5f16bDYn1YufPC1y7bYaEAqdMm72QK8fp9g-Jvb0ZEC8WPi2xtjokjlzhPtLtaQI7oaMNR9DJbbheh1" frameborder="0" scrolling="auto" allowfullscreen style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe>
            `;
        }
    });
});
