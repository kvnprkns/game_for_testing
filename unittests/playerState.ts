import { Sitting, Running, Jumping, Falling, Rolling, Diving, HIT, states } from './playerState'; 

class Game {
  constructor() {
    this.player = {
      x: 0,
      y: 0,
      width: 50,
      height: 50,
      frameX: 0,
      frameY: 0,
      maxFrame: 0,
      vy: 0,
      weight: 10,
      onGround: () => true,
      setState: jest.fn(),
    };
    this.particles = [];
  }
}

// Test Sitting state
test('Sitting state - enter()', () => {
  const game = new Game();
  const sittingState = new Sitting(game);

  sittingState.enter();

  expect(game.player.frameX).toBe(0);
  expect(game.player.maxFrame).toBe(4);
  expect(game.player.frameY).toBe(5);
});

test('Sitting state - handleInput()', () => {
  const game = new Game();
  const sittingState = new Sitting(game);

  sittingState.handleInput(['ArrowLeft']);

  expect(game.player.setState).toHaveBeenCalledWith(states.RUNNING, 1);
});

// Test Running state
test('Running state - enter()', () => {
  const game = new Game();
  const runningState = new Running(game);

  runningState.enter();

  expect(game.player.frameX).toBe(0);
  expect(game.player.maxFrame).toBe(8);
  expect(game.player.frameY).toBe(3);
});

test('Running state - handleInput()', () => {
  const game = new Game();
  const runningState = new Running(game);

  runningState.handleInput(['ArrowDown']);

  expect(game.player.setState).toHaveBeenCalledWith(states.SITTING, 0);
});

test('Jumping state - enter()', () => {
    const game = new Game();
    const jumpingState = new Jumping(game);
  
    jumpingState.enter();
  
    expect(game.player.frameX).toBe(0);
    expect(game.player.maxFrame).toBe(6);
    expect(game.player.frameY).toBe(1);
  });
  
  test('Jumping state - handleInput()', () => {
    const game = new Game();
    const jumpingState = new Jumping(game);
  
    jumpingState.handleInput(['Enter']);
  
    expect(game.player.setState).toHaveBeenCalledWith(states.ROLLING, 2);
  });
  
  // Sample tests for Falling state
  test('Falling state - enter()', () => {
    const game = new Game();
    const fallingState = new Falling(game);
  
    fallingState.enter();
  
    expect(game.player.frameX).toBe(0);
    expect(game.player.maxFrame).toBe(6);
    expect(game.player.frameY).toBe(2);
  });
  
  test('Falling state - handleInput()', () => {
    const game = new Game();
    const fallingState = new Falling(game);
  
    fallingState.handleInput(['ArrowDown']);
  
    expect(game.player.setState).toHaveBeenCalledWith(states.DIVING, 0);
  });
  
  // Sample tests for Rolling state
  test('Rolling state - enter()', () => {
    const game = new Game();
    const rollingState = new Rolling(game);
  
    rollingState.enter();
  
    expect(game.player.frameX).toBe(0);
    expect(game.player.maxFrame).toBe(6);
    expect(game.player.frameY).toBe(6);
  });
  
  test('Rolling state - handleInput()', () => {
    const game = new Game();
    const rollingState = new Rolling(game);
  
    rollingState.handleInput(['Enter', 'ArrowUp']);
  
    expect(game.player.setState).toHaveBeenCalledWith(states.FALLING, 1);
  });
  
  // Sample tests for Diving state
  test('Diving state - enter()', () => {
    const game = new Game();
    const divingState = new Diving(game);
  
    divingState.enter();
  
    expect(game.player.frameX).toBe(0);
    expect(game.player.maxFrame).toBe(6);
    expect(game.player.frameY).toBe(6);
    expect(game.player.vy).toBe(15);
  });
  
  test('Diving state - handleInput()', () => {
    const game = new Game();
    const divingState = new Diving(game);
  
    divingState.handleInput(['Enter']);
  
    expect(game.player.setState).toHaveBeenCalledWith(states.ROLLING, 2);
  });
  
  // Sample tests for HIT state
  test('HIT state - enter()', () => {
    const game = new Game();
    const hitState = new HIT(game);
  
    hitState.enter();
  
    expect(game.player.frameX).toBe(0);
    expect(game.player.maxFrame).toBe(10);
    expect(game.player.frameY).toBe(4);
  });
  
  test('HIT state - handleInput()', () => {
    const game = new Game();
    const hitState = new HIT(game);
  
    hitState.handleInput(['ArrowRight']);
  
    expect(game.player.setState).toHaveBeenCalledWith(states.RUNNING, 1);
  });

