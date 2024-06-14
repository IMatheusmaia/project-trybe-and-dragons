import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType;
  static countInstances = 0;

  constructor(_name: string) {
    super(_name, 0, 0);
    this._energyType = 'mana';
    
    Mage.countInstances += 1;
  }
  
  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage.countInstances;
  }
}

export default Mage;