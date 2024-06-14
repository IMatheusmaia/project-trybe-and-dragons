import Race from './Race';

class Elf extends Race {
  private static _elfInstances = 0;
  private _lifePoints = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._lifePoints = 99;
  }

  static createdRacesInstances(): number {
    this._elfInstances += 1;
    return this._elfInstances;
  }
  
  get maxLifePoints(): number {
    return this._lifePoints;
  }
}

export default Elf;