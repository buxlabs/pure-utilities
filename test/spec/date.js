import test from 'ava'
import { date } from '../..'

test('isostring returns a valid date', t => {
  t.deepEqual(date.isostring('1460303444338'), '2016-04-10T15:50:44.338Z')
})

test('format returns a date in DD-MM-YYYY format by default', t => {
  t.deepEqual(date.format(new Date('2013/06/13')), '13-06-2013')
})

test('format returns a date in DD-MM-YYYY format by default', t => {
  t.deepEqual(date.format('06-27-13'), '27-06-2013')
})

test('format returns "Invalid Date" message when passed date is invalid', t => {
  t.deepEqual(date.format(new Date('2018/15/13'), 'DD/MM/YYYY'), 'Invalid Date')
})

test('format returns "Invalid Date" message when passed date is invalid', t => {
  t.deepEqual(date.format('27-06-2013', 'DD/MM/YYYY'), 'Invalid Date')
})

test('format returns "Invalid Format" message when format is invalid', t => {
  t.deepEqual(date.format('2013-06-27', 'DD!MM!YYYY'), 'Invalid Format')
})

test('format returns a date in given format', t => {
  t.deepEqual(date.format(new Date(2018, 4, 23), 'MM'), '05')
})

test('format returns number of the month', t => {
  t.deepEqual(date.format(new Date('2018-05-23'), 'MM'), '05')
})

test('format returns number of the month', t => {
  t.deepEqual(date.format(new Date('2018/05/23'), 'MM'), '05')
})

test('format returns number of the month', t => {
  t.deepEqual(date.format(new Date('2018-05'), 'MM'), '05')
})

test('format returns number of the month', t => {
  t.deepEqual(date.format(new Date('2018'), 'MM'), '01')
})

test('format returns number of the day', t => {
  t.deepEqual(date.format(new Date(2018, 4, 23), 'DD'), '23')
})

test('format returns number of the year', t => {
  t.deepEqual(date.format(new Date(2018, 4, 23), 'YYYY'), '2018')
})

test('format returns a date in given format', t => {
  t.deepEqual(date.format(new Date(2018, 4, 23), 'DD/MM/YYYY'), '23/05/2018')
})

test('format returns a date in given format', t => {
  t.deepEqual(date.format(new Date(2018, 4, 23), 'MM/DD/YYYY'), '05/23/2018')
})

test('format returns a date in given format', t => {
  t.deepEqual(date.format(new Date(2018, 4, 23), 'MM.DD.YYYY'), '05.23.2018')
})

test('format returns a date in given format', t => {
  t.deepEqual(date.format(new Date(2018, 4, 23), 'MM-DD-YYYY'), '05-23-2018')
})

test('format returns a date in given format', t => {
  t.deepEqual(date.format(new Date(2018, 4, 23), 'YYYY/MM/DD'), '2018/05/23')
})

test('format returns a date in given format', t => {
  t.deepEqual(date.format(new Date(2018, 4, 23), 'MM YYYY'), '05 2018')
})

test('format returns a date in given format', t => {
  t.deepEqual(date.format(new Date(2018, 4, 23), 'MM-YYYY'), '05-2018')
})

test('day returns the day of the month', t => {
  t.deepEqual(date.day(new Date(2018, 4, 28)), 28)
})

test('day returns the day of the month', t => {
  t.deepEqual(date.day(new Date(2017, 1, 11)), 11)
})

test('day returns the day of the month', t => {
  t.deepEqual(date.day('27-06-2013'), 'Invalid Date')
})

test('weekday returns the day of the week', t => {
  t.deepEqual(date.weekday(new Date(2018, 4, 28)), 1)
})

test('weekday returns the day of the week', t => {
  t.deepEqual(date.weekday(new Date(2018, 4, 27)), 0)
})

test('weekday returns the day of the week', t => {
  t.deepEqual(date.weekday(new Date(2017, 1, 11)), 6)
})

test('weekday returns the day of the week', t => {
  t.deepEqual(date.weekday('27-06-2013'), 'Invalid Date')
})

test('month returns the number of the month', t => {
  t.deepEqual(date.month(new Date(2018, 4, 28)), 4)
})

test('month returns the number of the month', t => {
  t.deepEqual(date.month(new Date(2018, 1, 27)), 1)
})

test('year returns the number of the year', t => {
  t.deepEqual(date.year(new Date(2018, 4, 28)), 2018)
})

test('year returns the number of the year', t => {
  t.deepEqual(date.year(new Date(1995, 3, 13)), 1995)
})
