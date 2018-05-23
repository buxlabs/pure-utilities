import test from 'ava'
import { date } from '../..'

test('isostring returns a valid date', t => {
  t.deepEqual(date.isostring('1460303444338'), '2016-04-10T15:50:44.338Z')
})

test('format returns a date in given format', t => {
  t.deepEqual(date.format(new Date('2018/13/13'), 'DD/MM/YYYY'), 'Invalid Date')
})

test('format returns a date in given format', t => {
  t.deepEqual(date.format('2018/13/13', 'DD/MM/YYYY'), 'Invalid Date')
})

test('format returns a date in given format', t => {
  t.deepEqual(date.format(new Date(2018, 4, 23), 'MM'), '05')
})

test('format returns a date in given format', t => {
  t.deepEqual(date.format(new Date('2018-05-23'), 'MM'), '05')
})

test('format returns a date in given format', t => {
  t.deepEqual(date.format(new Date('2018/05/23'), 'MM'), '05')
})

test('format returns a date in given format', t => {
  t.deepEqual(date.format(new Date('2018-05'), 'MM'), '05')
})

test('format returns a date in given format', t => {
  t.deepEqual(date.format(new Date('2018'), 'MM'), '01')
})

test('format returns a date in given format', t => {
  t.deepEqual(date.format(new Date(2018, 4, 23), 'DD'), '23')
})

test('format returns a date in given format', t => {
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


