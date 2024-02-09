import './Table.css'
import { GetData } from '../../services/GetData'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { IPeople } from '../../services/models'

export const Table = () => {
  const [pageIndex, setPageIndex] = useState(1)

  const [data, setData] = useState<IPeople[]>([])

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people?page=${pageIndex}`)
      .then((response) => {
        console.log(response.data)
        return response.data
      })
      .then((info) => {
        console.log(info.results)
        setData(info.results)
      })
  }, [pageIndex])

  return (
    <div className='mainContainer'>
      <table>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Mass</th>
          <th>Eye color</th>
        </tr>
        <tbody>
          {data.map((el) => (
            <tr>
              <td>{el.name}</td>
              <td>{el.gender}</td>
              <td>{el.mass}</td>
              <td>{el.eye_color}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        style={{ width: '20px', height: '20px' }}
        onClick={() => {
          setPageIndex((index) => index + 1)
        }}
      ></button>
    </div>
  )
}
