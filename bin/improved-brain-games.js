#!/usr/bin/env node
import playImprovedBrainGames from '../src/play-improved-brain-games.js';
import CalcGame from '../src/games-logic/calc.js';
import EvenGame from '../src/games-logic/even.js';
import GcdGame from '../src/games-logic/gcd.js';
import PrimeGame from '../src/games-logic/prime.js';
import ProgressionGame from '../src/games-logic/progression.js';

playImprovedBrainGames(CalcGame, EvenGame, GcdGame, PrimeGame, ProgressionGame);
