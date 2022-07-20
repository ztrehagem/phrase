const a = 'a'.charCodeAt(0)
const lowers = [...new Array(26)].map((v, i) => String.fromCharCode(a + i));
const uppers = lowers.map((c) => c.toUpperCase())
const numbers = '0123456789'.split('');

export const phrase = ({ size, upper, lower, number, chars = "" }) => {
  size = Math.max(0, size);
  const source = [...chars.split("")];

  if (upper) {
    source.push(...uppers);
  }

  if (lower) {
    source.push(...lowers);
  }

  if (number) {
    source.push(...numbers);
  }

  return [...new Array(size)].map(() => Math.floor(Math.random() * source.length)).map((rand) => source[rand]).join('');
}
