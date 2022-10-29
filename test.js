// eslint-disable-next-line import/no-unresolved
import test from 'ava';
import {execa} from 'execa';

test('cli can print out', async t => {
	const {stdout} = await execa('./cli.js', ['--version']);
	t.true(stdout.length > 0);
});

test('cli yesterday', async t => {
	const {stdout} = await execa('./cli.js', ['yesterday']);
	t.true(stdout.length > 0);
});

test('cli tomorrow', async t => {
	const {stdout} = await execa('./cli.js', ['tomorrow']);
	t.true(stdout.length > 0);
});

test('cli errors, 2 or more arguments', async t => {
	const {stderr} = await execa('./cli.js', ['arg1', 'arg2']);
	t.true(stderr.length > 0);
});

test('cli errors, invalid date', async t => {
	const {stderr} = await execa('./cli.js', ['arg1']);
	t.true(stderr.length > 0);
});
