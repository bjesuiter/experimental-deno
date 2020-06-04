#!/usr/bin/env -S deno run
//  Pizza CLI with cliffy package (Command structure like commander.js): https://deno.land/x/cliffy
//  Example invocation: deno run 06-cli-with-cliffy/main.ts --cheese --size small --extras 10

import {Command} from 'https://deno.land/x/cliffy/command.ts';
import {PizzaSizeType} from './pizza-size.ts';

const {options} = await new Command()
	.version('0.1.0')
	.description('My demo pizza cli!')
	.type('pizza-size', new PizzaSizeType())
	.option('-c, --cheese', 'With cheese?')
	.option('-s, --size <size:pizza-size>', 'Choose your Pizza Size out of small, medium and large!')
	.option('-e,--extras [amount:number]', '')
	.parse(Deno.args);

const {size, cheese, extras} = options;

console.log(`You want a ${size} Pizza ${cheese ? 'with' : 'without'} Cheese and ${extras} extras!`);
console.log('Dev Note: Very good to combine with the deno ask package for further interactive input.');
