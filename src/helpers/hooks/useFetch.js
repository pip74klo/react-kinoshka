import { useEffect, useState } from "react"

export const useFetch = (fetchFunction, type, page) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        const data = await fetchFunction(type, page)
        setData(data)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [fetchFunction, type, page])

  return { data, error, loading }
}



