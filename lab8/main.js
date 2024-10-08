const getRandomAngle = () => {
    const angles = [0, 90, 180, 270];
    return angles[Math.floor(Math.random() * 3)];
}

const randomizeImages = () => {
    let images = document.getElementsByClassName("img");
    let values = Array.prototype.map.call(images, (el) => {
        return el;
    });
    values.forEach(img => {
        let angle = getRandomAngle();
        img.dataset.rotateAngle = angle;
        img.style.transform = `rotate(${angle}deg)`;
    });
}

const handleImgClick = (img) => {
    let rotateAngle = parseInt(img.dataset.rotateAngle);
    if (rotateAngle !== 0) {
        rotateAngle += 90;
        rotateAngle %= 360;
        img.dataset.rotateAngle = rotateAngle;
        img.style.transform = `rotate(${rotateAngle}deg)`;
    }
}

const restartGame = () => {
    randomizeImages();
    let endText = document.getElementById("end");
    let restartButton = document.getElementById("restartButton");

    endText.classList.add("unvisible");
    restartButton.classList.add("unvisible");
}

document.addEventListener("DOMContentLoaded", () => {
    randomizeImages();
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('img')) {
            handleImgClick(event.target);
        }
        let images = document.getElementsByClassName("img");
        let values = Array.prototype.map.call(images, (el) => {
            return el;
        });
        let solved = true;
        values.forEach(img => {
            if (parseInt(img.dataset.rotateAngle) !== 0) {
                solved = false;
            }
        });
        let endText = document.getElementById("end");
        let restartButton = document.getElementById("restartButton");
        if (solved) {
            endText.classList.remove("unvisible");
            restartButton.classList.remove("unvisible");
        }
    });
});
