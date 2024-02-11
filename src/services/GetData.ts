import { useEffect, useState } from 'react'
import { IPeople } from './models'
import axios from 'axios'

export const GetData = (query: string, pageNumber: number) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [data, setData] = useState<IPeople[]>([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setData([])
  }, [query])

  useEffect(() => {
    setLoading(true)
    setError(false)

    const abortController = new AbortController()
    const { signal } = abortController

    // axios
    //   .get('https://swapi.dev/api/people/', {
    //     params: {
    //       search: query,
    //       page: pageNumber
    //     },
    //     signal: controller.signal
    //   })
    //   .then((response) => {
    //     setData((prevData) => {
    //       return [...prevData, ...response.data.results]
    //     })
    //     setHasMore(response.data.results.length > 0)
    //     setLoading(false)
    //   })
    //   .catch((e) => {
    //     if (axios.AxiosError) return
    //     if (axios.isCancel(e)) return
    //     setError(true)
    //   })
    // return () => controller.abort()

    const getData = async () => {
      try {
        setLoading(true)
        setError(false)
        const response = await axios.get('https://swapi.dev/api/people/', {
          params: {
            search: query,
            page: pageNumber
          },
          signal: signal
        })
        setData((prevData) => {
          return [...prevData, ...response.data.results]
        })
        setHasMore(response.data.results.length === 10)
        setLoading(false)
      } catch (error) {
        if (!signal?.aborted) console.log(error)
        if (axios.isCancel(error)) return
        setError(true)
      }
    }

    getData()

    return () => {
      abortController.abort()
    }
  }, [query, pageNumber])

  return { loading, error, data, hasMore }
}
