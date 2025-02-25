import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import Archetype, { Mage } from './Archetypes';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  
  constructor(name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { type_: this._archetype.energyType, amount: getRandomInt(1, 10) };
  }

  get race() {
    return this._race;
  }

  get archetype() {
    return this._archetype;
  }

  get lifePoints() {
    return this._lifePoints;
  }

  get strength() {
    return this._strength;
  }

  get defense() {
    return this._defense;
  }

  get dexterity() {
    return this._dexterity;
  }

  get energy() {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    } else {
      this._lifePoints -= 1;
    }

    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  attack(enemy : Fighter | SimpleFighter) {
    enemy.receiveDamage(this._strength);
  }

  levelUp() {
    const randomIncrement = getRandomInt(1, 10);
    this._strength += randomIncrement;
    this._dexterity += randomIncrement;
    this._defense += randomIncrement;
    this._maxLifePoints = (
      this._maxLifePoints + randomIncrement)
      > this.race.maxLifePoints ? (this.race.maxLifePoints) 
      : (this._maxLifePoints + randomIncrement);
    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoints;
  }

  special() {
    if (this._energy.amount === 0) {
      throw new Error('Not enough energy to perform a special attack');
    }
  }
}

export default Character;