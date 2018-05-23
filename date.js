function isostring (value) {
  return new Date(parseInt(value, 10)).toISOString()
}

function format (date, format) {
  const delimeters = [',', '.', '-', '/', ' ']
  const months = new Map([
    ['Jan', '01'],
    ['Feb', '02'],
    ['Mar', '03'],
    ['Apr', '04'],
    ['May', '05'],
    ['Jun', '06'],
    ['Jul', '07'],
    ['Aug', '08'],
    ['Sep', '09'],
    ['Oct', '10'],
    ['Nov', '11'],
    ['Dev', '12']
  ])

  if (Object.prototype.toString.call(date) !== '[object Date]') date = new Date(date)
  if (!+date) return date.toString()

  date = date.toDateString().substr(4).split(' ')
  if (months.has(date[0])) date[0] = months.get(date[0])

  date = [
    { type: 'MM', value: date[0] },
    { type: 'DD', value: date[1] },
    { type: 'YYYY', value: date[2] }
  ]

  const delimeter = delimeters.find(delimeter => format.includes(delimeter))
  if (!delimeter) {
   const part = date.find(element => element.type === format)
   return part.value
  }
  format = format.split(delimeter)

  for (let i = 0; i < date.length; i++) {
    let type = date[i].type
    for (let j = 0; j < format.length; j++) {
      const index = format.indexOf(date[i].type)
      if (index === -1) {
        date.splice(i, 1)
      } else  if (index !== i) {
        const temp = date[i]
        date[i] = date[index]
        date[index] = temp
      }
    }
  }

  let dateString = ''
  date.forEach(element => {
    dateString += element.value + delimeter
  })

  dateString = dateString.substr(0, dateString.length - 1)
  return dateString
}

module.exports = {
  isostring,
  format
}
