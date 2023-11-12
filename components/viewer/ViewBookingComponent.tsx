import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
import 'tailwindcss/tailwind.css'


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'Nombres',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Apellidos',
        width: 150,
        editable: true,
    },
    {
        field: 'dateEntry',
        headerName: 'Fecha de Ingreso',
        width: 200,
        editable: true,
    },
    {
        field: 'dateExit',
        headerName: 'Fecha de Salida',
        width: 200,
        editable: true,
    },
    {
        field: 'price',
        headerName: 'Costo total',
        type: "number",
        width: 180,
        editable: true,
    },
    
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataTable() {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid className=''
                rows={rows}
                columns={columns}
                pageSize={5}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
}
