function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

const printResult = (number, expr) => {
    console.log(` #${number}`);
    expr();
    console.log("\n");
}

const printArray = (array, end = "") => {
    process.stdout.write(`[${array.join(", ")}]${end}`);
}

printResult(1, () => {
    const array = ['Привет, ', 'мир', '!'];
    array.forEach(x => process.stdout.write(x));
});

printResult(2, () => {
    const array = ['Привет, ', 'мир', '!'];
    array[0] = 'Пока, ';
    array.forEach(x => process.stdout.write(x));
});

printResult(3, () => {
    const str = '023m0df0dfg0';
    const array = [];
    [...str].forEach((c, i) => {
        if (c === '0') {
            array.push(i);
        }
    });
    printArray(array);
});

printResult(4, () => {
    const arr1 = Array.from({ length: 11 }, () => randomInteger(0, 100));
    printArray(arr1, "\n");

    const arr2 = arr1.filter(x => x.toString().includes('5'));
    printArray(arr2);
});

printResult(5, () => {
    function mergeArrays(arr1, arr2) {
        const result = [];
        if (arr1.length === arr2.length) {
            for (let i = 0; i < arr1.length; ++i) {
                result.push(arr1[i], arr2[i]);
            }
        }
        return result;
    }

    const arr1 = [1, 2, 3];
    const arr2 = ['a', 'b', 'c'];
    const res = mergeArrays(arr1, arr2);

    printArray(arr1, "\n");
    printArray(arr2, "\n");
    printArray(res);
});

printResult(6, () => {
    const arr1 = Array.from({ length: 11 }, () => randomInteger(0, 100));
    printArray(arr1, "\n");

    arr1.sort((a, b) => b - a);
    printArray(arr1);
});

printResult(7, () => {
    const ru = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
    const en = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    ru.sort();
    en.sort();

    printArray(ru, "\n");
    printArray(en);
});

printResult(8, () => {
    const arr = ['orange', 'red', 'green', 'blue'];
    arr.sort((s1, s2) => s2.length - s1.length);
    printArray(arr);
});

printResult(9, () => {
    const arr = Array.from({ length: 9 }, () => randomInteger(0, 50));
    printArray(arr, "\n");

    const dividend = arr.slice(0, 4).reduce((a, b) => a + b, 0);
    const divisor = arr.slice(4).reduce((a, b) => a + b, 0);
    const result = dividend / divisor;

    console.log(dividend);
    console.log(divisor);
    console.log(result);
});

printResult(10, () => {
    const arr = Array.from({ length: 11 }, () => randomInteger(-100, 100));
    printArray(arr, "\n");

    const negCount = arr.filter(x => x < 0).length;
    console.log(negCount);
});

printResult(11, () => {
    let arr = Array.from({ length: 11 }, () => randomInteger(-50, 50));
    printArray(arr, "\n");

    arr = arr.filter(x => !(x < 0 || x % 2 === 1));
    printArray(arr, "");
});

printResult(12, () => {
    const str = "v3ni v1d1 v1c1";
    let first = 0;
    let last = 0;
    let isFirst = true;

    [...str].forEach((x, i) => {
        if (!isNaN(x)) {
            if (isFirst) {
                first = i;
                isFirst = false;
            } else {
                last = i;
            }
        }
    });

    console.log(str);
    console.log(first);
    console.log(last);
});
