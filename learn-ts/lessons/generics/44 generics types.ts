type MySet<T> = {
  items:Array<T>;
  has:(value: T) => boolean;
  add:(value: T) => void;
}
