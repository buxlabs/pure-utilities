import test from 'ava'
import { date } from '../../build/index.umd'

test('isostring returns a valid date', t => {
  t.deepEqual(date.isostring('1460303444338'), '2016-04-10T15:50:44.338Z')
})
