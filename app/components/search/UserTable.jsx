import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

export default function UserTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-[#2E7EDF]">
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">NOMBRE DEL ALUMNO</th>
            <th className="px-4 py-2 border">CORREO</th>
            <th className="px-4 py-2 border">ROL</th>
            <th className="px-4 py-2 border">ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border">1</td>
            <td className="px-4 py-2 border">Juan Perez</td>
            <td className="px-4 py-2 border">juan1234@gmail.com</td>
            <td className="px-4 py-2 border">Alumno</td>
            <td className="px-4 py-2 flex justify-around">
              <FaEye className="text-blue-500 cursor-pointer" />
              <FaEdit className="text-yellow-500 cursor-pointer" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
