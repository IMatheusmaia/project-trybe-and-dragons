import Race from './Race';

class Dwarf extends Race {
  private static _dwarfInstances = 0;
  private _lifePoints = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._lifePoints = 80;
  }

  static createdRacesInstances(): number {
    this._dwarfInstances += 1;
    return this._dwarfInstances;
  }
  
  get maxLifePoints(): number {
    return this._lifePoints;
  }
}

export default Dwarf;