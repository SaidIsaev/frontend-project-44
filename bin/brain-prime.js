#!/usr/bin/env node
import gameBody from '../index.js';

import task from '../src/games/prime.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

gameBody(description, task);
