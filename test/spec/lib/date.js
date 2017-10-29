import test from 'ava'
import { date } from '../../../build'

test('toISOString returns a valid date', t => {
  t.deepEqual(date.toISOString('1460303444338'), '2016-04-10T15:50:44.338Z')
})
