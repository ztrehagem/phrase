#! /usr/bin/env node
import { parseArgs } from "node:util";
import { phrase } from "../index.js";

const argOptions = {
  size: {
    type: "string",
    short: "s",
  },
  upper: {
    type: "boolean",
    short: "A",
  },
  lower: {
    type: "boolean",
    short: "a",
  },
  number: {
    type: "boolean",
    short: "0",
  },
  chars: {
    type: "string",
    short: "c",
  },
};

const { values: options } = parseArgs({
  args: process.argv.slice(2),
  options: argOptions,
});

const upper = options.upper;
const lower = options.lower;
const number = options.number;
const chars = options.chars ?? "";
const size = Number(options.size ?? 16);

const result = phrase({ size, upper, lower, number, chars });
console.log(result);
