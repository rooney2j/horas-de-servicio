'use client'

import React, { useState, useEffect } from 'react';

import DataTable from 'react-data-table-component';
import dayjs from 'dayjs';
import FilterInput from './FilterInput';
import FilterRadioButtons from './FilterRadioButtons';

import axios from 'axios';
import {STUDENT_TOKEN}  from './tokens';

// Función para formatear la fecha al estilo dd/MM/YYYY
const formatDate = (date) => {
    let fecha = dayjs(date);
    return fecha.format('DD-MMM-YYYY');
};

function formatStatus(report_status) {
    if (report_status === 0) {
        return 'Rechazado';
    }

    if (report_status === 1) {
        return 'Aprobado';
    }

    return 'Pendiente';
}

function formatComment(comentario) {
    if(comentario) {
        return (
            <p>{comentario}</p>
        );
    } else {
        return (
            <p className='text-red-800 text-center'>No hay comentarios</p>
        );
    }
}

const columns = [
    {
        name: 'Id',
        selector: row => row.id,
        width: '5%',
    },
    {
        name: 'Fecha de creación',
        selector: row => formatDate(dayjs(row.create_at)),
        sortable: true,
        width: '20%',
    },
    {
        name: 'Descripción',
        selector: row => row.description,
        width: '25%',
    },
    {
        name: 'Estado',
        selector: row => formatStatus(row.status),
        sortable: true,
        width: '10%',
    },
    {
        name: 'Comentario',
        selector: row => row.comment,
        center: true,
        width: '30%',
        cell: row => formatComment(row.comment),
    },
    {
        name: 'Acciones',
        center: true,
        width: '10%',
        cell: row => (
            <div className='flex gap-1'>
                <button type='button' className='p-1 bg-green-500 rounded-md'
                    /* onClick={() => handleView(row)} */
                    title='Editar'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                </button>
            </div>
        )
    }
]

const conditionalRowStyles = [
    {
        when: row => row.status === 1,
        style: {
            backgroundColor: '#d3f09c', // verde
            color: 'black',
            '&:hover': {
                cursor: 'pointer',
            },
        },
    },
    {
        when: row => row.status === null,
        style: {
            backgroundColor: '#f9f394', // amarillo
            color: 'black',
            '&:hover': {
                cursor: 'pointer',
            },
        },
    },
    {
        when: row => row.status === 0,
        style: {
            backgroundColor: '#f69f8e', // rojo
            color: 'black',
            '&:hover': {
                cursor: 'pointer',
            },
        },
    },
];

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

export default function StudentReportsTable() {
    const [services, setServices] = useState([]);

    // Filtrado
    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);  // Permite regresar a la primera página
    const [isActiveSearchButton, setIsActiveSearchButton] = useState(false);    // Activar o desactivar el botón de borrado
    const [filterStatus, setFilterStatus] = useState('Todos');

    const filteredItems = services.filter(item => {
        const matchesName = (item.create_at && formatDate(dayjs(item.create_at)).toLowerCase().includes(filterText.toLowerCase()));
        const matchesStatus = filterStatus ? formatStatus(item.status) === filterStatus : true;

        if (filterStatus === 'Todos') {
            return matchesName
        }

        return matchesName && matchesStatus;
    })

    useEffect(() => {
        axios.get('https://funval-api.onrender.com/api/v1/services/', {
            headers: {
                'Authorization': STUDENT_TOKEN
            }
        })
            .then((rs) => {
                console.log(rs.data);
                setServices(rs.data);
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

    const handleStatusChange = (event) => {
        setFilterStatus(event.target.value);
        setResetPaginationToggle(!resetPaginationToggle); // Reiniciar paginación al aplicar el filtro
    };

    return (
        <>
            <div className='flex flex-col'>
                {/* Componente para las opciones de filtrado a través de radio buttons */}
                <FilterRadioButtons
                    filterStatus={filterStatus}
                    handleStatusChange={handleStatusChange}
                />

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
                    conditionalRowStyles={conditionalRowStyles}
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
