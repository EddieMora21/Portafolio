import arrow from "../assets/aboutskills/arrowdown.svg";
import PropTypes from "prop-types";
import reactimg from "../assets/aboutskills/react.svg";
import tailwindimg from "../assets/aboutskills/tailwind.svg";
import javascript from "../assets/aboutskills/javascript.svg";
import css from "../assets/aboutskills/css.svg";
import html from "../assets/aboutskills/html.svg";
import visual from "../assets/aboutskills/visual.png";
import figma from "../assets/aboutskills/figma.svg";
import github from "../assets/main/github.svg";
import git from "../assets/aboutskills/git.svg";
import mysql from "../assets/aboutskills/mysql.svg";
import nodejs from "../assets/aboutskills/node.js.svg";
import send from "../assets/aboutskills/send.svg";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect, useRef } from "react";
const Skills = ({ children, Title, ShowArrow }) => {
  const [isVisible, setisVisible] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top <= windowHeight - 100) {
          setisVisible(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="flex flex-col justify-center items-center">
      <div
        ref={ref}
        className={`transition-all  mt-7 duration-1000 ease-in-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col justify-center items-center   space-y-4">
          <h3 className="text-2xl font-bold ">{Title}</h3>
          {ShowArrow && (
            <div className="flex justify-center items-center w-10 h-10">
              <img
                src={arrow}
                alt="arrow"
                className="w-8 h-8 object-cover animate-bounce"
              />
            </div>
          )}
        </div>
        <div className="flex flex-col md:flex-row md:justify-between justify-between items-center md:space-x-12 space-y-6 md:space-y-0 mt-6">
          {children}
        </div>
      </div>
    </section>
  );
};
const AboutSkills = () => {
  const imgs = [
    {
      title: "React js",
      img: reactimg,
    },
    {
      title: "Tailwind",
      img: tailwindimg,
    },
    {
      title: "JavaScript",
      img: javascript,
    },
    {
      title: "CSS",
      img: css,
    },
    {
      title: "HTML",
      img: html,
    },
  ];
  const imgsherramientas = [
    {
      title: "Visual Estudio",
      img: visual,
    },
    {
      title: "Figma",
      img: figma,
    },
    {
      title: "Github",
      img: github,
    },
    {
      title: "Git",
      img: git,
    },
  ];
  const backend = [
    {
      title: "Mysql",
      img: mysql,
    },
    {
      title: "Node.js",
      img: nodejs,
    },
  ];
  const [FormData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...FormData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubimit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_z189p0a",
        "template_5nxm97w",
        FormData,
        "XxnfTg51UNx9xZrGG"
      )
      .then(
        (result) => {
          toast.success("Correo enviado con éxito 🎉", {
            position: "bottom-center",
            autoClose: 3000, // Se cierra automáticamente en 3 segundos
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          setFormData({ nombre: "", email: "", mensaje: "" });
          console.log(result.text);
        },

        (error) => {
          toast.error("Error al enviar el correo 😞", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <Skills Title={"Habilidades"} ShowArrow={true}>
        <div className="bg-[#2C2C2C] p-4 rounded-lg w-full md:w-[280px]">
          <h3 className="text-[#EAEAEA] text-center mb-4">Frontend</h3>
          <div className="grid grid-cols-2 gap-y-4 gap-x-6 place-items-center">
            {imgs.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={skill.img}
                  alt={skill.title}
                  className="w-10 h-10 mb-2"
                />
                <p className="text-[#EAEAEA] text-sm">{skill.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#2C2C2C] p-12 rounded-lg w-full md:w-[280px] mt-6 md:mt-0">
          <h3 className="text-[#EAEAEA] text-center mb-4">Herramientas</h3>
          <div className="grid grid-cols-2 gap-y-4 gap-x-6 place-items-center">
            {imgsherramientas.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={skill.img}
                  alt={skill.title}
                  className="w-10 h-10 mb-2"
                />
                <p className="text-[#EAEAEA] text-sm">{skill.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#2C2C2C] p-12 rounded-lg w-full md:w-[280px] md:h-[300px] mt-6 md:mt-0 ">
          <h3 className="text-[#EAEAEA] text-center mb-4">Backend</h3>
          <div className="grid grid-cols-2 gap-y-4 gap-x-6 place-items-center">
            {backend.map((skill, index) => (
              <div
                id={index}
                className="flex flex-row  items-center"
                key={index}
              >
                <img
                  src={skill.img}
                  alt={skill.title}
                  className="w-10 h-10 mb-2"
                />
                <p className="text-[#EAEAEA]">{skill.title}</p>
              </div>
            ))}
          </div>
        </div>
      </Skills>
      <Skills Title={"Contactame"} ShowArrow={false}>
        <form onSubmit={handleSubimit}>
          <div className=" flex flex-col justify-start items-center h-fit w-72 md:w-96 bg-[#2C2C2C] p-5 rounded-lg">
            <div className="flex flex-col">
              <label className="text-[#EAEAEA]">Nombre:</label>
              <input
                type="text"
                name="nombre"
                value={FormData.nombre}
                onChange={handleChange}
                className="w-64 md:w-80 h-10 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[#EAEAEA]">Correo:</label>
              <input
                type="email"
                name="email"
                value={FormData.email}
                onChange={handleChange}
                className="w-64 md:w-80 h-10 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[#EAEAEA]">Mensaje:</label>
              <textarea
                name="mensaje"
                value={FormData.mensaje}
                onChange={handleChange}
                className="w-64 md:w-80 h-64 rounded-md"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-[#EAEAEA] flex justify-center items-center mt-3 p-4 rounded-lg hover:bg-[#5a8335] "
            >
              <span>
                <img src={send} alt="send" />
              </span>
              Enviar
            </button>
          </div>
        </form>
        <ToastContainer />
      </Skills>
    </div>
  );
};

Skills.propTypes = {
  children: PropTypes.node.isRequired,
  Title: PropTypes.string,
  ShowArrow: PropTypes.bool,
};
export default AboutSkills;
