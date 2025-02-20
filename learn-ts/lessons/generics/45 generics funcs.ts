type MyArray<T> = {
  array: Array<T>;
push:(value:T) => void;
filter: (callback: (value: T) => boolean) => Array<T>
}
