import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper
} from '@mui/material'

import { MaterialReactTable, MRT_ColumnDef } from 'material-react-table'

import React, { useEffect, useState } from 'react'
import { IPeople } from '../../services/models'
import { GetData } from '../../services/GetData'

export const columns: MRT_ColumnDef<IPeople>[] = [
  {
    header: 'Name',
    accessorKey: 'name',
    // отключаем сортировку и фильтрацию
    enableSorting: false,
    enableColumnFilter: false
  },
  {
    header: 'Gender',
    accessorKey: 'gender'
  },
  {
    header: 'Mass',
    accessorKey: 'mass'
  },
  {
    header: 'Eye color',
    accessorKey: 'eye_color'
  }
]

export const MuiTable = () => {
  // const [data, setData] = useState<IPeople[]>([])

  // useEffect(() => {
  //   fetch('https://swapi.dev/api/people/')
  //     .then((data) => {
  //       return data.json()
  //     })
  //     .then((info) => {
  //       console.log(info.results)
  //       setData(info.results)
  //     })
  // }, [])

  const data = GetData()

  return (
    // <TableContainer component={Paper}>
    //   <Table aria-label='simple table'>
    //     <TableHead>
    //       <TableRow>
    //         <TableCell>Name</TableCell>
    //         <TableCell>Gender</TableCell>
    //         <TableCell>Mass</TableCell>
    //         <TableCell>Eye color</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {data.map((row) => (
    //         <TableRow
    //           key={row.name}
    //           sx={{ '&:last-child, &:last-child th': { border: 0 } }}
    //         >
    //           <TableCell>{row.name}</TableCell>
    //           <TableCell>{row.gender}</TableCell>
    //           <TableCell>{row.mass}</TableCell>
    //           <TableCell>{row.eye_color}</TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>

    <MaterialReactTable
      columns={columns}
      data={data}
      enableRowSelection
      initialState={{ density: 'compact' }}
    />
  )
}
