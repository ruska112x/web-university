function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

const printResult = (num, exp) => {
    console.log(` #${num}`);
    exp();
    console.log('');
};

printResult(1, () => {
    let x = randomInteger(-100, 100);
    console.log(`Число: ${x}`);
    console.log(x > 0 ? 'Положительное' : 'Отрицательное');
    console.log(x % 2 === 0 ? 'Четное' : 'Нечетное');
});

printResult(2, () => {
    let x = randomInteger(-42, 42);
    console.log(`Число: ${x}`);
    let first = x.toString();
    let last = x.toString();
    let len = x.toString();
    if (x < 0) {
        first = first[1];
        last = -1 * (x % 10);
        len = len.length - 1;
    } else {
        first = first[0];
        last = x % 10;
        len = len.length;
    }
    console.log(`Первая цифра: ${first}`);
    console.log(`Последняя цифра: ${last}`);
    console.log(`Сумма первой и последней: ${Number(first) + Number(last)}`);
    console.log(`Количество цифр: ${len}`);
});

printResult(3, () => {
    let str = "Veni, vidi, vici";
    console.log(`Строка: ${str}`);
    console.log(`Длина строки: ${str.length}`);
    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
    }
});


