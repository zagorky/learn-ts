//complicated topic

type Turtle = 'turtle' | null;

type Game = {
  makeTurn: (direction: 'left' | 'right') => void;
  state: Array<Turtle>;
};

const startGame = (): Game => {
  const state: Array<Turtle> = ['turtle', null, null, null, null];

  // BEGIN (write your solution here)

  function makeTurn(direction: 'left' | 'right'): void {
    const turtlePlace: number = state.indexOf('turtle')

    if (direction === 'left') {
      if (turtlePlace === 0) {
        throw new Error('heh')
      }
      [state[turtlePlace], state[turtlePlace - 1]] = [state[turtlePlace - 1], state[turtlePlace]]
    }

    if (direction === 'right') {
      if (turtlePlace === state.length - 1) {
        throw new Error('heh')
      }
      [state[turtlePlace], state[turtlePlace + 1]] = [state[turtlePlace + 1], state[turtlePlace]]
    }
  }

  // END

  return {makeTurn, state};
};
