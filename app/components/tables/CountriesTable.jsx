'use client'

import React, { useState, useEffect } from 'react';

import DataTable from 'react-data-table-component';
import dayjs from 'dayjs';
import FilterInput from './FilterInput';

import axios from 'axios';
import { ADMIN_TOKEN } from './tokens';

// Función para formatear la fecha al estilo dd/MM/YYYY
const formatDate = (date) => {
    let fecha = dayjs(date);
    return fecha.format('DD-MMM-YYYY');
};

const columns = [
    {
        name: 'Id',
        selector: row => row.id,
        width: '10%',
    },
    {
        name: 'Nombre',
        selector: row => row.name,
        width: '25%',
        wrap: true,
    },
    {
        name: 'Fecha de creación',
        selector: row => formatDate(dayjs(row.create_at)),
        width: '25%',
    },
    {
        name: 'Última modificación',
        selector: row => formatDate(dayjs(row.updated_at)),
        width: '25%',
    },
    {
        name: 'Acciones',
        center: true,
        width: '15%',
        cell: row => (
            <div className='flex gap-1'>
                <button type='button' className='p-1 bg-blue-500 rounded-md'
                    title='Modificar'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="white" className="size-4">
                        <path d="M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z" />
                        <path d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z" />
                    </svg>
                </button>
            </div>
        )
    }
]

// Color de los títulos de las columnas
const customStyles = {
    headCells: {
        style: {
            backgroundColor: '#5d5d68',
            color: 'white',
        },
    },
};

// Idioma de la paginación
const paginationOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    noRowsPerPage: false, // Desactiva la selección de filas por página si lo prefieres
    selectAllRowsItem: true, // Opción para seleccionar todas las filas (si lo deseas)
    selectAllRowsItemText: 'Todos', // Texto para la opción de seleccionar todas las filas
};

export default function CountriesTable() {
    // Simulación de registros para el DataTable
    const [countries, setCountries] = useState([]);

    // Filtrado
    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);  // Permite regresar a la primera página
    const [isActiveSearchButton, setIsActiveSearchButton] = useState(false);    // Activar o desactivar el botón de borrado

    const filteredItems = countries.filter(item => {
        const matchesName = (item.name && item.name.toLowerCase().includes(filterText.toLowerCase()));
        return matchesName
    })

    useEffect(() => {
        axios.get('https://funval-api.onrender.com/api/v1/country/', {
            headers: {
                'Authorization': ADMIN_TOKEN
            }
        })
            .then((rs) => {
                console.log(rs.data);
                setCountries(rs.data);
            })
            .catch(error => console.log(error));
    }, [])

    const handleClear = () => {
        setFilterText('');
        setResetPaginationToggle(!resetPaginationToggle);
        setIsActiveSearchButton(false);
    };

    const handleChange = (e) => {
        if (e.target.value.length > 0) {
            setFilterText(e.target.value);
            setIsActiveSearchButton(true);
        } else {
            handleClear();
        }
    }

    return (
        <>
            <div className='flex flex-col'>
                {/* Componente para el filtro por nombre a través de un input */}
                <FilterInput
                    handleChange={handleChange}
                    filterText={filterText}
                    isActiveSearchButton={isActiveSearchButton}
                    handleClear={handleClear}
                />

                {/* DataTable */}
                <DataTable
                    columns={columns}
                    data={filteredItems}
                    /* customStyles={customStyles} */
                    pagination
                    paginationResetDefaultPage={resetPaginationToggle}
                    paginationComponentOptions={paginationOptions}
                    noDataComponent='No hay datos para mostrar'
                    responsive
                />
            </div>
        </>
    )
}
