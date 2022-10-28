#!/usr/bin/env node

import meow from 'meow';
import weekNumber from '@knutkirkhorn/week-number';

const cli = meow(`
	Usage
	  $ week-number
	  $ week-number <date>
	Examples
	  $ week-number
	  $ week-number "September 3, 2019 23:15:30"
`, {
	importMeta: import.meta
});

const inputDate = cli.input[0];

try {
	if (cli.input.length > 1) {
		throw new Error("Command takes 0 or 1 argument.")
	}

	console.log(weekNumber(inputDate));
}
catch (e) {
	console.error(e)
}
