function whitespaceless (string) {
  return string.replace(/\s/g, '')
}

function pad (value, pad) {
  if (!pad) { return value }
  return String(value).split(/\r\n|\n/).map(line => {
    return line ? pad + line : line
  }).join('\n')
}

function trim (string) {
  return string.trim()
}

function strip (string, pattern) {
  if (!pattern) return string.trim()
  if (!Array.isArray(pattern)) {
    if (pattern.length === 1) {
      const regExp = new RegExp(pattern, 'g')
      return string.replace(regExp, '')
    }
    const start = string.indexOf(pattern)
    const end = start + pattern.length
    return string.substr(0, start - 1) + '' + string.substr(end)
  }
  const regExp = new RegExp(pattern.join('|'), 'g')
  return string.replace(regExp, '')
}

function uppercase (string) {
  return string.toUpperCase()
}

function underscore (string) {
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

function reverse (string) {
  return [...string].reverse().join('')
}

function capitalize (string) {
  return string.charAt(0).toUpperCase() + string.substr(1)
}

function unescape (string) {
  const entities = new Map([
    ['&amp;', '&'],
    ['&lt;', '<'],
    ['&gt;', '>'],
    ['&quot;', `"`],
    ['&39;', `'`]
  ])

  entities.forEach((value, key) => {
    if (string.includes(key)) {
      string = string.replace(new RegExp(key, 'g'), value)
    }
  })

  return string
}

function lowerfirst (string) {
  return string.charAt(0).toLowerCase() + string.substr(1)
}

function lowercase (string) {
  return string.toLowerCase()
}

function humanize (string, capitalize = true) {
  string = string.replace(/_/g, ' ')
  return capitalize ? string.charAt(0).toUpperCase() + string.substr(1) : string
}

function titleize (string) {
  return string.split(' ').map(word => word.substr(0, 1).toUpperCase() + word.substr(1)).join(' ')
}

function dasherize (string) {
  return string = string.replace(/_/g, '-')
}

function classify (string) {
  if (string.endsWith('s')) {
    return string.charAt(0).toUpperCase() + string.substr(1, string.length - 2)
  }
  return string.charAt(0).toUpperCase() + string.substr(1)
}

function pluralize (string) {
  const endings = ['ch', 's', 'ss', 'sh', 'x', 'o']
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const lastCharacter = string.charAt(string.length - 1)
  const lastCharacters = string.substr(string.length - 2)

  if (endings.includes(lastCharacter) || endings.includes(lastCharacters)) {
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

function singularize (string, appendix = '') {
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

function swapcase (string) {
  return [...string].map(character => {
    return character.toUpperCase() === character ? character.toLowerCase() : character.toUpperCase()
  }).join('')
}

function camelize (string, camelcased = false) {
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

function constantize (string) {
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

function truncate (string, length = 30) {
  if (string.length > length) {
    return string.substr(0, length - 3).concat('...')
  }
  return string
}

function summarize (string, length = 100) {
  return string.length >= length ? string.concat('...') : string
}

function repeat (string, count) {
  return string.repeat(count)
}

function singlespace (string) {
  return string.replace(/\s\s+/g, ' ')
}

function quote (string, lang = 'pl') {
  return lang === 'en' ? `"${string}"` : `„${string}”`
}

function unquote (string) {
  if (string.startsWith('"') && string.endsWith('"')) return string.substr(1, string.length - 2)
  if (string.startsWith('„') && string.endsWith('”')) return string.substr(1, string.length - 2)
}

function squeeze (string, pattern = 'a-zA-Z') {
  string = string.replace(/\s+/g, ' ')
  const regExp = new RegExp(`[${pattern}]`)
  for (let i = 1; i < string.length; i++) {
    let currentCharacter = string[i]
    let previousCharacter = string[i - 1]
    if (regExp.test(currentCharacter) && currentCharacter === previousCharacter) {
      string = string.substr(0, i) + string.substr(i + 1)
      i--
    }
  }
  return string
}

function wrap (string, firstCharacter, lastCharacter = firstCharacter) {
  if (!firstCharacter) return string
  return firstCharacter + string + lastCharacter
}

function unwrap (string, firstCharacter, lastCharacter = firstCharacter) {
  if (!firstCharacter) return string
  if (string.startsWith(firstCharacter)) string = string.substr(1)
  if (string.endsWith(lastCharacter)) string = string.substr(0, string.length - 1)

  return string
}

function replace (string, pattern, newString) {
  return string.replace(pattern, newString)
}

module.exports = {
  pad,
  trim,
  strip,
  uppercase,
  underscore,
  reverse,
  capitalize,
  unescape,
  lowerfirst,
  lowercase,
  humanize,
  titleize,
  dasherize,
  classify,
  pluralize,
  singularize,
  swapcase,
  camelize,
  constantize,
  truncate,
  repeat,
  singlespace,
  whitespaceless,
  quote,
  unquote,
  squeeze,
  summarize,
  wrap,
  unwrap,
  replace
}
