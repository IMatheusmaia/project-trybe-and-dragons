import { EnergyType } from '../Energy';

abstract class Archetype {
  private _name: string;
  private _special: number;
  private _cost: number;

  static countInstances = 0;
  
  constructor(
    name: string,
    special = 0,
    cost = 0,
  ) {
    this._name = name;
    this._special = special;
    this._cost = cost;
  }

  get name(): string {
    return this._name;
  }

  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }

  static createdArchetypeInstances(): number {
    Archetype.countInstances += 1;
    
    if (Archetype.countInstances === 0) {
      throw new Error('Not implemented!');
    }
    return Archetype.countInstances;
  }

  abstract get energyType(): EnergyType;
}

export default Archetype;