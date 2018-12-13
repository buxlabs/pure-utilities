const collection = {
  prepend: {
    parameters: ['collection', 'indefinite', 'amount', 'of', 'arguments'],
    description: {
      en: 'Adds arguments at the beginning of the collecion.',
      pl: 'Dodaje argumenty na początek kolekcji.'
    }
  },
  reverse: {
    parameters: ['collection'],
    description: {
      en: 'Reverses the elements of the collection.',
      pl: 'Odwraca kolejność elementów kolekcji.'
    }
  },
  size: {
    parameters: ['collection'],
    description: {
      en: 'Returns the size of the collection.',
      pl: 'Zwraca liczbę elementów kolekcji.'
    }
  }
}
module.exports = collection
