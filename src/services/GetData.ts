import { useEffect, useState } from 'react'
import { IPeople } from './models'
import axios from 'axios'

export const GetData = (query: string, pageNumber: number) => {
  const [loading, setLoaing] = useState(true)
  const [error, setError] = useState(false)
  const [data, setData] = useState<IPeople[]>([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setData([])
  }, [query])

  useEffect(() => {
    setLoaing(true)
    setError(false)

    const controller = new AbortController()

    axios
      .get('https://swapi.dev/api/people/', {
        params: {
          search: query,
          page: pageNumber
        },
        signal: controller.signal
      })
      .then((response) => {
        setData((prevData) => {
          return [...prevData, ...response.data.results]
        })
        setHasMore(response.data.results.length > 0)
        setLoaing(false)
      })
      .catch((e) => {
        if (axios.AxiosError) return
        if (axios.isCancel(e)) return
        setError(true)
      })
    return () => controller.abort()
  }, [query, pageNumber])

  return { loading, error, data, hasMore }
}
