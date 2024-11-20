const pin01 = document.getElementById("pin01");
const pin02 = document.getElementById("pin02");
const dialog = document.getElementById("dialog");
const dialogText = document.getElementById("dialog-text");
const dialogClose = document.getElementById("dialog-close");

let pin01Expression = "";
let pin02Expression = "";

let choosenInput = 1;

pin01.addEventListener("click", () => {
    choosenInput = 1;
})

pin02.addEventListener("click", () => {
    choosenInput = 2;
})

function addNumber(number) {
    if (choosenInput === 1) {
        pin01Expression += number;
    } else {
        pin02Expression += number;
    }
    pin01.value = pin01Expression;
    pin02.value = pin02Expression;
}

function deleteNumber() {
    if (choosenInput === 1) {
        pin01Expression = pin01Expression.substring(0, pin01Expression.length - 1);
    } else {
        pin02Expression = pin02Expression.substring(0, pin02Expression.length - 1);
    }
    pin01.value = pin01Expression;
    pin02.value = pin02Expression;
}

function enterPins() {
    if (pin01Expression === pin02Expression) {
        dialogText.innerHTML = "Пин-коды совпадают!"
    } else {
        dialogText.innerHTML = "Пин-коды не совпадают!"
    }
    dialog.showModal();
    pin01Expression = "";
    pin02Expression = "";
    pin01.value = pin01Expression;
    pin02.value = pin02Expression;
}

dialogClose.addEventListener("click", () => {
    dialog.close();
})
