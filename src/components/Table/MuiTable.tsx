// import {
//   TableContainer,
//   Table,
//   TableHead,
//   TableBody,
//   TableRow,
//   TableCell,
//   Paper
// } from '@mui/material'
// import React, { useEffect, useState } from 'react'
// import { IPeople } from '../../services/models'
// import { GetData } from '../../services/GetData'

// import { MaterialReactTable, MRT_ColumnDef } from 'material-react-table'

// export const columns: MRT_ColumnDef<IPeople>[] = [
//   {
//     header: 'Name',
//     accessorKey: 'name',
//     enableSorting: false,
//     enableColumnFilter: false
//   },
//   {
//     header: 'Gender',
//     accessorKey: 'gender'
//   },
//   {
//     header: 'Mass',
//     accessorKey: 'mass'
//   },
//   {
//     header: 'Eye color',
//     accessorKey: 'eye_color'
//   }
// ]

// export const MuiTable = () => {
//   const [data, setData] = useState<IPeople[]>([])

//   useEffect(() => {
//     fetch('https://swapi.dev/api/people/')
//       .then((data) => {
//         return data.json()
//       })
//       .then((info) => {
//         console.log(info.results)
//         setData(info.results)
//       })
//   }, [])

//   const data = GetData()

//   return (
//     <MaterialReactTable
//       columns={columns}
//       data={data}
//       enableRowSelection
//       initialState={{ density: 'compact' }}
//     />
//   )
// }

export {}
