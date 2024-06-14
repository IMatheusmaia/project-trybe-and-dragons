import { EnergyType } from '../Energy';

abstract class Archetype {
  static countArchetypeInstances = 0;

  private _name: string;
  private _special = 0;
  private _cost = 0;

  constructor(name: string, special:number, cost:number) {
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
    throw new Error('Not implemented!');
  }

  abstract get energyType(): EnergyType;
}

export default Archetype;