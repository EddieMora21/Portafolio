import AboutSkills from "./AboutSkills";
const About = () => {
  return (
    <section className="flex flex-col justify-center items-center space-y-5 px-4 md:px-10 lg:px-20">
      <div className="flex flex-col justify-center items-center bg-[rgba(32,32,32,0.8)] m-4 md:m-8 px-6 py-4 md:px-10 md:py-6 lg:px-16 lg:py-8 rounded-lg text-[#EAEAEA] shadow-2xl max-w-full md:max-w-3xl">
        <h1 className="text-xl md:text-3xl font-bold mb-4 text-center">
          Quién Soy
        </h1>
        <p className="text-sm md:text-lg lg:text-xl text-center leading-relaxed">
          Hola, soy Eddie Martin Mora Brenes, un apasionado estudiante de
          Ingeniería en Informática, con el 80% de mi carrera completada. Estoy
          enfocado en convertirme en un profesional integral en el desarrollo
          frontend y backend, combinando las mejores prácticas de programación
          con soluciones eficientes y escalables. Mi objetivo es no solo dominar
          las tecnologías modernas, sino también ofrecer servicios de desarrollo
          web y código personalizado que generen valor tanto para negocios como
          para usuarios. Estoy constantemente aprendiendo y perfeccionando mis
          habilidades para destacar como un desarrollador altamente flexible y
          competitivo.
        </p>
      </div>
      <AboutSkills />
    </section>
  );
};

export default About;
