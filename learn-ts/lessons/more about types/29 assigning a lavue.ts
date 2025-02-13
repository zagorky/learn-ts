type Form = {
  age: {
    value: number,
    validator: (val: number) => boolean
  },
  name: {
    value: string,
    validator: (val: string) => boolean
  }
};

const form: Form = {
  // BEGIN (write your solution here)
  age: {
    value: 30,
    validator: (value: number): boolean => false,
  },
  name: {
    value: 'Daria',
    validator: (value: string): boolean => {
      return value.length !== 0
    },
  },
  // END
};
