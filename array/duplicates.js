function duplicates(array) {
  const seen = [];
  const duplicates = [];

  for (const element of array) {
    const key =
      element && typeof element === "object"
        ? JSON.stringify(element, Object.keys(element).sort())
        : element;

    if (seen.includes(key) && !duplicates.includes(key)) {
      duplicates.push(key);
    } else {
      seen.push(key);
    }
  }

  return duplicates.map((key) => {
    try {
      return JSON.parse(key);
    } catch {
      return key;
    }
  });
}

module.exports = duplicates;
