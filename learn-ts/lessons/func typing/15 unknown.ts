function isPlainObject(value: unknown) : boolean{
  return value !== null && typeof value === 'object' && Object.getPrototypeOf(value) === Object.prototype;
}


console.log(isPlainObject({}));

export {isPlainObject}
