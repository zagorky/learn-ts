import {CustomFile} from "./34 classes as types";

class ImageCustomFile extends CustomFile {
  private width: number;
  private height: number;

  constructor(file: { name: string, size: number, width: number, height: number }) {
    super(file)
    this.width = file.width
    this.height = file.height
  }

  toString(): string {
    return super.toString() + ` ${this.width}x${this.height}`
  }
}
