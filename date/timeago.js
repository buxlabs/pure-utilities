function timeago (date) {
  if (Object.prototype.toString.call(date) !== '[object Date]') date = new Date(date)
  if (!Number(date)) return date.toDateString()

  const now = new Date()
  const seconds = Math.floor((now - date) / 1000)

  if (seconds < 0) {
    return 'just now'
  }

  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
    { label: 'second', seconds: 1 }
  ]

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds)
    if (count >= 1) {
      if (count === 1) {
        return `${count} ${interval.label} ago`
      } else {
        return `${count} ${interval.label}s ago`
      }
    }
  }

  return 'just now'
}

module.exports = timeago
