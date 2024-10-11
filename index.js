const quizData = [
    {
        question: "O que você precisa?",
        a: "Página de Venda",
        b: "Site Institucional ou Portfólio",
        c: "Aplicativo de Celular",
        d: "Sistema com Banco de Dados",
        correct: "c"
    },
    {
        question: "Qual nível o projeto está?",
        a: "Possuo a ideia, mas não tenho nada criado",
        b: "Não tenha uma idea, preciso de ajuda",
        c: "Já existe, mas preciso corrigir bugs",
        d: "Procuro suporte pra manutenção contínua",
        correct: "b"
    },
    {
        question: "E qual seria a urgência do projeto?",
        a: "Quero essa semana",
        b: "Quero esse mês",
        c: "Quero no próximo mês",
        d: "Mão tenho urgência",
        correct: "b"
    },
    {
        question: "Sua empresa tem quantos funcionários?",
        a: "1",
        b: "2 a 5",
        c: "6 a 10",
        d: "mais de 11",
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

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    answerEls[0].innerText = currentQuizData.a;
    answerEls[1].innerText = currentQuizData.b;
    answerEls[2].innerText = currentQuizData.c;
    answerEls[3].innerText = currentQuizData.d;
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
                
                <iframe width="540" height="555" src="https://64a50b06.sibforms.com/serve/MUIFAPqIMuvHTJupjhowD0BI_PSgD8b7ul4Rjb3xYoYi3jE928tBOyJjCZkDIB4p5YQhJo3Oen9eFIadJKN-9PE_nxS7zVj745E7EbHSPwiyx3OC0J55YDMMBi5fVjSeaeQoS6l6LKraVVs9j9ngqGvW-zT432dQARRqO2rEIK7O37cm_klClv55LxwjKNqYgeQ8VVb6wLfezkLn" frameborder="0" scrolling="auto" allowfullscreen style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe>
            `;
        }
    });
});
