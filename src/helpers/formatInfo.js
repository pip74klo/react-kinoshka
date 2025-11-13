export const formatInfo = (arr, type) => {
  if (!arr) return

  return arr.map(item => item[type]).join(', ')
}