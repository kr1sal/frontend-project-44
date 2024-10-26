#!/usr/bin/env node
import greet from '../src/cli.js';
import playBrainEven from '../src/games/even.js';

const userName = greet();
playBrainEven(userName);
