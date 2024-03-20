#!/usr/bin/env node
import gameBody from '../index.js';

import task from '../src/games/progression.js';

const description = 'What number is missing in the progression?';

gameBody(description, task);
