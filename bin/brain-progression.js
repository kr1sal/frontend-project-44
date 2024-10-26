#!/usr/bin/env node
import greet from '../src/cli.js';
import playBrainProgression from '../src/games/progression.js';

const userName = greet();
playBrainProgression(userName);
