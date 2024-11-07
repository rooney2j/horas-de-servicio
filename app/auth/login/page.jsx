"use client"
import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import {FaSpinner} from "react-icons/fa"
export default function Login() {

  const[loading, setLoading] = useState(true)
  
console.log(FaSpinner)
  const handleSubmit = async(e)=>{
     e.preventDefault();

     setLoading(false)

     const formData = new FormData(e.target)
     console.log(formData.get("email"))
     console.log(formData.get("password"))

      const result = await signIn("credentials",{
      email: formData.get("email"),
      password: formData.get("password"),
      redirectTo:"/" 
     }) 
    
     
      setLoading(true)
     
    
  }

  return (
    <div className='h-screen w-screen bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 flex items-center justify-center'>
        <section className='w-full h-full md:w-4/5 md:h-3/5 lg:w-1/2 lg:h-3/5 bg-sky-200 rounded-lg flex flex-wrap '>
          <form onSubmit={handleSubmit} className='w-full bg-blue-500 md:w-1/2 md:bg-sky-200 h-full flex flex-col items-center'>
            <h2 className='hidden md:flex font-bold text-blue-950 text-3xl mt-10'> Iniciar Sesion</h2>
             <div className='flex md:hidden '>
              {loading?
               <img className='mix-blend-multiply' src="https://www.estudiantefunval.org/pluginfile.php/1/theme_moove/logo/1729720886/logo%202023.png" alt="" />
               : 
               <FaSpinner className='text-6xl text-sky-950 animate-spin mt-10'/>
              }
             </div>
            <input name='email' className='h-10 w-4/5 rounded-lg outline-none ps-2 mt-16 font-medium' placeholder='Nombre de Usuario' type="text" />
            <input name='password' className='h-10 w-4/5 rounded-lg outline-none ps-2 mt-16 font-medium' placeholder='Contraseña' type="text" />
            <button type='submit' className='h-9 w-32 rounded-lg bg-sky-500 hover:duration-300 hover:ease-out hover:bg-sky-600 text-white font-medium mt-10 active:duration-300 active:ease-out active:w-28 active:h-8 active:bg-blue-700'>Enviar</button>
          </form>
          <article className='hidden md:flex w-full md:w-1/2 h-full  justify-center items-center rounded-es-[5rem] bg-white'>
            {loading?
            <img src="https://www.estudiantefunval.org/pluginfile.php/1/theme_moove/logo/1729720886/logo%202023.png" alt="" />
              : <FaSpinner className='text-6xl text-sky-600 animate-spin '/>
          }
          </article>
        </section>
    </div>
  )
}
