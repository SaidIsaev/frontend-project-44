#!/usr/bin/env node
// import readlineSync from 'readline-sync';
// import greeting from '../src/cli.js';
import gameBody from '../src/index.js';

import task from '../src/games/even.js';

// const userName = greeting();

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

gameBody(description, task);
