const string = [
  pad: {
    parameters: ['value', 'pad', 'left'],
    description: {
      en: `Returns string with added pad from left side or right side.
           When pad is string, prepends or appends them to the value(depending on left is truthy value).
           When pad is a number, prepends or appends (pad) whitespaces to the value(depending on left is truthy value).
           When left is truthy, pad is prepends to value, otherwise pad is appends to value.
           By default left is truthy.`,
      pl: `Zwraca łańuch znaków z dodanym marginesem z lewej lub prawej strony.
           Jeżeli parametr "pad" jest łańcuchem znaków, to łańuch ten doklejany jest do parametru "value".
           Jeżeli parametr pad jest liczbą, to wówczas do parametru "value" dodawane są puste spacje.
           W zależności od wartości flagi "left" margines jes dodawany z lewej lub prawej strony. Domyślnie flaga ustawiona jest na true.`
    }
  },
  trim: {
    parameters: ['string'],
    description: {
      en: `Removes whitespace from the start and the end of the string.`,
      pl: `Usuwa spacje z początku i końca łańcucha znaków`
    }
  },
  strip: {
    parameters: ['string', 'pattern'],
    description: {
      en: `Removes from the string, passed pattern. Pattern could be a string or an array.
           When pattern is a string then removes substring.
           When pattern is an array or pattern is one character string then removes globally from the string single character.
           When pattern has not been passed, trims the string.`,
      pl: `Usuwa z łańcucha tekstowego przekazany wzorzec. Wzorzec może być łańcuchem tekstowym lub tablicą.
           Jeżeli wzorzec jest łańcuchem tekstowym, to jest on usuwany z parametru "string".
           Jeżeli wzorzec jest tablicą lub pojedyńczym znakiem, to z parametru "string" usuwane są globalnie poszczególne znaki.
           W przypadku gdy wzorzec nie został przekazany, z początku oraz końca parametru "string" usuwane są spacje.`
    }
  },
  uppercase: {
    parameters: ['string'],
    description: {
      en: `Converts string to 'UPPERCASE'`
      pl: `Konwertuje łańuch znaków do notacji "UPPERCASE".`
    }
  },
  underscore: {
    parameters: ['string'],
    description: {
      en: `Returns new string with words separated by "_". All letters are lowercase.`,
      pl: `Zwraca nowy łańcuch znaków, w którym wyrazy oddzielone są od siebie podłogą(_) i pisaną są małą literą.`
    }
  },
  capitalize: {
    parameters: ['string'],
    description: {
      en: `Converts first letter of the string to 'UPPERCASE'.`,
      pl: `Konwertuje pierwszą literę łańcucha tekstowego na wielką literę.`
    }
  }
  unescape: {
    parameters: ['string'],
    description: {
      en: `Converts the HTML entities in string to their corresponding characters.`,
      pl: `Konwertuje encje HTML, na odpowiadające im znaki.`
    }
  },
  lowerfirst: {
    parameters: ['string'],
    description: {
      en: `Converts first letter of the string to 'lowercase'.`,
      pl: `Konwertuje pierwszą literę łańcucha tekstowego na wielką literę.`
    }
  },
  lowercase: {
    parameters: ['string'],
    description: {
      en: `Converts string to 'lowercase'`,
      pl: `Konwertuje wielkie litery w łańcuchu tekstowym na małe.`
    }
  },
  humanize: {
    parameters: ['string', 'capitalize'],
    description: {
      en: `Replaces '_' with singlespaces. When capitalize is truthy, converts first char of the string to 'UPPERCASE'. By default capitalize is truthy.`,
      pl: `Zamienia pojedyńcze spacje na podłogę(_). Gdy flaga "capitalize" ustawiona jest na true, konwertuje pierwszą literę łańcucha na wielką, domyślnie flaga przyjmuje wartość true.`
    }
  },
  titleize: {
    parameters: ['string'],
    description: {
      en: `Converts to 'UPPERCASE' first letter of each word in string(separated by singlespace).`,
      pl: `Konwertuje pierwszą literą każdego wyrazu(wyrazy oddzielone pojedyńczą spacją) na wielką.`
    }
  },
  dasherize: {
    parameters: ['string'],
    description: {
      en: `Replaces globally in the string "_" to "-".`,
      pl: `Zamienia w łańcuchu tekstowym znaki podłogi(_) na myślniki(-).`
    }
  },
  classify: {
    parameters: ['string'],
    description: {
      en: `Creates a class name from the string.`,
      pl: `Tworzy nazwę klasy na podstawie łańcucha tekstowego.`
    }
  },
  pluralize: {
    parameters: ['string'],
    description: {
      en: `Returns plural form of the string.`,
      pl: `Zwraca liczbę mnogą rzeczownika.`
    }
  },
  singularize: {
    parameters: ['string', 'appendix'],
    description: {
      en: `Returns singular form of the string.`,
      pl: `Zwraca liczbę pojedyńczą rzeczownika.`
    }
  },
  camelize: {
    parameters: ['string', 'camelcased'],
    description: {
      en: `Converts string to "lowerCase" or "UpperCase" notation.
           When camelcased is falsy returns string in "lowerCase" notation otherwise in "UpperCase" notation.
           By default camelcased is falsy.`,
      pl: `Konwertuje łańcuch znaków do notacji "lowerCase", w przypadku gdy flaga "camelcased" ustawiona jest na true, w przeciwnym razie łańcuch tekstowy konwertowany jest do notacji "UpperCase".
           Domyślnie flaga "camelcased" ustawiona jest na true.`
    }
  },
  constantize: {
    parameters: ['string'],
    description: {
      en: `Converts string to "CONSTANT_NOTATION".`,
      pl: `Konwertuje łańcuch tekstowy do notacji "CONSTANT_VARIABLE".`
    }
  },
  truncate: {
    parameters: ['string', 'length', 'ending'],
    description: {
      en: `Truncates a given string if is longer than passed length and replaces last chars of new string with passed ending.
           When the string length is smaller than passed length returns string.
           By default length equals 30. By default ending equals '...'`,
      pl: `Ucina łańcuch tekstowy, jeśli jest dłuższy niż podana długość i dokleja w miejscu ucięcia parametr "ending" (domyślnie ...).`
    }
  },
  tail: {
    parameters: ['string', 'length', 'ending'],
    description: {
      en 'Truncates the tail of a given string.',
      pl: 'Obcina ogon danego łańcucha tekstowego.'
    }
  },
  summarize: {
    parameters: ['string', 'lenght']
    description: {
      en: `Adds three dots(...) at the end of the string, when the string is longer than the passed length.`
      pl: `Dodaje trzy kropki (...) na końcu ciągu tekstowego, gdy ciąg jest dłuższy niż podana długość.`
    }
  },
  swapcase: {
    parameters: ['string'],
    description: {
      en: `Replaces in string lower case letters to uppercase and uppercase letters to lowercase.`,
      pl: `Zamienia wielkie litery na małe, a duże na wielkie.`
    }
  },
  repeat: {
    parameters: ['string', 'count'],
    description: {
      en: `Repeats the string (count) times.`,
      pl: `Powiela łańcuch znaków okresloną ilość razy.`
    }
  },
  singlespace: {
    parameters: ['string'],
    description: {
      en: `Replaces in the string multiple spaces to single spaces.`
      pl: `Zastępuje wielokrotne wystąpienia spacji na pojedyńcze.`
    }
  },
  whitespacestrip: {
    parameters: ['string'],
    description: {
      en: `Removes from string whitespaces.`,
      pl: `Usuwa z łańcucha tekstowego spacje.`
    }
  },
  quote: {
    parameters: ['string', 'lang'],
    description: {
      en: `Puts the string inside quotations marks. When lang equals 'en' returns string inside "", in other case returns inside „”. By defaul lang is set to 'en'.`,
      pl: `Umieszcza łańcuch tekstowy w cudzysłowiu. Gdy parametr "lang" równy jest 'en', wówczas znakiem cudzysłowiu jest ", w przeciwnym razie znakiem cudzysłowiu są „”.`
  },
  unquote: {
    parameters: ['string'],
    description: {
      en: `If string is between quotations characters ("", „”), removes them and returns string, otherwise returns tne string.`
      pl: `Jeśli łańcuch tekstowy znajduje się pomiędzy znakami "" lub „”, to znaki te usuwane są z łańcuch tekstowego.`
    }
  },
  squeeze: {
    parameters: ['string', 'pattern'],
    description: {
      en: 'Replaces in string multiple repetitions of the same characters to the one character. Pattern is a string based on which the regular expression is created. By default equals a-zA-Z',
      pl: 'Usuwa z łańcucha tekstowego wielokrotne wystąpienia tego samego znaku. Parametr "pattern" jest ciągiem tekstowym, na podstawie którego tworzone jest wyrażenie regularne. Domyślnie jest równe a-zA-Z.'
    }
  },
  wrap: {
    parameters: ['string', 'firstCharacter', 'lastCharacter'],
    description: {
      en: `Wraps string between firstCharacter and lastCharacter.`
      pl: `Umieszcza łańcuch tekstowy pomiędzy przekazanymi znakami.`
    }
  },
  unwrap: {
    parameters: ['string', 'firstCharacter', 'lastCharacter'],
    description: {
      en: `Removes from the begining and from the end of the string passed characters`,
      pl: `Usuwa z początku i końca łańcucha tekstowego przekazane do funkcji znaki.`
    }
  },
  replace: {
    parameters: ['string', 'pattern', 'newString'],
    description: {
      en: `Replaces searched pattern by newString.`,
      pl: `Zastępuje podany wzorzec nowym łańcuhem tekstowym.`
    }
  },
  index: {
    parameters: ['string', 'pattern', 'start'],
    description: {
      en: `Returns index of searched pattern. By default start equals 0.`
      pl: `Zwraca indeks szukanego wzorca.`
    }
  }
  chop: {
    parameters: ['string'],
    description: {
      en: 'Returns string with last character removed. If the string ends with rn special chars, both characters are removed.',
      pl: 'Zwraca łańcuch tekstowy z usuniętym ostatnim znakiem. Jeśli łańcuch tekstowy kończy się specjalnymi znakami (rn), to wówczas oba są usuwane.'
    }
  },
  chomp: {
    parameters: ['string', 'pattern'],
    description: {
      en: 'Removes from the end of the string passed pattern. When pattern has not been passed, removes from the end of the string rn special chars',
      pl: 'Usuwa z końca łańcucha tekstowego podany wzorzec.'
    }
  },
  dot: {
    parameters: ['string'],
    description: {
      en: 'Returns string with dot at the end.',
      pl: 'Zwraca łańcuch tekstowy z kropką (.) na końcu.'
    }
  },
  crop: {
    parameters: ['string', 'length', 'append'],
    description: {
      en: `Truncates string at full words. When length of string is longer than passed length, cut the string and add to string append. By default append equals ...`,
      pl: `Przycina łańcuch tekstowy do całych wyrazów.`
    }
  },
  slugify: {
    parameters: ['string', 'separator'],
    description: {
      en: `Converts string to lower case, remove non-word chars and replace spaces with the separator`,
      pl: `Konwertuje litery łańcucha tekstowego na małe, usuwa wyrazy nie będące słowami, zastępuje spacje przekazanym do funkcji separatorem.`
    }
  },
  hyphenate: {
    parameters: ['string'],
    description: {
      en: 'Replaces spaces with hyphens, splits camelCase text, remove non-word chars and converts string to lower case.',
      pl: 'Zastępuje znak spacji myślnikami(-), oddziela znakiem myślnika(-) wyrazy zapisane w notacji "camelCase". Usuwa wyrazy nie będące słowami i konwertuje wszystkie litery na małe.'
    }
  },
  initials: {
    parameters: ['string', 'separator'],
    description: {
      en: `Returns initials from the passed string. Letters are separated by separator. By default separator equals ''.`,
      pl: `Zwraca inicjały na podstawie przekazanego łańcucha znaków. Litery inicjału oddzielone są za pomocą parametru "separator", który domyślnie jest pustym łańcuhem tekstowym.`
   }
  },
  htmlstrip: {
    parameters: ['string'],
    description: {
      en: 'Removes HTML tags from the string.',
      pl: 'Usuwa tagi HTML z podanego łańcucha znaków.'
    }
  },
  split: {
    parameters: ['string', 'separator'],
    description: {
      en: `Splits string into an array by separating the string into substrings. By default separator equals ''`,
      pl: `Dzieli łańcuch znaków na tablicę, dzieląc łańuch tekstowy na podłańuchy, na podstawie separatora. Domyślnie separator równy jest pustemu łańcuhowi znaków.`
    }
  },
  celsius: {
    parameters: ['string'],
    description: {
      en: `Converts temperature in Fahrenheit and Kelvin notation to Celsius degree. When passed string is a number, appends °C to the string.`,
      pl: `Konwertuje temperaturę wyrażoną w stopniach Fahrenheit'a lub jednostkach Kelvina, na stopnie Celsiusza.`
  },
  fahrenheit: {
    parameters: ['string'],
    description: {
      en: `Converts temperature in Celsius and Kelvin notation to Fahrenheit degree. When passed string is a number, appends °F to the string.`,
      pl: `Konwertuje temperaturę wyrażoną w stopniach Celsiusza lub jednostkach Kelvina, na stopnie Fahrenheit'a.`
    }
  },
  kelvin: {
    parameters: ['string'],
    description: {
      en: 'Converts temperature in Celsius and Fahrenheit notation to Kelvin scale. When passed string is a number, appends K to the string.',
      pl: `Konwertuje temperaturę wyrażoną w stopniach Fahrenheit'a lub Celsiusza, na skalę Celvina.`
    }
  }
]

module.exports = string
