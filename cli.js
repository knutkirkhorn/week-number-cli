#!/usr/bin/env node
'use strict';
const meow = require('meow');
const weekNumber = require('@knutkirkhorn/week-number');

const cli = meow(`
        Usage
          $ week-number
          $ week-number <date>
        Examples
          $ week-number
          $ week-number "September 3, 2019 23:15:30"
`);

const inputDate = cli.input[0];

if (cli.input.length === 0) {
    console.log(weekNumber());
} else if (cli.input.length === 1) {
    console.log(weekNumber(inputDate));
}