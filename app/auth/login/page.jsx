import React from 'react'
import { cookies } from 'next/headers'
export default function Login() {
  return (
    <div className='h-screen w-screen bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 flex items-center justify-center'>
        <section className='w-1/2 h-3/5 bg-sky-200 rounded-lg flex '>
          <article className='w-1/2 bg-sky-200 h-full flex flex-col items-center'>
            <h2 className='font-bold text-blue-950 text-3xl mt-10'> Iniciar Sesion</h2>
            <input className='h-10 w-4/5 rounded-lg outline-none ps-2 mt-16 font-medium' placeholder='Nombre de Usuario' type="text" />
            <input className='h-10 w-4/5 rounded-lg outline-none ps-2 mt-16 font-medium' placeholder='Contraseña' type="text" />
            <button className='h-9 w-32 rounded-lg bg-sky-500 hover:duration-300 hover:ease-out hover:bg-sky-600 text-white font-medium mt-10 active:duration-300 active:ease-out active:w-28 active:h-8 active:bg-blue-700'>Enviar</button>
          </article>
          <article className='w-1/2 h-full flex justify-center items-center rounded-es-[5rem] bg-white'>
            <img src="https://www.estudiantefunval.org/pluginfile.php/1/theme_moove/logo/1729720886/logo%202023.png" alt="" />
          </article>
        </section>
    </div>
  )
}
