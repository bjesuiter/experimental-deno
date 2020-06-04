import {Type} from 'https://deno.land/x/cliffy/command.ts';
import {IFlagArgument, IFlagOptions} from 'https://deno.land/x/cliffy/flags.ts';

const sizes = ['small', 'medium', 'large'];

export class PizzaSizeType extends Type<string> {
	parse(option: IFlagOptions, arg: IFlagArgument, value: string | false): string {
		if (!value || !sizes.includes(value)) {
			throw new Error(
				`Option --${option.name} must be a valid size of 'small', 'medium' or 'large', but got: ${value}`
			);
		}

		return value;
	}
}
