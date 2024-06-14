import Race from './Race';

class Halfling extends Race {
  private static _halflingInstances = 0;
  private _lifePoints = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._lifePoints = 60;
  }

  static createdRacesInstances(): number {
    this._halflingInstances += 1;
    return this._halflingInstances;
  }
  
  get maxLifePoints(): number {
    return this._lifePoints;
  }
}

export default Halfling;