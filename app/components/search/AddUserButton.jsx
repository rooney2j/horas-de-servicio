import { FaPlus } from "react-icons/fa";

export default function AddUserButton() {
  return (
    <button className="text-white bg-blue-500 rounded-full p-3 hover:bg-blue-600">
      <FaPlus size={16} />
    </button>
  );
}
