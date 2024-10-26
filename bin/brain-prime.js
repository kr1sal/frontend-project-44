#!/usr/bin/env node
import greet from '../src/cli.js';
import playBrainPrime from '../src/games/prime.js';

const userName = greet();
playBrainPrime(userName);
