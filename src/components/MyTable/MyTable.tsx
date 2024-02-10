import { ChangeEvent, useCallback, useRef, useState } from 'react'
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Input
} from '@mui/material'
import { GetData } from '../../services/GetData'

export const MyTable = () => {
  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(1)

  const { data, hasMore, loading, error } = GetData(query, pageNumber)

  const observer = useRef<IntersectionObserver>()
  const lastCharacterRef = useCallback(
    (node: HTMLTableRowElement) => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1)
        }
      })
      if (node) observer.current.observe(node)
      // console.log(node)
    },
    [loading, hasMore]
  )

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
    setPageNumber(1)
  }

  return (
    <div className='App'>
      <TableContainer>
        <Input type='text' value={query} onChange={handleSearch}></Input>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Mass</TableCell>
              <TableCell>Eye color</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((el, index) => {
              if (data.length === index + 1) {
                return (
                  <TableRow ref={lastCharacterRef} key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{el.name}</TableCell>
                    <TableCell>{el.gender}</TableCell>
                    <TableCell>{el.mass}</TableCell>
                    <TableCell>{el.eye_color}</TableCell>
                  </TableRow>
                )
              } else {
                return (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{el.name}</TableCell>
                    <TableCell>{el.gender}</TableCell>
                    <TableCell>{el.mass}</TableCell>
                    <TableCell>{el.eye_color}</TableCell>
                  </TableRow>
                )
              }
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <div>{loading && 'Loading...'}</div>
      <div>{error && 'Error'}</div>
    </div>
  )
}
