function getParams(str: string): Object {
  const arr: string[] = str.split('&');
  const init: any = {};
  return arr.reduce((acc, elem) => {
    const temp: string[] = elem.split('=');
    acc[temp[0]] = temp[1];
    return acc;
  }, init);
}

console.log(getParams('name=hexlet&count=3&order=asc'));
