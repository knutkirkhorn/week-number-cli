#!/usr/bin/env node

// eslint-disable-next-line import/no-unresolved
import meow from 'meow';
import logSymbols from 'log-symbols';
import weekNumber, {tomorrowWeekNumber, yesterdayWeekNumber} from '@knutkirkhorn/week-number';

const cli = meow(`
	Usage
	  $ week-number
	  $ week-number "<date>"
	  $ week-number yesterday
	  $ week-number tomorrow
	Examples
	  $ week-number
	  $ week-number "September 3, 2019 23:15:30"
	  $ week-number yesterday
`, {
	importMeta: import.meta
});

const inputDate = cli.input[0];

try {
	if (cli.input.length > 1) {
		throw new Error('Command takes 0 or 1 argument.');
	}
	if (inputDate === 'yesterday') {
		console.log(yesterdayWeekNumber());
	} else if (inputDate === 'tomorrow') {
		console.log(tomorrowWeekNumber());
	} else {
		console.log(weekNumber(inputDate));
	}
} catch (error) {
	console.log(`${logSymbols.error} ${error.message}`);
	console.log('Use `week-number --help` to show valid input.');
	process.exit(1);
}
