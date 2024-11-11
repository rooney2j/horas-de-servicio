"use client";
import React, { useState } from "react";
import Aside from "../components/Aside/page";
import Escuela from "../components/escuela/Escuela";

function page() {
  const [mostrar, setMostrar] = useState(null);

  const handleMostrar = (componente) => {
    setMostrar(componente);
  };
  return (
    <div className="flex h-screen gap-2">
      <Aside setMostrar={handleMostrar} />
      {mostrar === "escuela" && <Escuela />}
      {mostrar === "usuario" && <Usuario />}
    </div>
  );
}

export default page;
