type MyMap <T, U> = {
obj: Map<T, U>;
set: (key: T, value: U ) => void;
get: (key: T) => U | undefined;
}
