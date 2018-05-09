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

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === ' ') {
      string = string.substr(0, i) + '_' + string.substr(i).trim()
      i++
      continue
    }

    if ((string[i] !== '_') && (string[i].toUpperCase() === string[i]) && (string[0].toUpperCase() !== string[0])) {
      string = string.substr(0, i) + '_' + string.substr(i)
      i++
      continue
    }
  }
  return string.toLowerCase()
}
