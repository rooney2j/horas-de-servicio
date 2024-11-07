'use client'
import { newUser } from "@/utils/newUser";
import { useState } from "react";

export const UserModal = () => {

  const [formData, setFormData] = useState({
    f_name: "",
    s_name: "",
    f_lastname: "",
    s_lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    school: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar si las contraseñas son las mismas
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }
    // Llamar newUser
    newUser(formData);
  };

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
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="form-control relative w-full">
                  <input type="text" name="f_name" className="input input-sm max-w-full border-2 text-base text-black bg-white" placeholder="Primer Nombre" value={formData.f_name} onChange={handleInputChange} />
                </div>
                <div className="form-control relative w-full">
                  <input type="text" name="s_name" className="input input-sm max-w-full border-2 text-base text-black bg-white" placeholder="Segundo Nombre" value={formData.s_name} onChange={handleInputChange} />
                </div>

                <div className="form-control relative w-full">
                  <input type="text" name="f_lastname" className="input input-sm max-w-full border-2 text-base text-black bg-white" placeholder="Primer Apellido" value={formData.f_lastname} onChange={handleInputChange} />
                </div>
                <div className="form-control relative w-full">
                  <input type="text" name="s_lastname" className="input input-sm max-w-full border-2 text-base text-black bg-white" placeholder="Segundo Apellido" value={formData.s_lastname} onChange={handleInputChange} />
                </div>
                <select name="role" className="select h-8 bg-white text-black" value={formData.role} onChange={handleInputChange}>
                  <option value="" disabled>
                    --ROL--
                  </option>
                  <option value={'Student'}>Alumno</option>
                  <option value={'Controller'}>Controller</option>
                  <option value={'Recruiter'}>Reclutador</option>
                </select>
                <div className="form-control relative w-full">
                  <input type="email" name="email" className="input input-sm max-w-full border-2 text-base text-black bg-white" placeholder="Correo" value={formData.email} onChange={handleInputChange} />

                  <span className="absolute inset-y-0 right-4 inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-content3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </span>
                </div>
                <div className="form-control relative w-full">
                  <input type="password" name="password" className="input input-sm max-w-full border-2 text-base text-black bg-white" placeholder="Contraseña" value={formData.password} onChange={handleInputChange} />
                  <span className="absolute inset-y-0 right-4 inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-content3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </span>

                </div>
                <div className="form-control relative w-full">
                  <input type="password" name="confirmPassword" className="input input-sm max-w-full border-2 text-base text-black bg-white" placeholder="Confirmar Contraseña" value={formData.confirmPassword} onChange={handleInputChange} />
                  <span className="absolute inset-y-0 right-4 inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-content3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </span>

                </div>
                <select name="school" className="select h-8 bg-white text-black" value={formData.school} onChange={handleInputChange}>
                  <option value="" disabled>
                    --ESCUELAS--
                  </option>
                  <option value={'Programacion'}>Programacion</option>
                  <option value={'Diseño'}>Diseño</option>
                  <option value={'Ingenieria'}>Ingenieria</option>
                </select>

                <div className="form-field pt-2">
                  <div className="form-control justify-center">
                    <button type="submit" className="btn bg-[#2E7EDF] w-[60%] h-8">Agregar</button>
                  </div>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>

    </>
  )
}
