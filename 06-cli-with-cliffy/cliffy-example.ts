#!/usr/bin/env -S deno run

// Example invocation: deno run 06-cli-with-cliffy/cliffy-example.ts -c --small true --pizza-type Salami --amount 10

import {Command} from 'https://deno.land/x/cliffy/command.ts';

const {options} = await new Command()
	// boolean with optional value
	.option('-d, --debug', 'output extra debugging.')
	// boolean with optional value
	.option('-c, --cash [cash:boolean]', 'Pay with cash.')
	// boolean with required value
	.option('-s, --small <small:boolean>', 'Small pizza size.')
	// string with required value
	.option('-p, --pizza-type <type:string>', 'Flavour of pizza.')
	// number with required value
	.option('-a, --amount <amount:number>', 'Pieces of pizza.')
	// parse arguments
	.parse(Deno.args);

if (options.debug) {
	console.log(options);
}

console.log('pizza details:');

if (options.small) {
	console.log('- small pizza size');
}

if (options.pizzaType) {
	console.log(`- ${options.pizzaType}`);
}

if (options.amount) {
	console.log('- %s pieces', options.amount);
}
