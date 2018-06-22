const array = [
  flatten: {
    parameters: ['array'],
    description: {
      en: 'Flattens n-dimensional array to the single depth array.',
      pl: 'Spłaszcza wielowymiarową tablicę do tablicy jednowymiarowej.'
    }
  },
  identifier: {
    parameters: ['array'],
    description: {
      en: 'Returns a new unique identifier based on used identifiers.',
      pl: 'Zwraca unikalny identyfikator bazując na wykorzystanych identyfikatorach.'
    }
  },
  first: {
    parameters: ['array'],
    description: {
      en: 'Returns the first element of the array.',
      pl: 'Zwraca pierwszy element tablicy.'
    }
  },
  second: {
    parameters: ['array'],
    description: {
      en: 'Returns the second element of the array.',
      pl: 'Zwraca drugi element tablicy.'
    }
  },
  third: {
    parameters: ['array'],
    description: {
      en: 'Returns the third element of the array.',
      pl: 'Zwraca trzeci element tablicy.'
    }
  },
  fourth: {
    parameters: ['array'],
    description: {
      en: 'Returns the fourth element of the array.',
      pl: 'Zwraca czwarty element tablicy.'
    }
  },
  fifth:  {
    parameters: ['array'],
    description: {
      en: 'Returns the fifth element of the array.',
      pl: 'Zwraca piąty element tablicy.'
    }
  },
  sixth:  {
    parameters: ['array'],
    description: {
      en: 'Returns the sixth element of the array.',
      pl: 'Zwraca szósty element tablicy.'
    }
  },
  seventh: {
    parameters: ['array'],
    description: {
      en: 'Returns the sixth element of the array.',
      pl: 'Zwraca siódmy element tablicy.'
    }
  },
  eigth: {
    parameters: ['array'],
    description: {
      en: 'Returns the eigth element of the array.',
      pl: 'Zwraca ósmy element tablicy.'
    }
  },
  ninth: {
    parameters: ['array'],
    description: {
      en: 'Returns the ninth element of the array.',
      pl: 'Zwraca dziewiąty element tablicy.'
    }
  },
  tenth: {
    parameters: ['array'],
    description: {
      en: 'Returns the tenth element of the array.',
      pl: 'Zwraca dziesiąty element tablicy.'
    }
  },
  last: {
    parameters: ['array'],
    description: {
      en: 'Returns the last element of the array.',
      pl: 'Zwraca ostatni element tablicy.'
    }
  },
  sum: {
    parameters: ['array'],
    description: {
      en: 'Returns the sum from array elements.',
      pl: 'Zwraca sumę elementów tablicy.'
    }
  },
  average: {
    parameters: ['array'],
    description: {
      en: 'Returns the average from array elements.',
      pl: 'Zwraca średnią z elementów tablicy.'
    }
  },
  median: {
    parameters: ['array'],
    description: {
      en: 'Returns the median from array elements.',
      pl: 'Zwraca medianę z elementów tablicy.'
    }
  },
  compact: {
    parameters: ['array'],
    description: {
      en: 'Returns an array containing only truthy values.',
      pl: 'Zwraca tablicę, zawierającą elementy, których wartości są prawdziwe.'
    }
  },
  unique: {
    parameters: ['array'],
    description: {
      en: 'Returns an array containing unique elements.',
      pl: 'Zwraca tablicę, zawierające tylko unikatowe elementy.'
    }
  },
  nth: {
    parameters: ['array', 'position'],
    description: {
      en: `Returns the element located at the passed position.When position is negative, the position of the element is searched from the end of the array.`,
      pl: 'Zwraca element znajdujący się na wybranej pozycji. Gdy parametr "position" jest ujemny, wyszukiwanie elementu zaczyna się od końca tablicy.'
    }
  },
  sample: {
    parameters: [],
    description: {
      en: 'Returns random element from the array.',
      pl: 'Zwraca losowy element tablicy.'
    }
  },
  rotate: {
    parameters: ['array', 'digit']
    description: {
      en: `Shifts "n" items out of the array and pushes them back on the end. When digit is negative, shifting start from the end of the array`,
      pl: 'Usuwa wybraną liczbę elementów z tablicy i przenosi je na koniec tablicy. Gdy parametr "digit" jest ujemny, elementy usuwane są z końca tablicy i przenoszone na jej początek.'
    }
  },
  drop: {
    parameters: ['array', 'digit']
    description: {
      en: 'Removes "n" elements from the array',
      pl: 'Usuwa wybraną liczbę elementów z tablicy.'
    }
  },
  head: {
    parameters: ['array'],
    description: {
      en: 'Returns the first element of the array.',
      pl: 'Zwraca pierwszy element tablicy.'
    }
  },
  take: {
    parameters: ['array', 'digit']
    description: {
      en: `Takes "n" elements from the array, starting from the beginning of the array.`,
      pl: 'Zwraca wybraną liczbę elementów tablicy.'
    }
  },
  slice: {
    parameters: ['array', 'start', 'end']
    description: {
      en: 'Extracts a fragment of an array.',
      pl: 'Wydobywa fragment tablicy.'
    }
  }
]
module.exports = array
