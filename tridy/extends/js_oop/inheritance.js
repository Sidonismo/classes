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

function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
  this.month = month;
}
Magazine.prototype = Object.create(Book.prototype);

Magazine.prototype.constuctor = Magazine;

const mag1 = new Magazine('Talisman', 'Eliáš Sidon', 2005, 1);