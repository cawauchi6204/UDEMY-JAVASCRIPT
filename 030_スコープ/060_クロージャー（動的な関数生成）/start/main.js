function addNumberFactory(num) {
    function addNumber(value) {
        return num + value;
    }
    return addNumber;
}

const add5 = addNumberFactory(5);
const add10 = addNumberFactory(10);

const result = add10(10);

console.log(add10);
// とやってもreturnがaddNumberなので関数が返されてしまう
console.log(result);
// こうすることで返された関数の引数に値を入れることで使える
