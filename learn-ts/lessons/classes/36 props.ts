class CustomFile2 {
  constructor(public name: string, public size: number) {
    this.name = name;
    this.size = size;
  }

  toString() {
    return `${this.name} (${this.size} bytes)`;
  }
}
