import Person from './person';
import Team from './team';

const team = new Team();
const char = new Person({
  name: 'Леголас',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
});
const char1 = new Person({
  name: 'Вельзевул',
  type: 'Daemon',
  health: 100,
  level: 2,
  attack: 20,
  defence: 40,
});
const char2 = new Person({
  name: 'Гимли',
  type: 'Gnome',
  health: 45,
  level: 1,
  attack: 60,
  defence: 5,
});
// eslint-disable-next-line no-console
console.log('Characters');

team.add(char);
team.add(char1);
team.add(char2);

// eslint-disable-next-line no-restricted-syntax
for (const character of team) {
  // eslint-disable-next-line no-console
  console.log(character);
}
