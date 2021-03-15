function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  console.log('Book Initialized...');
}

Book.prototype.getSummary = function () {
  return `${this.title} was written 
  by ${this.author} in ${this.year}`;
}

Book.prototype.getAge = function () {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} je stará ${years - 1}`;
}

Book.prototype.revise = function (newYear) {
  this.year = newYear;
  this.revised = true;
}

const book1 = new Book('Kniha první', 'Eliáš Sidon', 1978);
console.log(book1);
const book2 = new Book('Kniha druhá', 'Eliáš Sidon', 1990);
const book3 = new Book('Kniha třetí', 'Eliáš Sidon', 2006);
book1.revise(2004);
console.log(book1.getAge());