function predict() {
    const answers = {
        positive: [
            "Да, без сомнений!",
            "Все будет отлично!",
            "Ты на правильном пути!"
        ],
        positive_neutral: [
            "Вероятнее всего",
            "Знаки говорят - да",
            "Хорошие перспективы"
        ],
        neutral: [
            "Возможно...",
            "Не могу точно сказать.",
            "Все может измениться."
        ],
        negative: [
            "Скорее всего, нет.",
            "Это маловероятно.",
            "Не ждите этого."
        ]
    };

    const categories = ['positive', 'neutral', 'negative', 'positive_neutral'];
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];

    const randomAnswer = answers[randomCategory][Math.floor(Math.random() * answers[randomCategory].length)];

    document.getElementById('answer').innerText = randomAnswer;
}
