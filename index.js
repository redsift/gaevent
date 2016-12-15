#!/usr/bin/env node

var ua=require('universal-analytics')
var program=require('commander')


program
	.usage('<gaid> <category> <event>')
	.option('-u --user', 'user name defaults to no-one')
	.parse(process.argv);

var visitor = ua( program.args[0], program.user, {strictCidFormat: false});

visitor.event(program.args[1], program.args[2]).send()
