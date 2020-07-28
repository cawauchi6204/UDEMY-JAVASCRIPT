function a(name,name1) {
    console.log('hello ' + name + ' ' + name1);
}

const tim = {name:'Tim'};

const b = a.bind(tim);
// bindは定義するだけで実行はしない.
// 実行する時はまた別で()をつけて実行する

b();

a.apply(tim , ['Tim' , 'Bob']);
// applyには配列を入れる
a.call(tim , 'Tim' , 'Bob');

const arry = [1,2,3,4,5];
const result = Math.max(...arry);

console.log(result);
