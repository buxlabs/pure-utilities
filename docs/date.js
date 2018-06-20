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

  prettydate: `Takes one argument: date
               TODO description`

}


module.exports = date
