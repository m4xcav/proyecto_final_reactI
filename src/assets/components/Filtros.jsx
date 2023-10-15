import React from "react";

const Filtros = ({ data, onSort }) => {
  const FiltroChange = (e) => {
    const selectedFiltro = e.target.value;
    let filteredData = [...data]; // Crear una copia del array original

    switch (selectedFiltro) {
      case "AZ":
        filteredData.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "ZA":
        filteredData.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "reciente":
        filteredData.sort((a, b) => new Date(b.modified) - new Date(a.modified));
        break;
      case "antiguo":
        filteredData.sort((a, b) => new Date(a.modified) - new Date(b.modified));
        break;
      default:
        break;
    }

    onSort(filteredData);
  };

  return (
    <div className="relative w-80">
      <label htmlFor="filtro_select" className="sr-only">
        Filtrar datos
      </label>
      <select
        id="filtro_select"
        onChange={FiltroChange}
        className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
      >
        <option value="default">Selecciona filtro</option>
        <option value="AZ">Ordenar de A - Z</option>
        <option value="ZA">Ordenar de Z - A</option>
        <option value="reciente">Ordenar por el más reciente</option>
        <option value="antiguo">Ordenar por el más antiguo</option>
      </select>
    </div>
  );
};
export default Filtros;

