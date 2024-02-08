import './Table.css'
import { GetData } from '../../services/GetData'

export const Table = () => {
  const data = GetData()
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
    </div>
  )
}
