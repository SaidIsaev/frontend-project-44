#!/usr/bin/env node
import gameBody from '../src/index.js';

import task from '../src/games/gcd.js';

const description = 'Find the greatest common divisor of given numbers.';

gameBody(description, task);
