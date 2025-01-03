import imgpersonal from "../assets/main/yo.png";
import { Link } from "react-router-dom";
import portafolio from "../assets/publications/portafolio_publications.png";

const Publicaciones = () => {
  const data = [
    {
      text1:
        "Hoy terminamos con el proyecto 'Portafolio'🎯,✅ Si quieres más detalle de cómo se realizó y el código del mismo.",
      text2: "Saber más del Proyecto",
      link: "/proyects",
      imgorvideo: portafolio,
      Date: "02/01/2025 - 19:17",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center mt-9">
      {data.map((item, index) => (
        <div
          key={index}
          className="w-[900px] max-w-full p-4 bg-[#2C2C2C] text-[#EAEAEA] space-y-5 rounded-xl mt-16"
        >
          {/* Cabecera con avatar e información */}
          <div className="flex flex-row space-x-4">
            <div className="w-24 h-24 bg-gradient-to-b from-black to-gray-700 rounded-3xl overflow-hidden">
              <img
                src={imgpersonal}
                alt="imgpersonal"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="font-bold text-xl">Eddie Mora Brenes</h4>
              <p className="text-sm text-gray-400">{item.Date}</p>
            </div>
          </div>

          {/* Contenido de la publicación */}
          <div>
            <p className="text-lg">{item.text1}</p>
            <div className="flex flex-row items-center space-x-2 mt-2">
              <p className="text-lg">{item.text2}:</p>
              <Link
                to={item.link}
                className="text-blue-600 hover:underline text-lg"
              >
                Proyecto
              </Link>
            </div>
          </div>

          {/* Imagen del proyecto */}
          <div className="flex flex-col justify-center items-center w-full h-full mt-4">
            <img
              src={item.imgorvideo}
              alt="portafolio"
              className="w-full max-h-[500px] object-cover rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Publicaciones;
