const test = require("node:test")
const assert = require("node:assert")
const { date } = require("../..")

test("isostring returns a valid date", () => {
  assert.deepEqual(date.isostring("1460303444338"), "2016-04-10T15:50:44.338Z")
})

test("format returns a date in DD-MM-YYYY format by default (t1)", () => {
  assert.deepEqual(date.format(new Date("2013/06/13")), "13-06-2013")
})

test("format returns a date in DD-MM-YYYY format by default (t2)", () => {
  assert.deepEqual(date.format(new Date("2013/06/02")), "02-06-2013")
})

test("format returns a date in DD-MM-YYYY format by default (t3)", () => {
  assert.deepEqual(date.format("06-27-13"), "27-06-2013")
})

test('format returns "Invalid Date" message when passed date is invalid (t1)', () => {
  assert.deepEqual(
    date.format(new Date("2018/15/13"), "DD/MM/YYYY"),
    "Invalid Date"
  )
})

test('format returns "Invalid Date" message when passed date is invalid (t2)', () => {
  assert.deepEqual(date.format("27-06-2013", "DD/MM/YYYY"), "Invalid Date")
})

test('format returns "Invalid Format" message when format is invalid', () => {
  assert.deepEqual(date.format("2013-06-27", "DD!MM!YYYY"), "Invalid Format")
})

test("format returns a date in given format (t1)", () => {
  assert.deepEqual(date.format(new Date(2018, 4, 23), "MM"), "05")
})

test("format returns number of the month (t1)", () => {
  assert.deepEqual(date.format(new Date("2018-05-23"), "MM"), "05")
})

test("format returns number of the month (t2)", () => {
  assert.deepEqual(date.format(new Date("2018/05/23"), "MM"), "05")
})

test("format returns number of the month (t3)", () => {
  assert.deepEqual(date.format(new Date("2018-05"), "MM"), "05")
})

test("format returns number of the month (t4)", () => {
  assert.deepEqual(date.format(new Date("2018"), "MM"), "01")
})

test("format returns number of the day", () => {
  assert.deepEqual(date.format(new Date(2018, 4, 23), "DD"), "23")
})

test("format returns number of the year", () => {
  assert.deepEqual(date.format(new Date(2018, 4, 23), "YYYY"), "2018")
})

test("format returns a date in given format (t2)", () => {
  assert.deepEqual(
    date.format(new Date(2018, 4, 23), "DD/MM/YYYY"),
    "23/05/2018"
  )
})

test("format returns a date in given format (t3)", () => {
  assert.deepEqual(
    date.format(new Date(2018, 4, 23), "MM/DD/YYYY"),
    "05/23/2018"
  )
})

test("format returns a date in given format (t4)", () => {
  assert.deepEqual(
    date.format(new Date(2018, 4, 23), "MM.DD.YYYY"),
    "05.23.2018"
  )
})

test("format returns a date in given format (t5)", () => {
  assert.deepEqual(
    date.format(new Date(2018, 4, 23), "MM-DD-YYYY"),
    "05-23-2018"
  )
})

test("format returns a date in given format (t6)", () => {
  assert.deepEqual(
    date.format(new Date(2018, 4, 23), "YYYY/MM/DD"),
    "2018/05/23"
  )
})

test("format returns a date in given format (t7)", () => {
  assert.deepEqual(date.format(new Date(2018, 4, 23), "MM YYYY"), "05 2018")
})

test("format returns a date in given format (t8)", () => {
  assert.deepEqual(date.format(new Date(2018, 4, 23), "MM-YYYY"), "05-2018")
})

test("hours returns the hours of the day (t1)", () => {
  assert.deepEqual(date.hours(new Date(2018, 4, 28, 10)), 10)
})

test("hours returns the hours of the day (t2)", () => {
  assert.deepEqual(date.hours(new Date(2017, 1, 11)), 0)
})

test("hours returns the hours of the day (t3)", () => {
  assert.deepEqual(date.hours("27-06-2013"), "Invalid Date")
})

test("minutes returns the minutes of the hour (t1)", () => {
  assert.deepEqual(date.minutes(new Date(2018, 4, 28, 10, 11)), 11)
})

test("minutes returns the minutes of the hour (t2)", () => {
  assert.deepEqual(date.minutes(new Date(2017, 1, 11)), 0)
})

test("minutes returns the minutes of the hour (t3)", () => {
  assert.deepEqual(date.minutes("27-06-2013"), "Invalid Date")
})

test("seconds returns the seconds of the minute (t1)", () => {
  assert.deepEqual(date.seconds(new Date(2018, 4, 28, 10, 11, 12)), 12)
})

test("seconds returns the seconds of the minute (t2)", () => {
  assert.deepEqual(date.seconds(new Date(2017, 1, 11)), 0)
})

test("seconds returns the seconds of the minute (t3)", () => {
  assert.deepEqual(date.seconds("27-06-2013"), "Invalid Date")
})

test("day returns the day of the month (t1)", () => {
  assert.deepEqual(date.day(new Date(2018, 4, 28)), 28)
})

test("day returns the day of the month (t2)", () => {
  assert.deepEqual(date.day(new Date(2017, 1, 11)), 11)
})

test("day returns the day of the month (t3)", () => {
  assert.deepEqual(date.day("27-06-2013"), "Invalid Date")
})

test("weekday returns the day of the week (t1)", () => {
  assert.deepEqual(date.weekday(new Date(2018, 4, 28)), 1)
})

test("weekday returns the day of the week (t2)", () => {
  assert.deepEqual(date.weekday(new Date(2018, 4, 27)), 0)
})

test("weekday returns the day of the week (t3)", () => {
  assert.deepEqual(date.weekday(new Date(2017, 1, 11)), 6)
})

test("weekday returns the day of the week (t4)", () => {
  assert.deepEqual(date.weekday("27-06-2013"), "Invalid Date")
})

test("month returns the number of the month (t1)", () => {
  assert.deepEqual(date.month(new Date(2018, 4, 28)), 4)
})

test("month returns the number of the month (t2)", () => {
  assert.deepEqual(date.month(new Date(2018, 1, 27)), 1)
})

test("year returns the number of the year (t1)", () => {
  assert.deepEqual(date.year(new Date(2018, 4, 28)), 2018)
})

test("year returns the number of the year (t2)", () => {
  assert.deepEqual(date.year(new Date(1995, 2, 13)), 1995)
})

test("month handles invalid date", () => {
  const result = date.month("invalid-date")
  assert.deepEqual(result, "Invalid Date")
})

test("year handles invalid date", () => {
  const result = date.year("invalid-date")
  assert.deepEqual(result, "Invalid Date")
})

test("prettydate handles string date input", () => {
  const result = date.prettydate("2018-06-15")
  assert.deepEqual(result, "Friday, 15th of June 2018")
})

test("prettydate handles invalid date", () => {
  const result = date.prettydate("invalid-date")
  assert.deepEqual(result, "Invalid Date")
})

test("prettydate returns date string containing name of the day, number of the day, name of the month and year (t1)", () => {
  assert.deepEqual(
    date.prettydate(new Date(2043, 9, 25)),
    "Sunday, 25th of October 2043"
  )
})

test("prettydate returns date string containing name of the day, number of the day, name of the month and year (t2)", () => {
  assert.deepEqual(
    date.prettydate(new Date(2018, 5, 15)),
    "Friday, 15th of June 2018"
  )
})

test("prettydate returns date string containing name of the day, number of the day, name of the month and year (t3)", () => {
  assert.deepEqual(
    date.prettydate(new Date(2018, 5, 1)),
    "Friday, 1st of June 2018"
  )
})

test("prettydate returns date string containing name of the day, number of the day, name of the month and year (t4)", () => {
  assert.deepEqual(
    date.prettydate(new Date(2018, 2, 21)),
    "Wednesday, 21st of March 2018"
  )
})

test("prettydate returns date string containing name of the day, number of the day, name of the month and year (t5)", () => {
  assert.deepEqual(
    date.prettydate(new Date(2018, 2, 21), "pl-Pl"),
    "środa, 21 marca 2018"
  )
})

test("prettydate returns date string containing name of the day, number of the day, name of the month and year (t6)", () => {
  assert.deepEqual(
    date.prettydate(new Date(2018, 5, 21), "pl-Pl"),
    "czwartek, 21 czerwca 2018"
  )
})

test("prettydate returns date string containing name of the day, number of the day, name of the month and year (t7)", () => {
  assert.deepEqual(
    date.prettydate(new Date(2018, 8, 8), "pl-Pl"),
    "sobota, 8 września 2018"
  )
})

test("prettydate returns date string containing name of the day, number of the day, name of the month and year (t8)", () => {
  assert.deepEqual(
    date.prettydate(new Date(2018, 11, 30), "pl-Pl"),
    "niedziela, 30 grudnia 2018"
  )
})

test("prettydate returns date string containing name of the day, number of the day, name of the month and year (t9)", () => {
  assert.deepEqual(date.prettydate(new Date(2018, 11, 30), "de-De"), "")
})

test("prettydate handles 2nd and 3rd correctly", () => {
  assert.deepEqual(
    date.prettydate(new Date(2018, 5, 2)),
    "Saturday, 2nd of June 2018"
  )
  assert.deepEqual(
    date.prettydate(new Date(2018, 5, 3)),
    "Sunday, 3rd of June 2018"
  )
})

test("prettydate handles 22nd and 23rd correctly", () => {
  assert.deepEqual(
    date.prettydate(new Date(2018, 5, 22)),
    "Friday, 22nd of June 2018"
  )
  assert.deepEqual(
    date.prettydate(new Date(2018, 5, 23)),
    "Saturday, 23rd of June 2018"
  )
})

test("timestamp can return the year", () => {
  assert.deepEqual(date.timestamp(new Date(2018, 4, 28), "YYYY"), "2018")
})

test("timestamp can return the month", () => {
  assert.deepEqual(date.timestamp(new Date(2018, 4, 28), "YYYY/MM"), "2018/05")
})

test("timestamp can return the day", () => {
  assert.deepEqual(
    date.timestamp(new Date(2018, 4, 28), "YYYY/MM/DD"),
    "2018/05/28"
  )
})

test("timestamp has a default pattern", () => {
  assert.deepEqual(date.timestamp(new Date(2018, 4, 28)), "2018-05-28")
})

test("timeago returns 'just now' for very recent dates", () => {
  const now = new Date()
  assert.deepEqual(date.timeago(now), "just now")
})

test("timeago returns seconds ago", () => {
  const now = new Date()
  const past = new Date(now.getTime() - 30000) // 30 seconds ago
  assert.deepEqual(date.timeago(past), "30 seconds ago")
})

test("timeago returns 1 second ago", () => {
  const now = new Date()
  const past = new Date(now.getTime() - 1000) // 1 second ago
  assert.deepEqual(date.timeago(past), "1 second ago")
})

test("timeago returns minutes ago", () => {
  const now = new Date()
  const past = new Date(now.getTime() - 120000) // 2 minutes ago
  assert.deepEqual(date.timeago(past), "2 minutes ago")
})

test("timeago returns 1 minute ago", () => {
  const now = new Date()
  const past = new Date(now.getTime() - 60000) // 1 minute ago
  assert.deepEqual(date.timeago(past), "1 minute ago")
})

test("timeago returns hours ago", () => {
  const now = new Date()
  const past = new Date(now.getTime() - 7200000) // 2 hours ago
  assert.deepEqual(date.timeago(past), "2 hours ago")
})

test("timeago returns 1 hour ago", () => {
  const now = new Date()
  const past = new Date(now.getTime() - 3600000) // 1 hour ago
  assert.deepEqual(date.timeago(past), "1 hour ago")
})

test("timeago returns days ago", () => {
  const now = new Date()
  const past = new Date(now.getTime() - 172800000) // 2 days ago
  assert.deepEqual(date.timeago(past), "2 days ago")
})

test("timeago returns 1 day ago", () => {
  const now = new Date()
  const past = new Date(now.getTime() - 86400000) // 1 day ago
  assert.deepEqual(date.timeago(past), "1 day ago")
})

test("timeago returns months ago", () => {
  const now = new Date()
  const past = new Date(now.getTime() - 5184000000) // 2 months ago
  assert.deepEqual(date.timeago(past), "2 months ago")
})

test("timeago returns 1 month ago", () => {
  const now = new Date()
  const past = new Date(now.getTime() - 2592000000) // 1 month ago
  assert.deepEqual(date.timeago(past), "1 month ago")
})

test("timeago returns years ago", () => {
  const now = new Date()
  const past = new Date(now.getTime() - 63072000000) // 2 years ago
  assert.deepEqual(date.timeago(past), "2 years ago")
})

test("timeago returns 1 year ago", () => {
  const now = new Date()
  const past = new Date(now.getTime() - 31536000000) // 1 year ago
  assert.deepEqual(date.timeago(past), "1 year ago")
})

test("timeago returns 'just now' for future dates", () => {
  const now = new Date()
  const future = new Date(now.getTime() + 1000)
  assert.deepEqual(date.timeago(future), "just now")
})

test("timeago returns 'Invalid Date' for invalid input", () => {
  assert.deepEqual(date.timeago("invalid-date"), "Invalid Date")
})
