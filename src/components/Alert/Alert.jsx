import { faTimes as fasFaTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Alert = ({ setError }) => {
  return (
    <div className="w-full h-full bg-black bg-opacity-80 flex items-center justify-center fixed top-0 left-0">
      <div className="px-6 py-4 bg-red-200 rounded border-l-8 border-red-600 flex flex-wrap items-center">
        <p className="text-xl">Ingrese un usuario valido!</p>
        <button
          className="bg-red-500 text-red-100 rounded-full w-8 h-8 flex items-center justify-center ml-4"
          onClick={() => setError(false)}
        >
          <FontAwesomeIcon icon={fasFaTimes} />
        </button>
      </div>
    </div>
  );
};

export default Alert;
