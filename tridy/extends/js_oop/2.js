function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  this.getSummary = function () {
    return `${this.title} was written by
   ${this.author} in ${this.year}`;
  }
  console.log('Book Initialized...');
}

const book1 = new Book('Kniha první', 'Eliáš Sidon', 1985);
const book2 = new Book('Kniha druhá', 'Eliáš Sidon', 1990);
const book3 = new Book('Kniha třetí', 'Eliáš Sidon', 2006);
