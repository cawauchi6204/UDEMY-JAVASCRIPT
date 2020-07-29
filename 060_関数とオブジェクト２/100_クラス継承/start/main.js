class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  hello() {
    console.log('hello' + this.name)
  }
}

class Japanese extends Person {
  constructor(name, age, gender) {
    super(name, age)
    // superはconstructorの中に入れる
    this.gender = gender
  }

  hello() {
    super.hello()
    console.log('konnitiwa' + this.name)
  }
  bye() {
    console.log('sayonara' + this.name)
  }
}
const taro = new Japanese('Taro', 23, 'Male');
console.log(taro.hello())
