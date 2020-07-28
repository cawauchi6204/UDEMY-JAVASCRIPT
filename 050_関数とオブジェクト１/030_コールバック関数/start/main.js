function hello(name) {
    console.log('hello' + name);
}

function bye(cb) {
    console.log('bye');
}

function fn(cb) {
    cb('Tom');
}
fn(bye)
fn(hello);
fn(function(name) {
    console.log('hello' + name);
})

setTimeout((hello) => {
    
},1000)
