import React from 'react'

export default function UserModal() {
  return (
    <>
      <div className='h-screen flex place-content-center items-center'>
        <label className="btn btn-primary rounded-full py-6 px-3" htmlFor="modal-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </label>

        <input className="modal-state" id="modal-3" type="checkbox" />
        <div className="modal">
          <label className="modal-overlay"></label>
          <div className="modal-content bg-white flex flex-col gap-5 w-80">
            <label htmlFor="modal-3" className="btn btn-sm btn-circle hover:bg-[#2E7EDF] hover:text-white text-black btn-ghost absolute right-2 top-2">✕</label>
            <h2 className="text-lg text-black font-semibold text-center">NUEVO REGISTRO</h2>
            <div className="form-group">
              <div className="form-control relative w-full">
                <input type="text" className="input input-sm max-w-full border-2 text-base text-black bg-white" placeholder="Nombre" />
              </div>
              <div className="form-control relative w-full">
                <input type="text" className="input input-sm max-w-full border-2 text-base text-black bg-white" placeholder="Segundo Nombre" />
              </div>

              <div className="form-control relative w-full">
                <input type="text" className="input input-sm max-w-full border-2 text-base text-black bg-white" placeholder="Primer Apellido" />
              </div>
              <div className="form-control relative w-full">
                <input type="text" className="input input-sm max-w-full border-2 text-base text-black bg-white" placeholder="Segundo Apellido" />
              </div>
              <select className="select h-8 bg-white text-black">
                <option value="" disabled>
                  --ROL--
                </option>
                <option value={'Alumno'}>Alumno</option>
                <option value={'Controller'}>Controller</option>
                <option value={'Reclutador'}>Reclutador</option>
              </select>
              <div className="form-control relative w-full">
                <input type="email" className="input input-sm max-w-full border-2 text-base text-black bg-white" placeholder="Correo" />

                <span className="absolute inset-y-0 right-4 inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-content3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </span>
              </div>
              <div className="form-control relative w-full">
                <input type="password" className="input input-sm max-w-full border-2 text-base text-black bg-white" placeholder="Contraseña" />
                <span className="absolute inset-y-0 right-4 inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-content3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </span>

              </div>
              <div className="form-control relative w-full">
                <input type="password" className="input input-sm max-w-full border-2 text-base text-black bg-white" placeholder="Repetir Contraseña" />
                <span className="absolute inset-y-0 right-4 inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-content3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </span>

              </div>
              <select className="select h-8 bg-white text-black">
                <option value="" disabled>
                  --ESCUELAS--
                </option>
                <option value={'Desarrollo de Software'}>Desarrollo de Software</option>
                <option value={'Inglés'}>Inglés</option>
                <option value={'Técnica'}>Técnica</option>
              </select>

              <div className="form-field pt-2">
                <div className="form-control justify-center">
                  <button type="button" className="btn bg-[#2E7EDF] w-[60%] h-8">Agregar</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}
