window.name = 'John';

const person = {
    name: 'Tom',
    hello: function () {
        console.log('Hello ' + this.name);
        a();
        const person = {
            name: 'Tim',
            hello: function () {
                console.log('Hello ' + this.name);
            }
        }
        person.hello();
    }

}
const ref = person.hello;
// ref();
//thisが関数として実行された場合、グローバルオブジェクトが参照される
function a() {
    console.log('Hello' + this.name)
}
a();
