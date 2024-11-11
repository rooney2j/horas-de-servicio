'use client'
import useData from "@/app/customshooks/useData";
import { createService } from "@/services/apiServices";
import { auth } from '@/auth';
import { useEffect } from "react";

export default function RpteNuevo({token,uploadService, setUploadService}) {
  console.log(useData)
  const url = "https://funval-api.onrender.com/api/v1/categories/";


 
  
  /* const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQiLCJyb2xlIjp7ImlkIjoiMiIsIm5hbWUiOiJTdHVkZW50In0sImlhdCI6MTczMTMzNTkzOSwiZXhwIjoxNzMxNDIyMzM5fQ.DJ_vLr-1AxbGHC_2RpZ4oachOcK1-IJRqHd1tKkrGSc"; */

  const { datos } = useData(url, token);
  const categories = Array.isArray(datos) ? datos : [];
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const res = await createService(token, formData);
      console.log(res.message);
    } catch (error) {
      /*console.log(error.response.data.message) ;*/
      console.log(error.message);
    }
  };

  return (
    <div className={`w-full h-full flex flex-col  justify-center items-center`}>
      <div className="w-[90%] md:w-[50%] h-full flex flex-col justify-center items-center">
        <div className="flex bg-[#023763] md:flex-col w-[90%] ml-3 border-2 rounded-lg justify-center items-center">
          <h2 className="mt-5 mb-5 text-white">
            Registro de Horas de Servicio
          </h2>
        </div>
        <form method="POST" onSubmit={handleSubmit} className="w-[90%]">
          <div className="flex flex-col gap-4 ml-3 w-full mt-4 rounded-lg border-2 bg-[#DCF2F0]">
            <label htmlFor="amount_reported" className="ml-2 mt-4">
              Cantidad de horas de servicio:
              <input
                type="number"
                name="amount_reported"
                className="ml-0 md:ml-2 border-2 border-zinc-200 rounded-md text-right"
              />
            </label>
            <label
              className="flex flex-col ml-2 md:flex-row"
              htmlFor="description"
            >
              Descripción del servicio:
              <textarea
                className="ml-0 md:ml-[50px] border-2 w-[85%] md:w-[50%] border-zinc-200 rounded-md"
                rows="3"
                col="5"
                name="description"
                id=""
              ></textarea>
            </label>
            <div className="flex flex-col md:flex-row ">
              <label htmlFor="serviceCategory" className="ml-2">
                Categoría del servicio:{" "}
              </label>
              <select
                name="category_id"
                id="serviceCategory"
                className="ml-2 md:ml-16 w-[85%]  md:w-[50%] border-2 rounded-md "
              >
                {categories.length > 0 ? (
                  categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.description}
                    </option>
                  ))
                ) : (
                  <option>Error loading categories</option>
                )}
              </select>
            </div>
            <div className="flex flex-col md:flex-row ">
              <label htmlFor="level" className=" ml-2 mt-2 w-[55%] md:w-[25%]">
                Nivel:
              </label>
              <input
                type="text"
                name="level"
                className="ml-2 md:ml-20 w-[85%] md:w-[50%] border-2  border-zinc-200 rounded-md "
              />
            </div>
            <div className="flex flex-col md:flex-row">
              <label htmlFor="evidence" className="mb-4 ml-2">
                Evidencia adjunta:
                <input
                  type="file"
                  name="evidence"
                  className="ml-0 md:ml-[92px] border-2 w-[70%] md:w-[54%] rounded-md text-sm"
                />
              </label>
            </div>
            <div className="flex flex-row mt-3 mb-4 justify-center items-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 border border-blue-700 rounded-md">
                Guardar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
