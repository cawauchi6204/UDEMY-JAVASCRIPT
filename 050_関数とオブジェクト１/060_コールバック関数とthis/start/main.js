window.name = 'John';

const person = {
    name: 'Tom',
    hello() {
        console.log('Hello ' + this.name);
    }
}
person.hello();

function fn(ref) {
    ref();
}
// ただ関数スコープで実行するだけのコールバック関数
// 関数スコープなのでthisの参照先はグローバルオブジェクト

fn(person.hello);
