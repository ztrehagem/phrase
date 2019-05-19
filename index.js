function phrase(length) {
  const a = 'a'.charCodeAt(0)
  const z = 'z'.charCodeAt(0)
  const lowers = new Array(z - a + 1).fill(0).map((v, i) => String.fromCharCode(a + i));
  const uppers = lowers.map((c) => c.toUpperCase())
  const numbers = '0123456789'.split('');
  const chars = [...uppers, ...lowers, ...numbers];
  return new Array(length).fill(0).map(() => Math.floor(Math.random() * chars.length)).map((rand) => chars[rand]).join('');
}
phrase.default = phrase;
phrase.phrase = phrase;

module.exports = phrase;
