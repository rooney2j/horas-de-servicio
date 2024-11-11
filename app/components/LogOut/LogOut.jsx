import React from 'react'

export default async function LogOut() {
  return (
    <form className="absolute top-4 right-4" action={async () => {
        'use server';
        await signOut();
      }}>

        <ul>
          <li className="h-16 w-16 bg-gradient-to-r from-sky-600 via-sky-400 to-blue-300 text-black rounded-full flex items-center justify-center">
               <button type="submit"><LogOut/></button>
          </li>
        </ul>
      </form>
  )
}
