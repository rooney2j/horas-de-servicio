"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";

function Country({token}) {
  const [Countrys, setCountrys] = useState([]);

  useEffect(() => {
    const fetchCountrys = async () => {
      try {
        const response = await axios.get(
          "https://funval-api.onrender.com/api/v1/country/",
          {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          }
        );
        setCountrys(response.data);

      } catch (error) {
        console.error("Error al obtener las Countrys:", error);
      }
    };

    fetchCountrys();
  }, []);

  return (
    <div className="flex w-[70%] flex-col items-center justify-center">
      <div className="flex justify-between w-full md:w-1/2">
        <h2 className="text-3xl">Paises</h2>
        <button className="h-10 w-10 bg-blue-500 rounded-full">+</button>
      </div>

      <table className="table-auto border border-spacing-2 mt-4 w-full md:w-1/2">
        <thead>
          <tr>
            <th className="border px-4 py-2">Nombre</th>
            <th className="border px-4 py-2">Acción</th>
          </tr>
        </thead>
        <tbody>
          {Countrys.map((Country) => (
            <tr key={Country.id}>
              <td className="border px-4 py-2">{Country.name}</td>
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

export default Country;
