
type Callback = (n:number, index?: number) => void;

function forEach(arr: number[], callback: Callback): void {
  for(let i:number = 0; i<arr.length; i+=1) {
    callback(arr[i], i);
  }
}

export {forEach}
