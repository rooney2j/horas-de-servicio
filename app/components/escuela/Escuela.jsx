import React from 'react'

function Escuela() {
    return (
        <div className="flex w-[70%] flex-col items-center justify-center">
            <div className='flex justify-between w-1/2'>
            <h2 className="text-3xl">Escuelas</h2>
            <button className='h-10 w-10 bg-blue-500 rounded-full'>+</button>
            </div>

            <table className="table-auto border border-spacing-2 mt-4 w-1/2">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Título</th>
                        <th className="border px-4 py-2">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border px-4 py-2">Programación</td>
                        <td className="flex justify-center px-4 py-2">
                            <button className="bg-blue-500 text-white px-4 py-1 rounded">Editar</button>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>

    )
}

export default Escuela
