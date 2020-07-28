window.name = 'John';

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
    }
}
person.hello();

const helloTom = person.hello.bind(person);
// bindの第一引数で設定したオブジェクトをthisの参照先としている
// helloTomを実行した時に参照先はbindで指定したオブジェクトになる

function fn(ref) {
    ref();
}

fn(helloTom);

function a() {
    console.log('hello' + this.name);
}



const b =a.bind({name: 'Tim'});

a();
b('Tom');
// 引数に指定してもbindが優先される
