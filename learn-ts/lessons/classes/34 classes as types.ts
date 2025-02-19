export class CustomFile {
  name: string;
  size: number;
  isCopy: boolean;

  constructor(file: { name: string, size: number } | CustomFile) {
    if (file instanceof CustomFile) {
      this.name = file.name;
      this.size = file.size;
      this.isCopy = true;
    } else {
      this.name = file.name;
      this.size = file.size;
      this.isCopy = false;
    }
  }

  toString() {
    return this.isCopy
      ? `(copy) ${this.name} (${this.size} bytes)`
      : `${this.name} (${this.size} bytes)`;

  }
}

const file = new CustomFile({name: 'open-world.jpeg', size: 1000});
console.log(file.toString()); // open-world.jpeg (1000 bytes)

const file2 = new CustomFile(file);
console.log(file2.toString()); // (copy) open-world.jpeg (1000 bytes)

const file3 = new CustomFile(file2);
console.log(file2.toString()); // (copy) open-world.jpeg (1000 bytes)
