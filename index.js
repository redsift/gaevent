#!/usr/bin/env node

var ua = require('universal-analytics')
var program = require('commander')


program
  .usage('<gaid> <category> <event>')
  .option('-u, --user', 'user name defaults to no-one')
  .option('-r, --revision <semver>', 'relevant software version for events')
  .parse(process.argv);

var visitor = ua( program.args[0], program.user, {strictCidFormat: false});

var version = program.revision ? ['version', program.revision].join(':') : '';

visitor.event(program.args[1], program.args[2], version).send()
