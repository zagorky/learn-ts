// complicated topic

type Sanitazed <T, K extends keyof T> = Omit<T,K>

function sanitize<T,K extends keyof T>(obj: T, arr: K []): Sanitazed <T, K> {
const newObj = {...obj}
  for (const key of arr) {
    delete newObj[key]
  }
  return newObj
}
