const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const createCircle = (x, y) => {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    circle.style.backgroundColor = getRandomColor();
    circle.dataset.clickCount = '0';
    document.body.appendChild(circle);
}

const handleCircleClick = (circle) => {
    let clickCount = parseInt(circle.dataset.clickCount);

    circle.dataset.clickCount = ++clickCount;
    
    if (clickCount === 0) {
        circle.classList.remove('border-only');
        circle.classList.add('reset');
    } else if (clickCount === 1) {
        circle.classList.remove('reset');
        circle.classList.add('grow');
        circle.style.backgroundColor = getRandomColor();
    } else if (clickCount === 2) {
        circle.classList.add('border-only');
        circle.style.borderColor = getRandomColor();
        circle.style.backgroundColor = 'transparent';
    } else if (clickCount === 3) {
        circle.remove();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    createCircle(100, 100);

    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('circle')) {
            handleCircleClick(event.target);
        } else {
            createCircle(event.clientX - 50, event.clientY - 50);
        }
    });
});
