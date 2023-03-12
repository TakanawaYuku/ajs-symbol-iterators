export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Персонаж уже есть');
    } else {
      this.members.add(character);
    }
  }

  [Symbol.iterator]() {
    const characters = Array.from(this.members.values());
    let i = 0;
    return {
      next() {
        if (i < characters.length) {
          i += 1;
          return {
            done: false,
            value: characters[i - 1],
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}
