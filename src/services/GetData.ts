import { useEffect, useState } from 'react'
import { IPeople } from './models'
import axios from 'axios'

export const GetData = () => {
  const [data, setData] = useState<IPeople[]>([])

  useEffect(() => {
    // fetch('https://swapi.dev/api/people/')
    //   .then((data) => {
    //     return data.json()
    //   })
    //   .then((info) => {
    //     console.log(info.results)
    //     setData(info.results)
    //   })
    axios
      .get('https://swapi.dev/api/people/')
      .then((response) => {
        console.log(response.data)
        return response.data
      })
      .then((info) => {
        console.log(info.results)
        setData(info.results)
      })
  }, [])

  return data
}
