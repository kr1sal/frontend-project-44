#!/usr/bin/env node
import greet from '../src/cli.js';
import playBrainCalc from '../src/games/calc.js';

const userName = greet();
playBrainCalc(userName);
