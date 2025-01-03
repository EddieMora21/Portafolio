import { Link } from "react-router-dom";

const Links = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
      <Link
        to="/publications"
        className="px-6 py-3 lg:rounded-tl-2xl bg-[#2C2C2C] text-[#EAEAEA] hover:bg-[#474343] text-lg md:text-2xl w-full md:w-auto md:rounded-none"
      >
        Publicaciones
      </Link>
      <Link
        to="/proyects"
        className="px-6 py-3 bg-[#2C2C2C] text-[#EAEAEA] hover:bg-[#474343] text-lg md:text-2xl w-full md:w-auto border border-x-white"
      >
        Proyectos
      </Link>
      <Link
        to="/about"
        className="px-6 py-3 lg:rounded-tr-2xl bg-[#2C2C2C] text-[#EAEAEA] hover:bg-[#474343] text-lg md:text-2xl w-full md:w-auto md:rounded-none"
      >
        Sobre Mi
      </Link>
    </section>
  );
};

export default Links;
