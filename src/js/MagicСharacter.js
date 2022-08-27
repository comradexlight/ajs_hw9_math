export default class MagicСharacter {
  #stoned;

  #damage;

  #attack;

  #curDistance;

  constructor(name, attack) {
    this.name = name;
    this.#attack = attack;
    this.#stoned = false;
    this.#damage = attack;
    this.#curDistance = undefined;
  }

  get stoned() {
    return this.#stoned;
  }

  set stoned(value) {
    this.#stoned = value;
    this.attack = this.#curDistance;
  }

  get attack() {
    return this.#damage;
  }

  set attack(distance) {
    this.#curDistance = distance;
    if (this.#stoned) {
      this.#damage = this.#attack - (this.#curDistance - 1) * 10 - Math.log2(this.#curDistance) * 5;
      return;
    }
    this.#damage = this.#attack - (this.#curDistance - 1) * 10;
  }

  get mainAttack() {
    return this.#attack;
  }

  set mainAttack(value) {
    this.#attack = value;
  }
}
