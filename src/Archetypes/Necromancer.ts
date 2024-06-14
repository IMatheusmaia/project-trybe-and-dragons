import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  static countInstances = 0;

  constructor(_name: string) {
    super(_name, 0, 0);
    this._energyType = 'mana';
    
    Necromancer.countInstances += 1;
  }
  
  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.countInstances;
  }
}

export default Necromancer;