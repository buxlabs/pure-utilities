const utilities = require('..')
const documentation = {
  truncate: `Truncates string if it's longer than the given maximum string length. The last characters of the truncated string are replaced with the omission string which defaults to "...".`
}

for (let name in utilities) {
  const utility = utilities[name]
  for (let method in utility) {
    if (!documentation[method]) {
      throw new Error(`Documentation missing for: ${method}`)
    }
  }
}
