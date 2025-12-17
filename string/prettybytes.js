function prettybytes (bytes) {
  if (bytes === 0) return '0 B'
  if (bytes < 0) return '0 B'
  
  const units = ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']
  const k = 1024
  const i = Math.min(Math.floor(Math.log(bytes) / Math.log(k)), units.length - 1)
  
  const value = bytes / Math.pow(k, i)
  const formattedValue = i === 0 ? value : Math.round(value * 100) / 100
  
  return `${formattedValue} ${units[i]}`
}

module.exports = prettybytes
