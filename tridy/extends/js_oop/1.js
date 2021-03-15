// const s1 = 'Hello';
// console.log('🚀 ~ file: 1.js ~ line 2 ~ s1', typeof s1)

// const s2 = new String('Hello');
// console.log('🚀 ~ file: 1.js ~ line 5 ~ s2', typeof s2[0])
let $ = window.jQuery;

// navigator.appVersion;
// console.log('🚀 ~ file: 1.js ~ line 8 ~ navigator.appVersion', navigator.appName);

//* object literals
const book1 = {
  title: 'Book one',
  author: 'Eliáš Sidon',
  year: '2013',
  getSummary: function () {
    return `${this.title} was written by
   ${this.author} in ${this.year}`
  }
}

const book2 = {
  title: 'Book two',
  author: 'Eliáš Sidon',
  year: '2016',
  getSummary: function () {
    return `${this.title} was written by
   ${this.author} in ${this.year}`
  }
}

console.log('🚀book1: ', book1.getSummary());
console.log('🚀book1: ', book2.getSummary());
console.log('🚀book1: ', Object.values(book1));
console.log('🚀book1: ', Object.keys(book1));
console.log('🚀book2: ', Object.values(book2));
console.log('🚀book2: ', Object.keys(book2));


