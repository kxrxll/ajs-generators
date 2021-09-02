export default class Iterator {
  constructor(team) {
    // Магия с числами для обхода ограничения о перезаписи в return линтера
    this.current = -1;
    this.last = team.length - 1;
    this.team = team;
  }

  next() {
    if (this.current === this.last) {
      return {
        done: true,
      };
    }
    this.current += 1;
    return {
      done: false,
      value: this.team[this.current],
    };
  }
}
