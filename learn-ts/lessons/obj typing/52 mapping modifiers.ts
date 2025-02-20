
//complicated topic

type NReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? NReadonly<T[K]> : T[K]
}

function deepFreeze<T extends object>(obj: T): NReadonly<T> {

  Object.keys(obj).forEach(key => {
    const val = obj[key as keyof T]
    if (typeof val === 'object' && val !== null) {
      deepFreeze(val)
    }
  })

  return Object.freeze(obj)
}
