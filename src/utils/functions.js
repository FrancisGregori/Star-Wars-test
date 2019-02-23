/**
 * Convert numeral to roman format
 * @param n
 * @returns {string}
 */
export function convertToRoman (n) {
  const romanLetters = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }
  let romanNumber = ''
  let valuesArr = Object.values(romanLetters)

  for (let i in valuesArr) {
    while (n - valuesArr[i] >= 0) {
      romanNumber += Object.keys(romanLetters)[i]
      n -= valuesArr[i]
    }
  }
  return romanNumber
}

/**
 * Convert string to slug format
 * @param text
 * @returns {string}
 */
export function slugify (text) {
  return text ? text.toString().toLowerCase()
  .replace(/\s+/g, '-')
  .replace(/[^\w\-]+/g, '')
  .replace(/\-\-+/g, '-')
  .replace(/^-+/, '')
  .replace(/-+$/, '') : null
}