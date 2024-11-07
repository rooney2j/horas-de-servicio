'use server';
import React from 'react';
import { auth } from '@/auth';

export const newUser = async (e) => {

  try {
    // Obtener sesión 
    const session = await auth();
    console.log("Session data", session);

    if (!session.accessToken) {
      console.error("El token de acceso no esta presente en la sesión.");
      return;
    }
    console.log("Access token:", session.accessToken)

    //Definir el objeto de nuevo usuario

    const newUser = {
      data: {
        f_name: "Juan",
        s_name: "Diego",
        f_lastname: "Perez",
        s_lastname: "Garcia",
      },
      account: {
        email: "roberto@mail.com",
        role_id: 3,
      },
      schools: [1],
    };

    //Hacer petición para crear el nuevo usuario

    const response = await fetch('https://funval-api.onrender.com/api/v1/users/',
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${session.accessToken}`,
        },
        body: JSON.stringify(newUser),
      }
    );
    //Respuesta

    if (!response.ok) {
      console.log("Error en la respuesta", response);
      return;
    }
    const data = await response.json();
    console.log("Usuario creado exitosamente", data);
  } catch (error) {
    console.error("Hubo un error al crear el usuario:", error);
  }
};

