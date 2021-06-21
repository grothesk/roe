#!/usr/bin/env node

const yargs = require('yargs');

yargs
  .strict()
  .command(require('../cmds/sample'))
  .command(require('../cmds/validate'))
  .command(require('../cmds/generalize'))
  .help()
  .demandCommand()
  .argv
