import { useEffect, useState } from 'react'
import { IPeople } from './models'

export const GetData = () => {
  const [data, setData] = useState<IPeople[]>([])

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then((data) => {
        return data.json()
      })
      .then((info) => {
        console.log(info.results)
        setData(info.results)
      })
  }, [])

  return data
}
