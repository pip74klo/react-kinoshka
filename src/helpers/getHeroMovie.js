
export const getHeroMovie = (data) => {
  if (!data) return
  const randomIndex = Math.floor(Math.random() * data.length)

  return data[randomIndex]
}