function newYearCongratulate(name: string): string;
function newYearCongratulate(year: number, name: string): string;

function newYearCongratulate(a: number | string, b?: string): string {
  if (typeof a === 'number' && typeof b === 'string') {

    return `Hi ${b}! Happy New Year ${a}!`
  }

  if (typeof a === 'string') {
    return `Hi ${a}! Happy New Year!`

  }
  throw new Error('heh')
}

export {newYearCongratulate}
