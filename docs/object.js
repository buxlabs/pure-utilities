const object = {
  dig: {
    parameters: ['object', 'string'],
    description: {
      en: 'Returns the value of any object property, which the name has been passed in the string',
      pl: 'Zwraca wartość dowolnej właściwości obiektu, na podstawie przekazanego łańcucha znaków.'
    }
  },
  flatten: {
    parameters: ['object'],
    description: {
      en: 'Flattens the object into a single-depth object.',
      pl: 'Spłaszcza zagnieżdżone właściwości obiektu, zwracając obiekt o stopniu głębokości równym 1.'
    }
  },
  keys: {
    parameters: ['object'],
    description: {
      en: `Returns an array of a given object's property names.`,
      pl: 'Zwraca tablicę zawierającą nazwy właściwości obiektu.'
    }
  },
  pat: {
    parameters: ['object', 'string', 'value'],
    description: {
      en: 'Overrides the value of any object property, which the name has been passed in the string with the value',
      pl: 'Nadpisuje wartość właściwości, której nazwa została przekazana w parametrze "string", na wartość przekazaną w parametrze "value"'
    }
  },
  rename: {
    parameters: ['object', 'keys'],
    description: {
      en: `Changes names of the object properties to responds values from the key's object.`,
      pl: 'Zmienia nazwy właściwości obiektu, na odpowiadające im wartości z obiektu keys.'
    }
  },
  unflatten: {
    parameters: ['object'],
    description: {
      en: 'Converts properties of the object, which contain in the name dots(.), to multi-depth object.',
      pl: 'Konwertuje właściwości obiektu, których nazwy zawierają kropki(.), na zagnieżdżone obiety, zwracając obiekt o różnym stopniu głębokości.'
    }
  },
  values: {
    parameters: ['object'],
    description: {
      en: `Returns an array of a given object's own enumerable property values`,
      pl: 'Zwraca tablicę zawierającą własne, wyliczalne właściwości obiektu.'
    }
  }
}
module.exports = object
