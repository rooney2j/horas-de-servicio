
"use client"
import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import dayjs from 'dayjs';
import FilterRadioButtons from './FilterRadioButtons';
import FilterInput from './FilterInput';

const API_URL = "https://funval-api.onrender.com/api/v1/users/";

const columns = [
    { name: 'ID', selector: row => row.id, sortable: true },
    { name: 'Nombre', selector: row => `${row.f_name} ${row.s_name} ${row.f_lastname} ${row.s_lastname}`, sortable: true },
    { name: 'Email', selector: row => row.email, sortable: true },
    { name: 'Rol', selector: row => row.role.name, sortable: true },
    { name: 'Escuelas', selector: row => row.schools.join(', '), sortable: true }
];

export default function AdminUsersTable({token}) {
    const [users, setUsers] = useState([]);
    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const [isActiveSearchButton, setIsActiveSearchButton] = useState(false);
    const [filterStatus, setFilterStatus] = useState('Todos');

    const fetchUsers = async () => {
        try {
            const response = await axios.get(API_URL, {
                headers: {
                    'Authorization': `${token}`
                }
            });
            setUsers(response.data);
        } catch (error) {
            console.error("Error al obtener los usuarios:", error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const filteredItems = users.filter(item => {
        const matchesName = item.f_name && item.f_name.toLowerCase().includes(filterText.toLowerCase());
        const matchesStatus = filterStatus ? item.role.name === filterStatus : true;

        if (filterStatus === 'Todos') {
            return matchesName;
        }
        return matchesName && matchesStatus;
    });


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

    };

    const handleStatusChange = (event) => {
        setFilterStatus(event.target.value);
        setResetPaginationToggle(!resetPaginationToggle);
    };

    return (
        <div className='flex flex-col mx-auto mt-5'>
            <FilterRadioButtons
                filterStatus={filterStatus}
                handleStatusChange={handleStatusChange}
            />
            <FilterInput
                handleChange={handleChange}
                filterText={filterText}
                isActiveSearchButton={isActiveSearchButton}
                handleClear={handleClear}
            />
            <DataTable
                columns={columns}
                data={filteredItems}
                pagination
                paginationResetDefaultPage={resetPaginationToggle}
                selectableRows
                responsive
                highlightOnHover
            />
        </div>
    );
}

   


