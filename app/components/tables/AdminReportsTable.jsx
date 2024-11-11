'use client'

import React, { useState, useEffect } from 'react';

import DataTable from 'react-data-table-component';
import dayjs from 'dayjs';
import FilterInput from './FilterInput';

import axios from 'axios';
import { CONTROLLER_TOKEN } from './tokens';

// Función para formatear la fecha al estilo dd/MM/YYYY
const formatDate = (date) => {
    let fecha = dayjs(date);
    return fecha.format('DD-MMM-YYYY');
};

const columns = (getCategoryName) => [
    {
        name: 'Id',
        selector: row => row.id,
        width: '5%',
    },
    {
        name: 'Nombre del estudiante',
        selector: row => row.student.name,
        sortable: true,
        width: '20%',
        wrap: true,
    },
    {
        name: 'Email',
        selector: row => row.student.email,
        sortable: true,
        center: true,
        width: '15%',
    },
    {
        name: 'Nombre del servicio',
        selector: row => getCategoryName(row.category_id),
        sortable: true,
        width: '20%',
        wrap: true, 
    },
    {
        name: 'Horas reportadas',
        selector: row => row.amount_reported,
        sortable: true,
        center: true,
        width: '10%',
        wrap: true,
    },
    {
        name: 'Fecha',
        selector: row => formatDate(dayjs(row.updated_at)),
        sortable: true,
        center: true,
        width: '15%',
    },
    {
        name: 'Acciones',
        center: true,
        width: '15%',
        cell: row => (
            <div className='flex gap-1'>
                <button type='button' className='p-1 bg-blue-500 rounded-md'
                    /* onClick={() => handleView(row)} */
                    title='Ver'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>


                </button>

                <button type='button' className='p-1 bg-green-500 rounded-md'
                    title='Revisar'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
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

export default function AdminReportsTable() {
    // Simulación de registros para el DataTable
    const [services, setServices] = useState([]);
    const [categories, setCategories] = useState([])

    // Filtrado
    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);  // Permite regresar a la primera página
    const [isActiveSearchButton, setIsActiveSearchButton] = useState(false);    // Activar o desactivar el botón de borrado

    const filteredItems = services.filter(item => {
        const matchesName = (item.student.name && item.student.name.toLowerCase().includes(filterText.toLowerCase()));
        return matchesName
    })

    useEffect(() => {
        axios.get('https://funval-api.onrender.com/api/v1/services/', {
            headers: {
                'Authorization': CONTROLLER_TOKEN
            }
        })
            .then((rs) => {
                console.log(rs.data);
                setServices(rs.data);
            })
            .catch(error => console.log(error));

        axios.get('https://funval-api.onrender.com/api/v1/categories/', {
            headers: {
                'Authorization': CONTROLLER_TOKEN
            }
        })
            .then((rs) => {
                console.log(rs.data);
                setCategories(rs.data);
            })
            .catch(error => console.log(error));
    }, [])

    function getCategoryName(id) {
        const category_object = categories.find((category) => category.id === id);

        return category_object ? category_object.name : 'Desconocido';
    }

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
                    columns={columns(getCategoryName)}
                    data={filteredItems}
                    customStyles={customStyles}
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
