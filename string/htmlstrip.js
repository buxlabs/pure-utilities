function htmlstrip (string) {
  return string.replace(/<\/?[^>]+>/gi, '')
}

module.exports = htmlstrip
