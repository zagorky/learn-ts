class Queue<T> {
  queue: Array<T>;
  constructor() {
    this.queue = [];
  }

  enqueue(elem: T): void {
    this.queue.push(elem);
  }

  dequeue(): T {
    const elem = this.queue.shift();
    if (!elem) {
      throw new Error('error');
    }
    return elem;
  }
}
