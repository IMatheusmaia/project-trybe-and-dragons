import Race from './Race';

class Orc extends Race {
  private static _orcInstances = 0;
  private _lifePoints = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._lifePoints = 74;
  }

  static createdRacesInstances(): number {
    this._orcInstances += 1;
    return this._orcInstances;
  }
  
  get maxLifePoints(): number {
    return this._lifePoints;
  }
}

export default Orc;