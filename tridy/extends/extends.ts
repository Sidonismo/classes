class Clovek {
  protected jmeno: string;
  constructor(jmeno: string) {
    this.jmeno = jmeno;
    console.log('Nazdar' + jmeno);
  }
}
class Zakaznik extends Clovek {
  private zamestnani: string;
  constructor(jmeno: string, zamestnani: string) {
    super(jmeno);
    this.zamestnani = zamestnani;
  }
  public funkce() {
    console.log('Člověk jménem ' + this.jmeno + ' pracuje jako ' + this.zamestnani);
  }
}

let dalsiVul = new Zakaznik('Honza', 'Programátor');
dalsiVul.funkce();