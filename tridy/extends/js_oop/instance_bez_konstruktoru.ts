class Human {
  gender = '';
  prnG = (g: string): void => {
    this.gender = g;
    console.log(this.gender);
  }
}

class Osoba extends Human {
  name = '';
  //gender = 'female';
  prnN = (n: string): void => {
    this.name = n;
    console.log(this.name, this.gender);
  }
}

// const hum = new Human();
// hum.prnG('male'); // "male"

const osoba = new Osoba();
osoba.prnG('female'); // "female"
osoba.prnN('Ana'); // "Ana"
