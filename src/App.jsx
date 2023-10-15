import { useEffect, useState } from "react";
import Galeria from "./assets/components/Galeria";
import Buscar from "./assets/components/Buscar";
import Filtros from "./assets/components/Filtros"
import { instance } from "./assets/api/bdMarvel";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await instance();
        setbusqueda(data.data.results);
        console.log({ data });
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    getData();
  }, []); 
  const setbusqueda = (results) => {
    setData(results);
  };
  const handleFiltroChange = (filteredData) => {
    setData(filteredData);
  };
  return (
    <>
    <div className="bg-repeat
    "  style={{
      backgroundImage:
        "url('https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1485446950/wzxvmdhz58q44trtz8pi.png')",
    }}>
    <div className="w-full h-80 bg-cover bg-center" 
         style={{
          backgroundImage:
            "url('https://cdn.marvel.com/u/prod/marvel/i/mg/8/e0/52bdf830aa094.jpg')",
        }}>
    <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
        <div className="text-center">
            <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl">Uso de Marvel's <span className="text-red-400">API</span></h1>
        </div>
    </div>
</div>
    <div className="md:container md:mx-auto bg-red-700">
       <div className=" bg-white py-24 sm:py-32">
       <div className="mx-auto max-w-7xl px-6 lg:px-8">
       <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              ¿Cual es tu Heroe Favorito?
            </h2>
  
            <p className="mt-6 text-lg leading-8 text-gray-600">
            En el buscador puedes encontrar a tu Héroe favorito por su nombre y aplicarle los filtros, no todos los Héroes que están en esta API contienen una descripción. La descripción de los Héroes no tiene traducción oficial al español.
            </p>
          </div>
          <div className="mt-5 flex gap-10">
            <Buscar onSearch={setbusqueda}/>
            <Filtros data={data} onSort={handleFiltroChange} />
      </div>
       <Galeria heroes={data}>
      </Galeria>
       </div>
       </div>
    </div>
    </div>
    </>
  );
};

export default App;