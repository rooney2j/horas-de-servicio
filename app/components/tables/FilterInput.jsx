import React from 'react'

export default function FilterInput({ handleChange, filterText, isActiveSearchButton, handleClear }) {
    return (
        <div className='flex flex-wrap justify-center items-baseline'>
            <div className="w-3/5 mb-2">
                <div className="relative flex h-8">
                    <input type="text" id="search-input"
                        name="searchInput"
                        className="bg-slate-300 border-[3px] border-gray-300/80 text-gray-900 rounded-lg w-full h-full px-4 py-2 focus:outline-none"
                        placeholder="Buscar por nombre..."
                        onChange={handleChange}
                        value={filterText}
                    />

                    <button type="button"
                        className={`flex items-center justify-center px-3 text-white rounded-e-md absolute right-0 h-full w-1/12 ${isActiveSearchButton ? 'bg-black' : ' bg-slate-100'}`}
                        disabled={!isActiveSearchButton}
                        onClick={handleClear}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
