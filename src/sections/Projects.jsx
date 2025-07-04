import { useState, useEffect } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import { v4 as uuidv4 } from "uuid";
import { LinearGradient } from "react-text-gradients";
import { myProjects } from "../constants/data";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  const [interactive, setInteractive] = useState(true);
  const [slideIndex, setSlideIndex]   = useState(0);
  const [slides, setSlides]           = useState([]);

  useEffect(() => {
    setSlides(
      myProjects.map((project, idx) => ({
        key: uuidv4(),
        content: <ProjectCard project={project} />,
        onClick: () => setSlideIndex(idx),
      }))
    );
  }, []);

  return (
    <section id="projects" className="w-full flex justify-center px-4">
      <div className="flex flex-col w-full max-w-7xl items-start">
        <motion.h2
          className="xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-black !leading-normal"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <LinearGradient gradient={["to left", "#ff9720 ,#fc0865"]}>
            Projects
          </LinearGradient>
        </motion.h2>

        <button
        onClick={() => setInteractive((p) => !p)}
        className="mt-4 mb-6 sm:mb-10 bg-[#fe5042] hover:bg-[#fc0865] transition
                  text-white text-sm sm:text-base
                  px-4 py-1.5 sm:px-6 sm:py-2
                  rounded-md tracking-widest"
      >
        {interactive ? "STATIC MODE" : "INTERACTIVE MODE"}
      </button>

        {interactive ? (
          /* ---- 3D-Carousel ---- */
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(_, info) => {
              const swipe = info.offset.x;
              if (swipe > 50)
                setSlideIndex((p) => (p - 1 + myProjects.length) % myProjects.length);
              else if (swipe < -50)
                setSlideIndex((p) => (p + 1) % myProjects.length);
            }}
            className="w-full mt-24 mb-12 md:mt-32 md:mb-20 lg:mt-40 h-[400px] md:h-[500px] flex items-center justify-center cursor-grab active:cursor-grabbing"
          >
            {slides.length > 0 && (
              <Carousel
                slides={slides}
                goToSlide={slideIndex}
                offsetRadius={1}
                showNavigation={false}
                animationConfig={config.stiff}
              />
            )}
          </motion.div>
        ) : (
          /* ---- Static two column grid ---- */
          <div className="mt-16 sm:mt-28 w-full">
          <div className="grid w-full justify-items-center  
                          grid-cols-1 sm:grid-cols-2
                          gap-y-16 sm:gap-y-28
                          gap-x-2 sm:gap-x-12
                          pb-10 lg:pb-20">
            {myProjects.map((proj) => (
              <ProjectCard key={proj.title} project={proj} />
            ))}
          </div>
        </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
