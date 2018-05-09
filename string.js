/**
 *
 * removeWhitespace
 *
 * removes whitespace from string
 *
 * example:
 *
 * input
 * '\t1234 5678\n'
 *
 * output
 * '12345678'
 *
 */

export function removeWhitespace (string) {
  return string.replace(/\s/g, '')
}

/**
 *
 * leftPad
 *
 * adds left padding to a string
 *
 * example:
 *
 * input
 * 'hello world', '** '
 *
 * output
 * '** hello world'
 *
 */

export function leftPad (value, pad) {
  if (!pad) { return value }
  return String(value).split(/\r\n|\n/).map(function (line) {
    return line ? pad + line : line
  }).join('\n')
}

export function trim (string) {
  return string.trim()
}

export function uppercase (string) {
  return string.toUpperCase()
}

export function underscore (string) {
  string = string.trim()
  for (let i = 1; i < string.length; i += 1) {
    if (string[i] === ' ') {
      string = string.substr(0, i) + '_' + string.substr(i).trim()
    } else if (string[i] === '-') {
      string = string.substr(0, i) + '_' + string.substr(i + 1)
    } else if ((string[i] !== '_')) {
      if (Number.isInteger(Number(string[i - 1])) && !Number.isInteger(Number(string[i]))) {
        string = string.substr(0, i) + '_' + string.substr(i)
      } else if ((string[i - 1].toUpperCase() !== string[i - 1]) && string[i].toUpperCase() === string[i]) {
        string = string.substr(0, i) + '_' + string.substr(i)
      }
    }
  }
  return string.toLowerCase()
}
