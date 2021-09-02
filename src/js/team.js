import Iterator from './iterator';

export default class Team {
  constructor(...persons) {
    this.persons = persons;
  }

  [Symbol.iterator]() {
    return new Iterator(this.persons);
  }
}
