export function flatten (array) {
  return array.reduce((previous, current) => {
    return previous.concat(Array.isArray(current) ? flatten(current) : current)
  }, [])
}

export function identifier (array) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let index = 0
  while (array.indexOf(alphabet[index]) !== -1) {
    index += 1
    if (index === alphabet.length) {
      index = 0
      alphabet = alphabet.map(character => '_' + character)
    }
  }
  return alphabet[index]
}

export function first (array) {
  return array[0]
}

export function second (array) {
  return array[1]
}

export function third (array) {
  return array[2]
}

export function fourth (array) {
  return array[3]
}

export function fifth (array) {
  return array[4]
}

export function sixth (array) {
  return array[5]
}

export function seventh (array) {
  return array[6]
}

export function eigth (array) {
  return array[7]
}

export function ninth (array) {
  return array[8]
}

export function tenth (array) {
  return array[9]
}

export function last (array) {
  return array[array.length - 1]
}
