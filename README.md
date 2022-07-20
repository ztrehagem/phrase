# @ztrehagem/phrase

Generate random string

## Use as CLI

```
$ npm i -g @ztrehagem/phrase

$ phrase -Aa0
kcXMzlGVOtcrKoZT

$ phrase -Aa0 -s 48
DMfcaGY2HyUhdUxBHoxO6aZvNZ4WubaYqxntFECLtPuJ9Sdf

$ phrase -Aa0 -s 48 -c "\\^$+-*/|()[]{}.,?#:;'\""
.uhb}QY7)sG0B[Njox}\"Xq6{v?X"t6D6Q)|Z/C]WT95ozMt
```

## Use as Module

```js
const { phrase } = require('@ztrehagem/phrase')

phrase({ size: 16, upper: true, lower: true, number: true }) //=> 'cMvUEYGzKVDqDhSL'
phrase({ size: 16, chars: "ABC" }) //=> 'ABBBACBACACABACA'
```
