function F(a,b) {
    this.a = a;
    this.b = b;
}

F.prototype.c = function () {

}

function newOpe(C, ...args) {
    const _this = Object.create(C.prototype);
    const result = C.apply(_this,args)
    console.log(result);
}

const instance = newOpe(F,1,2);
console.log(instance);
