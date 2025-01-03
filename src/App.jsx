import { Routes, Route } from "react-router-dom";
import Links from "./components/Links";
import Footer from "./components/Footer";
import Publicaciones from "./components/Publications";
import Proyects from "./components/Proyects";
import About from "./components/About";
import Main from "./components/Main";
import ciudad from "./assets/app/imagenciudad.webp";

const App = () => {
  return (
    <div
      className="bg-center bg-cover min-h-screen"
      style={{
        backgroundImage: `url(${ciudad})`,
      }}
    >
      <main className="p-6 rounded-xl border border-white/20 bg-[rgba(245,245,220,0.58)] backdrop-blur-md backdrop-saturate-200 min-h-screen text-[#2C2C2C]">
        <Main />
        <Links /> {/* Barra de navegación */}
        <Routes>
          <Route path="/publications" element={<Publicaciones />} />
          <Route path="/proyects" element={<Proyects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
