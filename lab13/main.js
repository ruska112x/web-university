const quizQuestions = [
    {
        question: "1. Какой тег используется для создания заголовков в HTML?",
        answers: {
            a: "h1 - h6",
            b: "header",
            c: "div",
            d: "section"
        },
        correctAnswer: "a"
    },
    {
        question: "2. Что означает 'CSS'?",
        answers: {
            a: "Computer Style Sheets",
            b: "Creative Style System",
            c: "Cascading Style Sheets",
            d: "Colorful Style Syntax"
        },
        correctAnswer: "c"
    },
    {
        question: "3. Какая из этих технологий используется для динамического обновления данных на веб-странице?",
        answers: {
            a: "HTML",
            b: "CSS",
            c: "JavaScript",
            d: "XML"
        },
        correctAnswer: "c"
    },
    {
        question: "4. Какой атрибут HTML используется для ссылки на внешний файл CSS?",
        answers: {
            a: "style",
            b: "class",
            c: "link",
            d: "href"
        },
        correctAnswer: "d"
    },
    {
        question: "5. Что такое 'flexbox' в CSS?",
        answers: {
            a: "Модель для создания сеток",
            b: "Модель для гибкой компоновки элементов",
            c: "Способ определения цвета",
            d: "Тип шрифтового семейства"
        },
        correctAnswer: "b"
    },
    {
        question: "6. Какой метод используется в JavaScript для добавления элемента в конец массива?",
        answers: {
            a: "push()",
            b: "pop()",
            c: "concat()",
            d: "unshift()"
        },
        correctAnswer: "a"
    },
    {
        question: "7. Как называется свойство в CSS для задания отступов внутри элемента?",
        answers: {
            a: "padding",
            b: "margin",
            c: "border",
            d: "outline"
        },
        correctAnswer: "a"
    },
    {
        question: "8. Какой протокол используется для безопасного обмена данными между клиентом и сервером?",
        answers: {
            a: "HTTP",
            b: "FTP",
            c: "SMTP",
            d: "HTTPS"
        },
        correctAnswer: "d"
    },
    {
        question: "9. Что такое 'API' в веб-программировании?",
        answers: {
            a: "Application Programming Interface",
            b: "Advanced Programming Input",
            c: "Abstract Process Integration",
            d: "Automated Protocol Interface"
        },
        correctAnswer: "a"
    },
    {
        question: "10. Какой тег используется для вставки изображения в HTML?",
        answers: {
            a: "img",
            b: "src",
            c: "picture",
            d: "figure"
        },
        correctAnswer: "a"
    },
    {
        question: "11. Что такое 'DOM' в JavaScript?",
        answers: {
            a: "Data Object Model",
            b: "Document Object Model",
            c: "Dynamic Object Mapping",
            d: "Display Output Mechanism"
        },
        correctAnswer: "b"
    },
    {
        question: "12. Какой тег HTML используется для создания списка с маркерами?",
        answers: {
            a: "ul",
            b: "ol",
            c: "li",
            d: "dl"
        },
        correctAnswer: "a"
    },
    {
        question: "13. Что означает 'HTML'?",
        answers: {
            a: "HyperText Markup Language",
            b: "HyperTransfer Modulation Language",
            c: "HighText Markup Language",
            d: "HyperTool Markup Language"
        },
        correctAnswer: "a"
    },
    {
        question: "14. Какое свойство в CSS используется для задания теней у блока?",
        answers: {
            a: "box-shadow",
            b: "text-shadow",
            c: "shadow-effect",
            d: "border-shadow"
        },
        correctAnswer: "a"
    },
    {
        question: "15. Какой метод используется в JavaScript для удаления элемента из конца массива?",
        answers: {
            a: "shift()",
            b: "pop()",
            c: "remove()",
            d: "slice()"
        },
        correctAnswer: "b"
    },
    {
        question: "16. Какое свойство CSS используется для изменения цвета текста?",
        answers: {
            a: "font-color",
            b: "background-color",
            c: "color",
            d: "text-color"
        },
        correctAnswer: "c"
    },
    {
        question: "17. Какой атрибут используется для задания альтернативного текста изображения в HTML?",
        answers: {
            a: "alt",
            b: "title",
            c: "src",
            d: "data-alt"
        },
        correctAnswer: "a"
    },
    {
        question: "18. Какое событие используется в JavaScript для выполнения действия при нажатии на кнопку?",
        answers: {
            a: "onpress",
            b: "onclick",
            c: "onhover",
            d: "ondrag"
        },
        correctAnswer: "b"
    },
    {
        question: "19. Какой метод используется для преобразования строки в число в JavaScript?",
        answers: {
            a: "Number()",
            b: "parseInt()",
            c: "toString()",
            d: "String()"
        },
        correctAnswer: "b"
    },
    {
        question: "21. Что такое 'localStorage' в JavaScript?",
        answers: {
            a: "Механизм для хранения данных в памяти браузера",
            b: "Способ локальной загрузки файлов",
            c: "Функция для работы с файловой системой",
            d: "API для кэширования страниц"
        },
        correctAnswer: "a"
    },
    {
        question: "22. Введите значение свойства CSS для задания полного экрана:",
        inputAnswer: true,
        correctAnswer: "100vw"
    }
];

function buildQuiz() {
    const quizContainer = document.getElementById('quiz');
    const output = [];

    quizQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];

        if (currentQuestion.inputAnswer) {
            answers.push(`<input type="text" name="question${questionNumber}" placeholder="Введите ваш ответ" />`);
        } else {
            for (let letter in currentQuestion.answers) {
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter}: ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
        }

        output.push(
            `<div class="question">${currentQuestion.question}</div>
            <div class="answers">${answers.join('')}</div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = document.querySelectorAll('.answers');
    let correctAnswersCount = 0;

    quizQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        let userAnswer = '';

        if (currentQuestion.inputAnswer) {
            userAnswer = (answerContainer.querySelector('input[type="text"]') || {}).value.trim();
        } else {
            userAnswer = (answerContainer.querySelector('input[type="radio"]:checked') || {}).value;
        }

        if (userAnswer === currentQuestion.correctAnswer) {
            correctAnswersCount++;
            answerContainers[questionNumber].style.color = 'green';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = `<p>Вы ответили правильно на ${correctAnswersCount} из ${quizQuestions.length} вопросов.</p>`;

    let message;
    let imgSrc;

    if (correctAnswersCount >= 17) {
        message = 'Отличный результат!';
        imgSrc = 'assets/great.jpg';

    } else if (correctAnswersCount >= 10) {
        message = 'Хороший результат!';
        imgSrc = 'assets/good.jpeg';
    } else {
        message = 'Нужно больше практики.';
        imgSrc = 'assets/bad.jpg';
    }

    resultsContainer.innerHTML += ` <p>${message}</p><img src=\"${imgSrc}\"/>`;
}

buildQuiz();

document.getElementById('submit').addEventListener('click', showResults);
