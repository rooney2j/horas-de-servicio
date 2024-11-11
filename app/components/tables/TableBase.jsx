'use client'

import React, { useState, useEffect, useRef, useMemo } from 'react';

import tableDataItems from '@/public/data-examples/sampleReports';
import DataTable from 'react-data-table-component';
import dayjs from 'dayjs';

import { faker } from '@faker-js/faker';

import FilterRadioButtons from './FilterRadioButtons';
import FilterInput from './FilterInput';
import axios from 'axios';

// Función para formatear la fecha al estilo dd/MM/YYYY
const formatDate = (date) => {
    let fecha = dayjs(date);
    return fecha.format('DD-MMM-YYYY');
};

let fakeReportIdCounter = 1;

// Plantilla para la generación de datos falsos para la tabla
const createReport = () => ({
    id: fakeReportIdCounter++,
    nombre_alumno: faker.person.fullName(),
    estado_reporte: faker.helpers.arrayElement(["Aceptado", "Pendiente", "Rechazado"]), // Valor aleatorio entre tres opciones
    fecha_envio: formatDate(dayjs(faker.date.past())),
    cantidad_horas: faker.number.int({ min: 1, max: 20 }),
});

// Función para generar datos falsos para la tabla
const createReports = (numberOfReports = 5) => Array.from({ length: numberOfReports }, createReport);

const columns = [
    {
        name: 'NOMBRE ALUMNO',
        selector: row => row.nombre_alumno,
        sortable: true,
    },
    {
        name: 'ESTADO DEL REPORTE',
        selector: row => row.estado_reporte,
        sortable: true,
        center: true
    },
    {
        name: 'FECHA DE ENVÍO',
        selector: row => row.fecha_envio,
        sortable: true,
    },
    {
        name: 'CANTIDAD DE HORAS',
        selector: row => row.cantidad_horas,
        sortable: false,
        center: true,
    },
    {
        name: 'ACCIONES',
        cell: row => (
            <div className='flex gap-1'>
                <button type='button' className='p-1 bg-blue-500 rounded-md'
                    /* onClick={() => handleView(row)} */
                    title='Ver'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="white" className="size-4">
                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                        <path fillRule="evenodd" d="M1.38 8.28a.87.87 0 0 1 0-.566 7.003 7.003 0 0 1 13.238.006.87.87 0 0 1 0 .566A7.003 7.003 0 0 1 1.379 8.28ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clipRule="evenodd" />
                    </svg>
                </button>

                <button type='button' className='p-1 bg-green-500 rounded-md'
                    title='Editar'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="white" className="size-4">
                        <path d="M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z" />
                        <path d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z" />
                    </svg>
                </button>

                <button type='button' className='p-1 bg-red-800 rounded-md'
                    title='Eliminar'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="white" className="size-4">
                        <path fillRule="evenodd" d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        )
    }
]

const conditionalRowStyles = [
    {
        when: row => row.estado_reporte === 'Aceptado',
        style: {
            backgroundColor: '#d3f09c',
            color: 'black',
            '&:hover': {
                cursor: 'pointer',
            },
        },
    },
    {
        when: row => row.estado_reporte === 'Pendiente',
        style: {
            backgroundColor: '#f9f394',
            color: 'black',
            '&:hover': {
                cursor: 'pointer',
            },
        },
    },
    {
        when: row => row.estado_reporte === 'Rechazado',
        style: {
            backgroundColor: '#f69f8e',
            color: 'black',
            '&:hover': {
                cursor: 'pointer',
            },
        },
    }
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

export default function AdminUsersTable() {
    // Simulación de registros para el DataTable
    const [fakeReports, setFakeReports] = useState([]);

    // Filtrado
    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);  // Permite regresar a la primera página
    const [isActiveSearchButton, setIsActiveSearchButton] = useState(false);    // Activar o desactivar el botón de borrado
    const [filterStatus, setFilterStatus] = useState('Todos');

    const filteredItems = fakeReports.filter(item => {
        const matchesName = item.nombre_alumno && item.nombre_alumno.toLowerCase().includes(filterText.toLowerCase());
        const matchesStatus = filterStatus ? item.estado_reporte === filterStatus : true;

        if (filterStatus === 'Todos') {
            return matchesName
        }
        return matchesName && matchesStatus;
    })

    useEffect(() => {
        // Generar n datos falsos para la tabla
        const generatedFakeReports = createReports(100);

        setFakeReports(generatedFakeReports);
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
                    selectableRows
                    responsive
                />
            </div>
        </>
    )
}
