import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";
import * as SiIcons from "react-icons/si";

const toPascal = (str) =>
  str
    .replace(/[^a-zA-Z0-9]/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join("");

const ProjectCard = ({ project, staticMode = false }) => {
  const widthClasses = staticMode
    ? "w-full max-w-[500px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[500px]"
    : "w-[280px] sm:w-[350px] md:w-[450px] lg:w-[500px]";

  return (
    <motion.div
      className={`${widthClasses} flex flex-col gap-5 relative rounded-lg sm:p-7 py-5 px-5 shadow-2xl shadow-black-200 bg-[#32303a] transition-all duration-200 select-none`}
    >
      {/* banner / thumbnail */}
      <div
        className="absolute -top-12 md:-top-24 left-1/2 -translate-x-1/2 w-[230px] sm:w-[290px] md:w-[370px] lg:w-[420px] rounded-xl overflow-hidden shadow-xl z-10"
        style={project.logoStyle}
      >
        <img src={project.logo} alt="logo" className="w-full h-full object-cover rounded-xl" />
      </div>

      {/* project textual copy */}
      <div className="flex flex-col gap-5 my-2 pt-20 sm:pt-24 md:pt-28 lg:pt-32">
        <h2 className="text-md md:text-xl font-semibold mb-2 text-white font-generalsans">
          {project.title}
        </h2>
        <p className="text-[#afb0b6] text-xs md:text-base font-generalsans">{project.desc}</p>
        {project.subdesc && (
          <p className="text-[#afb0b6] text-xs md:text-base font-generalsans">{project.subdesc}</p>
        )}
      </div>

      {/* footer */}
      <div className="flex flex-col gap-5">
        {/* tech icons – only react-icons, no image fallback */}
        <div className="flex flex-wrap items-center gap-3 w-full overflow-hidden">
          {project.tags.map((tag, i) => {
            const IconCmp = SiIcons[`Si${toPascal(tag.icon || tag.name)}`];
            const iconColor = tag.color || "#fff";
            return (
              <div
                key={i}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-neutral-100/10 backdrop-blur flex items-center justify-center p-2"
              >
                {IconCmp && <IconCmp className="w-full h-full" color={iconColor} />}
              </div>
            );
          })}
        </div>

        <div className="flex justify-between items-center w-full">
          {project.href && (
            <motion.a
              className="flex items-center gap-2 cursor-pointer text-white"
              href={project.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <p className="text-xs md:text-base">GitHub</p>
              <FaGithub className="w-4 h-4" />
            </motion.a>
          )}

          {project.source && (
            <motion.a
              className="flex items-center gap-2 cursor-pointer text-white"
              href={project.source}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <p className="text-xs md:text-base">Demo</p>
              <img src="arrow-up.png" alt="arrow" className="w-3 h-3" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    logo: PropTypes.string.isRequired,
    logoStyle: PropTypes.object,
    source: PropTypes.string,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    subdesc: PropTypes.string,
    href: PropTypes.string,
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
