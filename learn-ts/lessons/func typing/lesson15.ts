function isPlainObject(value: unknown) : boolean{
  return value instanceof Object && !Array.isArray((value))
}


export {isPlainObject}
