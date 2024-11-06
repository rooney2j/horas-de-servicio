import React from 'react'
import { FaSearch } from "react-icons/fa";
export default function Search() {
    return (
        <div className="flex items-center border border-gray-300 rounded-md p-2 w-full max-w-md">
            <FaSearch className="text-gray-500 mr-2" />
            <input
                type="text"
                placeholder="Search"
                className="w-full outline-none"
            />
        </div>
    )
}
