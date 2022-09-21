function kmeans (k, data, iterations = 1000) {
  const dimensions = data[0].length
  const ranges = []
  for (let dimension = 0; dimension < dimensions; dimension++) {
    const values = data.map(point => point[dimension])
    ranges[dimension] = {
      min: Math.min(...values),
      max: Math.max(...values)
    }
  }

  const centroids = []
  for (let i = 0; i < k; i++) {
    const point = []
    for (let dimension = 0; dimension < dimensions; dimension++) {
      const { min, max } = ranges[dimension]
      point[dimension] = min + (Math.random() * (max - min))
    }
    centroids.push(point)
  }

  const assignments = []

  let iteration = 0
  let result
  while (iteration < iterations) {
    let reassigned = false

    for (let i = 0, ilen = data.length; i < ilen; i++) {
      const previous = assignments[i]
      const point = data[i]
      let minimum = null
      let current = null

      for (let j = 0, jlen = centroids.length; j < jlen; j++) {
        const centroid = centroids[j]
        let sum = 0

        for (let k = 0, klen = point.length; k < klen; k++) {
          const diff = centroid[k] - point[k]
          sum += diff * diff
        }

        const distance = Math.sqrt(sum)

        if (!minimum || distance < minimum) {
          minimum = distance
          current = j
        }
      }

      assignments[i] = current

      if (previous !== current) {
        reassigned = true
      }
    }

    for (let i = 0; i < centroids.length; i++) {
      const points = []
      for (let j = 0; j < data.length; j++) {
        const assignment = assignments[j]
        if (assignment === i) {
          points.push(data[j])
        }
      }
      const centroid = []
      for (let dimension = 0; dimension < dimensions; dimension++) {
        const numbers = points.map(point => point[dimension])
        centroid[dimension] = numbers.reduce((result, value) => result + value, 0) / numbers.length
      }
      centroids[i] = centroid
    }

    const complete = !reassigned

    result = {
      centroids,
      iteration,
      complete
    }

    if (complete) {
      break
    }

    iteration++
  }

  return result
}

module.exports = kmeans
