type Entry = {
  [key: string]: number
};

interface IPhonebook {
  get(key: string): number | null

  set(key: string, value: number): void
}

// BEGIN (write your solution here)

class Phonebook implements IPhonebook {
  private entries: Entry;

  constructor() {
    this.entries = {}
  }

  get(key: string): number | null {

    return this.entries.hasOwnProperty(key) ? this.entries[key] : null;
  }

  set(key: string, value: number): void {
    this.entries[key] = value;
  }
}

// END

export default Phonebook;
