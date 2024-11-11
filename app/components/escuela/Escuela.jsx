import React, { useEffect, useState } from "react";
import axios from "axios";

function Escuela() {
  const [escuelas, setEscuelas] = useState([]);

  useEffect(() => {
    // Configura la solicitud con el token de autorización
    const fetchEscuelas = async () => {
      try {
        const response = await axios.get(
          "https://funval-api.onrender.com/api/v1/schools/",
          {
            headers: {
              Authorization:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJyb2xlIjp7ImlkIjoiMSIsIm5hbWUiOiJBZG1pbiJ9LCJpYXQiOjE3MzEyNzk2MzEsImV4cCI6MTczMTM2NjAzMX0.DktBhEDuVv9taVnZiy_TVq85wKWKktmfVb1F5YfsvUk",
              "Content-Type": "application/json",
            },
          }
        );
        setEscuelas(response.data); // Almacena los datos en el estado
      } catch (error) {
        console.error("Error al obtener las escuelas:", error);
      }
    };

    fetchEscuelas();
  }, []);

  return (
    <div className="flex w-[70%] flex-col items-center justify-center">
      <div className="flex justify-between w-1/2">
        <h2 className="text-3xl">Escuelas</h2>
        <button className="h-10 w-10 bg-blue-500 rounded-full">+</button>
      </div>

      <table className="table-auto border border-spacing-2 mt-4 w-1/2">
        <thead>
          <tr>
            <th className="border px-4 py-2">Nombre</th>
            <th className="border px-4 py-2">Acción</th>
          </tr>
        </thead>
        <tbody>
          {escuelas.map((escuela) => (
            <tr key={escuela.id}>
              <td className="border px-4 py-2">{escuela.name}</td>
              <td className="flex justify-center px-4 py-2 border">
                <button className="bg-blue-500 text-white px-4 py-1 rounded">
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Escuela;
