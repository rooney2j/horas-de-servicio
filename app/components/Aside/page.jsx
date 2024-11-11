"use client";
import { useState } from "react";

function Aside({ setMostrar, role }) {
  const [show, setShow] = useState(true);

  const toggleMenu = () => {
    setShow(!show);
  };

  const handleClick = (componente) => {
    setMostrar(componente);
    toggleMenu();
  };

  return (
    <div className="h-full">
      <div className={`${show ? "hidden" : ""} p-4`}>
        <button
          onClick={toggleMenu}
          className="h-8 w-8 rounded-md shadow-md shadow-slate-500 bg-slate-500 flex items-center justify-center border border-slate-600 border-t-slate-200 border-l-slate-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div
        className={`${
          show ? "" : "hidden"
        } w-screen md:w-80 h-screen bg-[#2E7EDF]`}
      >
        <div className="w-full h-28 bg-[#023763] flex items-center justify-center">
          <button
            onClick={toggleMenu}
            className="absolute md:flex top-2 right-2 md:top-1 md:left-64 text-white text-2xl font-bold px-3 md:px-6"
          >
            ✕
          </button>

          <img
            className="w-60 md:w-[85%] h-12 px-5"
            src="https://www.fundaciondevalores.org/wp-content/uploads/2023/04/LOGO-FUNVAL-NUEVO1_Mesa-de-trabajo-1.png"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center justify-center mt-2 md:mt-6 gap-2 md:gap-6">
            <div className="bg-white text-5xl h-32 w-32 rounded-full flex items-center justify-center">
              KR
            </div>
            <div className="text-white">USER NAME</div>
            <div className="text-[#023763] font-bold text-2xl">{role}</div>
          </div>
          <div className="flex flex-col w-full h-72 items-center justify-center mt-2 md:mt-8">
            {role === "Admin" ? (
              <>
                <button
                  className="text-[#023763] w-full h-14 font-bold hover:bg-slate-50"
                  onClick={() => handleClick("usuario")}
                >
                  USUARIOS
                </button>
                <button
                  className="text-[#023763] w-full h-14 font-bold hover:bg-slate-50"
                  onClick={() => handleClick("reportes")}
                >
                  REPORTES
                </button>
                <button
                  className="text-[#023763] w-full h-14 font-bold hover:bg-slate-50"
                  onClick={() => handleClick("escuela")}
                >
                  ESCUELAS
                </button>
                <button
                  className="text-[#023763] w-full h-14 font-bold hover:bg-slate-50"
                  onClick={() => handleClick("paises")}
                >
                  PAISES
                </button>
              </>
            ) : (
              <button
                className="text-[#023763] w-full h-14 font-bold hover:bg-slate-50"
                onClick={() => handleClick("reportes")}
              >
                REPORTES
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aside;
