function randomInteger(min: number = -1_000_000, max: number = 1_000_000): number {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

const printResult = (num: number, exp: CallableFunction): void => {
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
    let x = randomInteger(-4000002, 4000002);
    console.log(`Число: ${x}`);
    let first = x.toString();
    let last = x.toString();
    let len = x.toString();
    let lastNum = 0;
    let lenNum = 0;
    if (x < 0) {
        first = first[1];
        lastNum = -1 * (x % 10);
        lenNum = len.length - 1;
    } else {
        first = first[0];
        lastNum = x % 10;
        lenNum = len.length;
    }
    console.log(`Первая цифра: ${first}`);
    console.log(`Последняя цифра: ${lastNum}`);
    console.log(`Сумма первой и последней: ${Number(first) + Number(lastNum)}`);
    console.log(`Количество цифр: ${lenNum}`);
});

printResult(3, () => {
    let str = "Veni, vidi, vici";
    console.log(`Строка: ${str}`);
    console.log(`Длина строки: ${str.length}`);
    for (let i = 0; i < str.length; i++) {
        console.log(str[str.length - i - 1]);
    }
});

printResult(4, () => {
    let str1 = "Alpha";
    let str2 = "Beta";
    console.log(`Строка 1: ${str1}`);
    console.log(`Строка 2: ${str2}`);
    console.log(`Конкатенация: ${str1.concat(" & ").concat(str2)}`);
    console.log(`Длинная строка: ${str1.length > str2.length ? str1 : str2}`);
});

printResult(5, () => {
    let x = randomInteger(1, 100);
    let y = randomInteger(1, 100);
    console.log(`Число 1: ${x}`);
    console.log(`Число 2: ${y}`);
    let xFirst = Number(x.toString()[0]);
    let yFirst = Number(y.toString()[0]);
    console.log(`Первые числа ${xFirst === yFirst ? "" : "не "}совпадают`);
    console.log(`Первые число без остатка ${x % y === 0 ? "" : "не "}делится без остатка`);
    console.log(`Большее число: ${x > y ? x : y}`);
});

printResult(6, () => {
    let x = randomInteger(1, 100);
    let y = randomInteger(1, 100);
    console.log(`Число 1: ${x}`);
    console.log(`Число 2: ${y}`);
    console.log(`Остаток от деления первого на второе: ${x % y}`);
    console.log(`Сумма чисел: ${x + y}`);
    console.log(`Произведение чисел: ${x * y}`);
});

printResult(7, () => {
    let x = randomInteger(1, 50);
    let y = randomInteger(1, 50);
    let z = randomInteger(1, 50);
    let i = randomInteger(1, 50);
    console.log(`Число 1: ${x}`);
    console.log(`Число 2: ${y}`);
    console.log(`Число 3: ${z}`);
    console.log(`Число 4: ${i}`);
    console.log(`Среднее арифметическое: ${(x + y + z + i) / 4}`);
    console.log(`Сумма квадратов: ${(x * x) + (y * y) + (z * z) + (i * i)}`);
    console.log(`Наибольшее из чисел: ${Math.max(x, y, z, i)}`);
    console.log(`Наименьшее из чисел: ${Math.min(x, y, z, i)}`);
});
