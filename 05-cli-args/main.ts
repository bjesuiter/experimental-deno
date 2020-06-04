#!/usr/bin/env -S deno run
//  Example invocation: deno run 05-cli-args/main.ts --cheese --size small --extras 10

import args from 'https://deno.land/x/args@2.0.0/wrapper.ts';
import {EarlyExitFlag, Option, BinaryFlag} from 'https://deno.land/x/args@2.0.0/flag-types.ts';
import {FiniteNumber, Choice} from 'https://deno.land/x/args@2.0.0/value-types.ts';
import {PARSE_FAILURE} from 'https://deno.land/x/args@2.0.0/symbols.ts';

const parser = args
	.describe('Pizza Configurator')
	.with(
		EarlyExitFlag('help', {
			describe: 'Show help',
			exit() {
				console.log(parser.help());
				return Deno.exit();
			},
		})
	)
	.with(
		BinaryFlag('cheese', {
			describe: 'With cheese?',
		})
	)
	.with(
		Option('size', {
			type: Choice<'small' | 'medium' | 'large'>(
				{
					value: 'small',
					describe: 'Get a small pizza',
				},
				{
					value: 'medium',
					describe: 'Get a medium/normal pizza',
				},
				{
					value: 'large',
					describe: 'Get a large pizza',
				}
			),
			alias: ['s'],
			describe: 'Which size?',
		})
	)
	.with(
		Option('extras', {
			type: FiniteNumber,

			describe: 'Number of extras: ',
		})
	);

const parsedArgs = parser.parse(Deno.args);

if (parsedArgs.tag === PARSE_FAILURE) {
	// Alternatively, `if (res.error) {`
	console.error('Failed to parse CLI arguments');
	console.error(parsedArgs.error.toString());
	Deno.exit(1);
} else {
	const {size, cheese, extras} = parsedArgs.value;

	console.log(`You want a ${size} Pizza ${cheese ? 'with' : 'without'} Cheese and ${extras} extras!`);
	console.log('Dev Note: Very good to combine with the deno ask package for further interactive input.');
}
