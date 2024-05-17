#!/usr/bin/env node
import gameBody from '../src/index.js';

import task from '../src/games/calc.js';

const description = 'What is the result of the expression?';

gameBody(description, task);
