import { useEffect, useState } from 'react'
import { IPeople } from './models'
import axios from 'axios'

export const GetData = () => {
  const [data, setData] = useState<IPeople[]>([])

  useEffect(() => {
    axios
      .get('https://swapi.dev/api/people?page=3')
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
