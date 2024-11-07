'use client'

import React, { useState, useEffect } from 'react';

import tableDataItems from '@/public/data-examples/sampleReports';
import DataTable from 'react-data-table-component';
import dayjs from 'dayjs';

import { faker } from '@faker-js/faker';

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
]

const conditionalRowStyles = [
    {
        when: row => row.estado_reporte === 'Aceptado',
        style: {
			backgroundColor: '#53bb50',
			color: 'white',
			'&:hover': {
				cursor: 'pointer',
			},
		},
    },
    {
        when: row => row.estado_reporte === 'Pendiente',
        style: {
			backgroundColor: '#fa9514',
			color: 'white',
			'&:hover': {
				cursor: 'pointer',
			},
		},
    },
    {
        when: row => row.estado_reporte === 'Rechazado',
        style: {
			backgroundColor: '#ea412a',
			color: 'white',
			'&:hover': {
				cursor: 'pointer',
			},
		},
    }
];

export default function AdminUsersTable() {
    const [fakeReports, setFakeReports] = useState([])

    useEffect(() => {
        // Generar n datos falsos para la tabla
        const generatedFakeReports = createReports(100);

        setFakeReports(generatedFakeReports);
    }, [])

    return (
        <DataTable
            columns={columns}
            data={fakeReports}
            conditionalRowStyles={conditionalRowStyles}
            pagination
        />
    )
}
