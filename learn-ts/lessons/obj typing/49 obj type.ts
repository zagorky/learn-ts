//complicated topic

function extract(object: object, keys: string[]): object {
  const entries = Object.entries(object).filter(([key]) => keys.includes(key));

  return Object.fromEntries(entries);
}

const user = {
  name: 'Tirion',
  email: 'tirion@lanister.got',
  age: 35,
}

console.log(extract(user, ['name', 'age'])); // { name: 'Tirion', age: 35 }
