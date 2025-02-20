interface IFlying {
  canFly: true;
}

interface IBird extends IFlying {
  isLiving: true;
}

interface IPlane extends IFlying {
  canCarryPeople: true;
}

// BEGIN (write your solution here)
interface ISuperman {
  guessWho(val: string): string;
}

const superMan: ISuperman = {
  guessWho(value) {
    if (value.toLowerCase() !== 'superman') {
      return `It's a ${value}?`
    } else {
      return `It's a ${value}!`
    }
  }
}

// END

export default superMan;
