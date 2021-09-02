export default class Team {
  constructor(...persons) {
    this.persons = persons;
  }

  * [Symbol.iterator]() {
    let counter = 1;
    if (counter < this.persons.length) {
      yield this.persons[counter - 1];
      counter += 1;
    }
    return this.persons[counter];
  }
}
