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
  const specialCharacters = /[^a-zA-Z0-9]/g

  for (let i = 1; i < string.length; i += 1) {
    const character = string[i]
    const previousCharacter = string[i - 1]

    if (character === ' ') {
      string = string.substr(0, i) + '_' + string.substr(i).trim()
    } else if (specialCharacters.test(character)) {
      string = string.substr(0, i) + '_' + string.substr(i + 1)
    } else if (Number.isInteger(Number(previousCharacter)) && !Number.isInteger(Number(character))) {
      string = string.substr(0, i) + '_' + string.substr(i)
    } else if ((previousCharacter.toUpperCase() !== previousCharacter) && character.toUpperCase() === character) {
      string = string.substr(0, i) + '_' + string.substr(i)
    }
  }
  return string.toLowerCase()
}

export function reverse (string) {
  return [...string].reverse().join('')
}

export function capitalize (string) {
  return string.charAt(0).toUpperCase() + string.substr(1)
}

export function lowerfirst (string) {
  return string.charAt(0).toLowerCase() + string.substr(1)
}

export function lowercase (string) {
  return string.toLowerCase()
}

export function humanize (string, capitalize = true) {
  string = string.replace(/_/g, ' ')
  return capitalize ? string.charAt(0).toUpperCase() + string.substr(1) : string
}

export function titleize (string) {
  return string.split(' ').map(word => word.substr(0, 1).toUpperCase() + word.substr(1)).join(' ')
}

export function dasherize (string) {
  return string = string.replace(/_/g, '-')
}

export function classify (string) {
  if (string.endsWith('s')) {
    return string.charAt(0).toUpperCase() + string.substr(1, string.length - 2)
  }
  return string.charAt(0).toUpperCase() + string.substr(1)
}

export function pluralize (string) {
  const specialCharacters = ['ch', 's', 'ss', 'sh', 'x', 'o']
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const lastCharacter = string.charAt(string.length - 1)
  const lastCharacters = string.substr(string.length - 2)

  if (specialCharacters.includes(lastCharacter) || specialCharacters.includes(lastCharacters)) {
    return string.concat('es')
  }

  if (string.endsWith('f')) {
    return string.replace(lastCharacter, 'ves')
  }

  if (string.endsWith('fe')) {
    return string.replace(lastCharacters, 'ves')
  }

  if (string.endsWith('y') && !vowels.includes(string.charAt(string.length - 2))) {
    return string.replace(lastCharacter, 'ies')
  }

  return string.concat('s')
}

export function singularize (string, appendix = '') {
  if (string.endsWith('ves')) {
    return string = string.substr(0, string.length - 3).concat(appendix ||'fe')
  }

  if (string.endsWith('ies')) {
    return string.substr(0, string.length - 3).concat(appendix || 'y')
  }

  if (string.endsWith('es')) {
    return string.substr(0, string.length - 2).concat(appendix)
  }

  return string.substr(0, string.length - 1)
}

export function swapcase (string) {
  return [...string].map(character => {
    return character.toUpperCase() === character ? character.toLowerCase() : character.toUpperCase()
  }).join('')
}

export function camelize (string, camelcased = false) {
  const endings = /[^(a-zA-Z0-9)]|_|\s/g
  string = string.trim()
  string = string.charAt(0)[camelcased ? 'toUpperCase' : 'toLowerCase']() + string.substr(1)

  for (let i = 1, ilen = string.length; i < ilen; i += 1) {
    if (endings.test(string[i])) {
      string = string.substr(0, i) + string.charAt(i + 1).toUpperCase() + string.substr(i + 2)
    }
  }

  return string
}

export function constantize (string) {
  const specialCharacters = /[^a-zA-Z0-9]/g
  string = string.replace(/\s+/g, ' ')

  for (let i = 1; i < string.length; i += 1) {
    const character = string.charAt(i)
    const previousCharacter = string.charAt(i - 1)

    if (character === '_' || previousCharacter === '_') continue

    if (specialCharacters.test(character)) {
      string = string.substr(0, i) + '_' + string.substr(i + 1)
    } else if (character.toUpperCase() === character && previousCharacter.toLowerCase() === previousCharacter) {
      string = string.substr(0, i) + '_' + string.substr(i)
    }
  }

  return string.toUpperCase()
}

export function truncate (string, length = 30) {
  if (string.length > length) {
    return string.substr(0, length - 3).concat('...')
  }
  return string
}
