import { useState } from "react";
import { motion } from "framer-motion";
import { LinearGradient } from "react-text-gradients";

import SkillsSphere from "../components/SkillsSphere";
import SkillCards   from "../components/SkillCards";

const Skills = () => {
  const [showSphere, setShowSphere] = useState(true);

  return (
    <section id="skills" className="w-full flex justify-center px-4 py-10">
      <div className="flex flex-col w-full max-w-7xl items-start">
        <motion.h2
          className="mb-0 sm:mb-0 xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-black !leading-normal"
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <LinearGradient gradient={["to left", "#ff9720 ,#fc0865"]}>
            Skills &amp; Technologies
          </LinearGradient>
        </motion.h2>
        <button
        onClick={() => setShowSphere((p) => !p)}
        className="mt-4 mb-0 sm:mb-10 bg-[#fe5042] hover:bg-[#fc0865] transition
                  text-white text-sm sm:text-base
                  px-4 py-1.5 sm:px-6 sm:py-2
                  rounded-md tracking-widest"
      >
        {showSphere ? "STATIC MODE" : "INTERACTIVE MODE"}
      </button>

        {/* ------- Data------- */}
        {showSphere ? (
          <div className="relative w-full flex items-center justify-center">
            <div className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full bg-[#fc0865]/20 blur-3xl" />
            <SkillsSphere />
          </div>
        ) : (
          <div className="mt-4 w-full">
            <SkillCards />
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;