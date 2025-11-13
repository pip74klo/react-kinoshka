export const formatStaff = (arr, type) => {
  if (!arr) return
  const filtered = arr.slice(0, 20).filter(item => {
    if (item.professionKey === type && item.nameRu) {
      return item
    }
  })

  return filtered.map(item => item.nameRu).join(', ')
}