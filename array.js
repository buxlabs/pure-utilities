export function flatten (array) {
  return array.reduce((previous, current) => {
    return previous.concat(Array.isArray(current) ? flatten(current) : current);
  }, [])
}
