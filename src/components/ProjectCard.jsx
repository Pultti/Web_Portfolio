import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
import * as SiIcons from "react-icons/si";
import { createPortal } from "react-dom";

/* Convert tag name to PascalCase → SiIcon */
const toPascal = (str) =>
  str
    .replace(/[^a-zA-Z0-9]/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join("");

const ProjectCard = ({ project, staticMode = false }) => {
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    const onKeyDown = (e) => e.key === "Escape" && setShowInfo(false);
    if (showInfo) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showInfo]);

  const widthClasses = staticMode
    ? "w-full max-w-[500px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[500px]"
    : "w-[280px] sm:w-[350px] md:w-[450px] lg:w-[500px]";

  const modal = (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/60 z-50"
      onClick={() => setShowInfo(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#32303a] text-white p-6 rounded-2xl w-[92%] sm:max-w-lg max-h-[80vh] overflow-y-auto shadow-2xl ring-1 ring-[#7e3ff2]/40"
      >
        <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
          {project.title} – Details
        </h4>

        {Array.isArray(project.info) ? (
          <ul className="list-disc ml-4 space-y-2 text-xs md:text-sm">
            {project.info.map((line, idx) => (
              <li key={idx} className="text-gray-300 whitespace-pre-line">
                {line}
              </li>
            ))}
          </ul>
        ) : (
          <p className="whitespace-pre-line text-xs md:text-sm text-gray-300">
            {project.info}
          </p>
        )}

        <button
          onClick={() => setShowInfo(false)}
          className="mt-6 w-full sm:w-fit ml-auto bg-[#fe5042] hover:bg-[#fc0865] text-xs sm:text-sm px-3 sm:px-4 py-1 rounded text-white transition"
        >
          Close
        </button>
      </div>
    </div>
  );

  return (
    <motion.div
      className={`${widthClasses} flex flex-col gap-5 relative rounded-lg sm:p-7 py-5 px-5 shadow-2xl shadow-black-200 bg-[#32303a] transition-all duration-200 select-none`}
    >
      {/* ▸ Banner */}
      <div
        className="absolute -top-12 md:-top-24 left-1/2 -translate-x-1/2 w-[230px] sm:w-[290px] md:w-[370px] lg:w-[420px] rounded-xl overflow-hidden shadow-xl z-10"
        style={project.logoStyle}
      >
        <img src={project.logo} alt="logo" className="w-full h-full object-cover rounded-xl" />
      </div>

      {/* ▸ Text */}
      <div className="flex flex-col gap-5 my-2 pt-20 sm:pt-24 md:pt-28 lg:pt-32">
        <h2 className="text-md md:text-xl font-semibold mb-2 text-white font-generalsans">
          {project.title}
        </h2>
        <p className="text-[#afb0b6] text-xs md:text-base font-generalsans">{project.desc}</p>
        {project.subdesc && (
          <p className="text-[#afb0b6] text-xs md:text-base font-generalsans whitespace-pre-line">
            {project.subdesc}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-5 mt-auto">
        {/* Tech icons */}
        <div className="flex flex-wrap items-center gap-3 w-full overflow-hidden">
          {project.tags.map((tag, i) => {
            const IconCmp = SiIcons[`Si${toPascal(tag.icon || tag.name)}`];
            const color = tag.color || "#fff";
            return (
              <div
                key={i}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-neutral-100/10 backdrop-blur flex items-center justify-center p-2"
              >
                {IconCmp && <IconCmp className="w-full h-full" color={color} />}
              </div>
            );
          })}
        </div>

        <div className="relative flex items-center w-full">
          {project.href && (
            <motion.a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-white"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <span className="text-xs md:text-base">GitHub</span>
              <FaGithub className="w-4 h-4" />
            </motion.a>
          )}

          {project.info && (
            <div className="absolute left-1/2 -translate-x-1/2">
              <motion.button
                onClick={() => setShowInfo(true)}
                className="flex items-center gap-2 text-white focus:outline-none"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <span className="text-xs md:text-base">Info</span>
                <FiInfo className="w-4 h-4" />
              </motion.button>
            </div>
          )}

          {project.source && (
            <motion.a
              href={project.source}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-white ml-auto"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <span className="text-xs md:text-base">Demo</span>
              <img src="arrow-up.png" alt="arrow" className="w-3 h-3" />
            </motion.a>
          )}
        </div>
      </div>

      {/* Render modal via Portal */}
      {showInfo && createPortal(modal, document.body)}
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    subdesc: PropTypes.string,
    logo: PropTypes.string.isRequired,
    logoStyle: PropTypes.object,
    href: PropTypes.string,
    source: PropTypes.string,
    info: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        icon: PropTypes.string,
        color: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
  staticMode: PropTypes.bool,
};

export default ProjectCard;