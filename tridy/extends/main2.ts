class Person {
  name: String;
  constructor(name: String) {
    this.name = name;
  }
  bla(bla: String) {
    return this.name + ' ' + bla;
  }
}

//inheritance / dědičnost
class Emloyee extends Person {
  id: Number;
  constructor(name: String, id: Number) {
    super(name);
    this.id = id;
  }
  kdo() {
    return 'In Emloyee Constructor: ' + this.id + ' and extends: ' + this.name;
  }
}

let zakaznik = new Emloyee('Bob', 123);

console.log(zakaznik.kdo());
console.log(zakaznik.name + ' ' + zakaznik.id);
console.log(zakaznik.bla('blabla'));