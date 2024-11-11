import React from 'react'

export default function FilterRadioButtons({ filterStatus, handleStatusChange }) {
  return (
    <div className='w-1/2 self-center flex justify-evenly items-baseline'>
            <div className="flex items-center mb-4">
                <input id="default-radio-0" type="radio" value="Todos" name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    checked={filterStatus === "Todos"}
                    onChange={handleStatusChange}
                />
                <label htmlFor="default-radio-0" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Todos</label>
            </div>

            <div className="flex items-center mb-4">
                <input id="default-radio-1" type="radio" value="Aceptado" name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    checked={filterStatus === "Aceptado"}
                    onChange={handleStatusChange}
                />
                <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Aceptados</label>
            </div>

            <div className="flex items-center">
                <input id="default-radio-2" type="radio" value="Pendiente" name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    checked={filterStatus === "Pendiente"}
                    onChange={handleStatusChange}
                />
                <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pendientes</label>
            </div>

            <div className="flex items-center">
                <input id="default-radio-3" type="radio" value="Rechazado" name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    checked={filterStatus === "Rechazado"}
                    onChange={handleStatusChange}
                />
                <label htmlFor="default-radio-3" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Rechazados</label>
            </div>
        </div>
  )
}
