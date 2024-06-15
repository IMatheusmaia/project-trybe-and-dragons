import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

class PVP extends Battle {
  private player2: Fighter | SimpleFighter;

  constructor(player1: Fighter, player2: Fighter | SimpleFighter) {
    super(player1);
    this.player2 = player2;
  }

  fight(): number {
    while (this.player.lifePoints !== -1 && this.player2.lifePoints !== -1) {
      this.player.attack(this.player2);
      if (this.player2.lifePoints !== -1) {
        this.player2.attack(this.player);
      }
    }
    return super.fight();
  }
}

export default PVP;