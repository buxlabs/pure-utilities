const date = {
 isostring: `takes one argument: value
             Returns a string in simplified extended ISO format.`,

 format: `Takes two arguments: date, format
          Parses date to the passed format.
          A date argument could be a Date object or a valid string date.
          When passed date is invalid, method returns "Invalid Date" message.
          By default date is parsed to the YYYY-MM-DD format.
          Is possible to parse date only to the month, day, etc. format.`,

  day: `Takes one argument: date
        Returns the day of the month (from 1 to 31) for the passed date.`,

  month: `Takes one argument: date
          Returns the month from (0 to 11) for the passed date.`,

  year: `Takes one argument: date
         Returns the year (four digits for dates between year 1000 and 9999) for the passed date.`,

  weekday: `Takes one argument: date
            Returns the day of the week from (0 to 6) for the specified date.`,

  prettydate: `Takes two arguments: date, localization
               Returns a string, that contains: the name of weekday, day of the month (from 1 to 31), name of the month, and year (four digits for dates between year 1000 and 9999).
               Example output for 'en-En' localization: Wednesday, 21st of March 2018.
               localization can be 'en-En' or 'pl-Pl', in other case function throws error.
               By default localization equals 'en-En'.`
}


module.exports = date
