import { Outlet } from "react-router-dom";
import Footer from "../Router/Shared/Footer";
import NavBar from "../Router/Shared/NavBar";
import { motion, useScroll, useSpring } from "framer-motion";

const Main = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div>
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-500 to-purple-900
        dark:bg-gradient-to-r dark:from-blue-200 dark:to-cyan-200 animate-pulse transform z-[99] origin-top-left"
        style={{ scaleX }}
      />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
