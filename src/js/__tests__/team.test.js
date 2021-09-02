import Team from '../team';

test('straigth case', () => {
  const team = new Team({
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  },
  {
    name: 'Маг',
    type: 'Mage',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  });
  const result = [];
  for (const char of team) {
    result.push(char);
  }
  expect(result).toEqual([{
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  },
  {
    name: 'Маг',
    type: 'Mage',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  }]);
});
