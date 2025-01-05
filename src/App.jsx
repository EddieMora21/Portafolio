import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Links from "./components/Links";
import Footer from "./components/Footer";
import Publicaciones from "./components/Publications";
import Proyects from "./components/Proyects";
import About from "./components/About";
import Main from "./components/Main";
import ciudad from "./assets/app/imagenciudad.webp";

const App = () => {
  const location = useLocation(); // Para manejar las rutas actuales

  // Definir animación para las páginas
  const pageVariants = {
    initial: { opacity: 0, x: "-100%" },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "100%" },
  };

  const pageTransition = {
    type: "tween",
    duration: 0.6,
  };

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
        {/* Envolver rutas con animación */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/publications"
              element={
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Publicaciones />
                </motion.div>
              }
            />
            <Route
              path="/proyects"
              element={
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Proyects />
                </motion.div>
              }
            />
            <Route
              path="/about"
              element={
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <About />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default App;
