import React, { FC } from "react";
import { ToastContainer } from "react-toastify";

interface ButtonProps {
  action: string;
  actionType: string;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ action, actionType, onClick }) => {
  return (
    <div>
      <button
        className={`w-full p-3 bg-indigo-600 text-white dark:bg-slate-400 rounded shadow ${
          actionType === "primary" ? "bg-blue-500" : "bg-red-500"
        }`}
        onClick={onClick}
      >
        {action}
      </button>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Button;
