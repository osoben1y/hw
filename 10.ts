function replaceDigits(s: string): string {
  const chars: string[] = s.split("");

  for (let i = 1; i < chars.length; i += 2) {
    const prevChar = chars[i - 1];
    const digit = parseInt(chars[i]);
    const shiftedChar = String.fromCharCode(prevChar.charCodeAt(0) + digit);
    chars[i] = shiftedChar;
  }

  return chars.join("");
}

console.log(replaceDigits("a1c1e1"));
console.log(replaceDigits("a1b2c3d4e"));
