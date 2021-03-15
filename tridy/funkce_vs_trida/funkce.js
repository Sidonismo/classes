// rewriting class User in pure functions
// 1. Create constructor function
function User(name) {
    this.name = name;
}
// a function prototype has "constructor" property by default,
// so we don't need to create it
// 2. Add the method to prototype
User.prototype.sayHi = function () {
    console.log(this.name);
};
// Usage:
var user = new User("John");
user.sayHi();
// class is a function
console.log(typeof User); // function
// ...or, more precisely, the constructor method
console.log(User === User.prototype.constructor); // true
// The methods are in User.prototype, e.g:
console.log(User.prototype.sayHi); // alert(this.name);
// there are exactly two methods in the prototype
console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi
