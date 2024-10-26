#!/usr/bin/env node
import greet from '../src/cli.js';
import playBrainGcd from '../src/games/gcd.js';

const userName = greet();
playBrainGcd(userName);
