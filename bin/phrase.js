#! /usr/bin/env node

const phrase = require('../');

const length = parseInt(process.argv[2]) || 16;
const result = phrase(length);
console.log(result);
