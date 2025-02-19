class CustomFile {
  name: string;
  size: number;

  constructor({name, size}: { name: string, size: number }) {
    this.name = name;
    this.size = size;
  }

  toString() {
    return `${this.name} (${this.size} bytes)`;
  }
}


const file = new CustomFile({name: 'foo.txt', size: 4});

console.log(file.toString());
