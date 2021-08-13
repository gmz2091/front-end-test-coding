import React from "react";

const Form = ({ handleChange, handleSubmit }) => {
  return (
    <>
      <div className="h-24 w-11/12 flex items-center justify-center m-auto">
        <form
          action=""
          onSubmit={handleSubmit}
          className="w-full m-auto flex justify-between"
        >
          <input
            type="text"
            placeholder="Ingrese Usuario"
            onChange={handleChange}
            className="w-10/12 px-4 py-1 rounded"
          />
          <button type="submit" className="bg-green-300 px-4 py-1 rounded-md">
            Buscar
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
