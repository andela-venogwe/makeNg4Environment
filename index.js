#!/usr/bin/env node

import commander from 'commander';
import makeng4nvironrment from './makeNg4Environment';

commander
  .arguments('<filepath>')
  .action(makeng4nvironrment)
  .parse(process.argv);

