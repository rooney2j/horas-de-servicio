'use client'

import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

import { CONTROLLER_TOKEN } from '../components/tables/tokens';

const DataReferenceContext = createContext();

export function DataReferenceProvider({ children }) {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoriesResponse = await axios.get('https://funval-api.onrender.com/api/v1/categories/', {
                    headers: { 'Authorization': CONTROLLER_TOKEN }
                });
                setCategories(categoriesResponse.data);
            } catch (error) {
                console.error("Error fetching data references:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <DataReferenceContext.Provider value={{ categories, loading }}>
            {children}
        </DataReferenceContext.Provider>
    );
};

export default DataReferenceContext;