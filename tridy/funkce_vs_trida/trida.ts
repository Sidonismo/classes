class Rodic {
  public name: string;
  protected rocnik: number;
  constructor(name: string, rocnik: number) {
    this.name = name;
    this.rocnik = rocnik;
  }
}

class Potomek extends Rodic {
  private zamestnani: string;
  constructor(name: string, rocnik: number, zamestnani: string) {
    super(name, rocnik);
    this.zamestnani = zamestnani;
  }
  protoMetoda() {
    let vek: number = new Date().getFullYear() - (this.rocnik + 1);
    console.log(
      this.name
      + ' ve svých '
      + String(vek)
      + ' letech, pracuje jako '
      + this.zamestnani);
  }
}
let zamestnanec = new Potomek('Eliáš', 1978, 'Kuchař');
zamestnanec.protoMetoda();