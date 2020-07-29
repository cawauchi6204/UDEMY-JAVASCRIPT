function Person1(name, age) {
	this.name = name;
	this.age = age;
}

Object.defineProperty(Person1.prototype, 'name', {
	get: function () {
		console.log('hello')
		return this._name;
	},
	set: function (val) {
		this._name = val;
	}
})

const p1 = new Person1('Bob',23)
p1.name = 'Tom'

class Person2 {
	constructor(name,age) {
		this._name = name;
		this._age = age;
	}

	get name() {
		console.log('hello')
		return this._name;
	}
	set name(val) {
		this._name = val;
	}

	static hello() {
		console.log('hello');
	}
}

Person2.hello();
// インスタンス化を行わずに呼び出せるメソッドｗ静的メソッド(スタティックメソッド)という

