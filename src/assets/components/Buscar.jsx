import React from "react";
import axios from "axios";

const Buscador = ({ onSearch }) => {
  const buscarHeroe = async (e) => {
    const searchTerm = e.target.value;
    try {
      const res = await axios.get(
        `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=e063a4fd8a7523a587fe7f77c5979cba&hash=25ffd61fd217a6e91a7d343b5ee3f6b0&nameStartsWith=${searchTerm}`
      );
      onSearch(res.data.data.results);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <div className="relative w-80">
      <label
        htmlFor="name"
        className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
      >
        Busca un personaje
      </label>
      <input
        type="text"
        name="name"
        id="name"
        onChange={buscarHeroe}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Buscar por nombre de héroe"
      />
    </div>
  );
};

export default Buscador;
