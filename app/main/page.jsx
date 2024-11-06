'use client'
import React, { useState } from 'react'
import Aside from '../components/Aside/page'
import Escuela from '../components/escuela/Escuela';

function page() {
    const [mostrarEscuela, setMostrarEscuela] = useState(false);
    return (
        <div className='flex h-screen gap-2'>

            <Aside
                setMostrarEscuela={setMostrarEscuela}
            />
            {mostrarEscuela && <Escuela />}

        </div>
    )
}

export default page
