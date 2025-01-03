import ciudad from "../assets/app/imagenciudad.webp";
import imagenpersonal from "../assets/main/yo.png";
import linkeding from "../assets/main/linkeding.svg";
import github from "../assets/main/github.svg";

const Inicio = () => {
  return (
    <section className="flex flex-col justify-between items-center space-y-6 p-6">
      {/* Imagen de fondo (ciudad) */}
      <div className="h-60 w-full md:h-72 lg:h-80 overflow-hidden flex items-center rounded-lg shadow-lg">
        <img src={ciudad} alt="ciudad" className="w-full h-full object-cover" />
      </div>

      {/* Contenedor de información personal */}
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-14">
        {/* Imagen personal */}
        <div className="w-32 h-32 md:w-40 md:h-40 overflow-hidden flex items-center justify-center rounded-3xl shadow-md border border-gray-300 bg-gradient-to-b from-black to-gray-700">
          <img
            src={imagenpersonal}
            alt="yo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Texto e información */}
        <div className="text-center md:text-left">
          <h1 className="font-bold text-xl md:text-2xl text-[#1A1A1A]">
            Eddie Martin Mora Brenes
          </h1>
          <p className="text-sm md:text-base text-[#4A4A4A]">
            Desarrollador Web | React JS | Tailwind
          </p>

          {/* Iconos de redes sociales */}
          <ul className="flex justify-center md:justify-start mt-4 space-x-4">
            <li>
              <a
                href="https://www.linkedin.com/in/EddieMora21"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-slate-400 shadow-md"
              >
                <img
                  src={linkeding}
                  alt="LinkedIn"
                  className="w-6 h-6 object-contain"
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/EddieMora21"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-[rgba(0,0,0,0.5)] shadow-md"
              >
                <img
                  src={github}
                  alt="GitHub"
                  className="w-6 h-6 object-contain"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
