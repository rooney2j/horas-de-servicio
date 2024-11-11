import React from 'react'
import Search from '../search/Search'
import UserTable from '../search/UserTable'
import AddUserButton from '../search/AddUserButton'
export default function MainSearch() {
    return (
        <main className="flex-1 p-6">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-blue-600">USUARIOS</h1>
                <AddUserButton />
            </div>
            <Search/>
            <div className="mt-4">
                <UserTable />
            </div>
        </main>
    )
}
