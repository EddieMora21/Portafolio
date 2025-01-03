import PropTypes from "prop-types";
import portafolioimg from "../assets/Proyects/porfolio.png";
import github from "../assets/main/github.svg";
import linkeding from "../assets/main/linkeding.svg";
import zoom from "../assets/Proyects/zoom.svg";
import vete from "../assets/Proyects/LogoVeterinariasigma.png";
import { useState } from "react";

const Info = ({ children, change }) => {
  return (
    <section>
      <div
        className={`${
          change === false
            ? "flex flex-col justify-center items-center mt-4"
            : "flex flex-col justify-start items-start mt-4"
        }`}
      >
        <div
          className={`${
            change === false
              ? "grid grid-cols-1 sm:grid-cols-2  gap-4 text-[#EAEAEA]"
              : "flex text-[#EAEAEA] justify-start items-start"
          }`}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

const Proyects = () => {
  const data = [
    {
      Titles: "Portafolio Profesional",
      Descriptions:
        "Al observar la necesidad de un enfoque más práctico en la presentación profesional, diseñé un portafolio enfocado en destacar habilidades y proyectos de manera clara y atractiva.",
      img: portafolioimg,
      duration: "1 months",
      desing: "2 days",
      tecnologis: "React, Tailwind CSS",
    },

    {
      Titles: "Veterinaria Sigma",
      Descriptions: "Muy pronto disponible....",
      img: vete,
      duration: "...",
      desing: "...",
      tecnologis: "...",
    },
  ];

  const [Visible, setVisible] = useState(null);
  const [Change, setChange] = useState(false);

  const handleChange = () => {
    setChange(true);
  };

  const handleChangeclose = () => {
    setChange(false);
  };

  const handleVisible = (index) => {
    setVisible(index);
  };

  const handleclose = () => {
    setVisible(null);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Info change={Change}>
        {data.map((info, index) => (
          <div
            key={index}
            className={`${
              Visible !== null && Visible !== index
                ? "opacity-0 pointer-events-none absolute transition-opacity duration-500 ease-in-out"
                : "opacity-100 relative transition-opacity duration-500 ease-in-out"
            } ${
              Visible === index
                ? "flex flex-col bg-[rgba(36,33,33,0.85)] backdrop-blur-lg w-full sm:w-[90%] md:w-[800px] h-full sm:h-[90%] fixed inset-0 z-50 p-5 md:p-10 justify-start items-center rounded-xl"
                : "flex flex-col bg-[#2C2C2C] p-5 rounded-md hover:scale-110 hover:shadow-lg hover:shadow-amber-950 hover:transition-all duration-300"
            }`}
          >
            <div
              className={`${
                Visible === index ? "flex justify-center items-center" : ""
              }`}
            >
              <img
                src={info.img}
                alt="portafolioimg"
                className={`${
                  Visible === index
                    ? "w-full max-w-2xl object-cover rounded-lg"
                    : "w-full max-w-md rounded-md object-cover"
                }`}
              />
            </div>
            <div className="flex flex-col justify-center items-center space-y-3">
              <h4 className="mt-2 text-base sm:text-lg md:text-xl font-bold text-center">
                {info.Titles}
              </h4>
              <p
                className={`${
                  Change === false
                    ? "max-w-full sm:max-w-[20rem] lg:max-w-[30rem] text-sm sm:text-base lg:text-lg text-center line-clamp-2"
                    : "max-w-full text-base sm:text-lg lg:text-xl text-center"
                }`}
              >
                {info.Descriptions}
              </p>
              {Change === true && (
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="flex flex-row gap-1 bg-[#666565] p-4 rounded-lg text-base sm:text-lg">
                    <h3 className="font-bold">Duration:</h3>
                    <p>{info.duration}</p>
                  </div>
                  <div className="flex flex-row gap-1 bg-[#666565] p-4 rounded-lg text-base sm:text-lg">
                    <h3 className="font-bold">Desing:</h3>
                    <p>{info.desing}</p>
                  </div>
                  <div className="flex flex-row gap-1 bg-[#666565] p-4 rounded-lg text-base sm:text-lg">
                    <h3 className="font-bold">Technologies:</h3>
                    <p>{info.tecnologis}</p>
                  </div>
                </div>
              )}
              <div className="flex flex-row flex-wrap space-x-5 my-2 justify-center items-center">
                {Visible !== index && (
                  <button
                    onClick={() => {
                      handleVisible(index);
                      handleChange();
                    }}
                    type="button"
                    className="flex justify-center items-center bg-[#5a8335] p-2 rounded-md hover:bg-[#485839]"
                  >
                    <img src={zoom} alt="zoom" className="w-7" />
                    Ver más
                  </button>
                )}
                {Visible === index && (
                  <button
                    onClick={() => {
                      handleclose();
                      handleChangeclose();
                    }}
                    type="button"
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
                  >
                    Cerrar
                  </button>
                )}
                <a
                  type="button"
                  className="flex justify-center items-center bg-white rounded-full w-12 h-12 hover:bg-[#485839]"
                >
                  <img src={github} alt="github" className="w-7" />
                </a>
                <a type="button">
                  <div className="flex justify-center items-center bg-white rounded-full w-12 h-12 hover:bg-[#485839]">
                    <img src={linkeding} alt="linkeding" className="w-7 " />
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Info>
    </div>
  );
};

Info.propTypes = {
  children: PropTypes.node.isRequired,
  change: PropTypes.bool.isRequired,
};

export default Proyects;
