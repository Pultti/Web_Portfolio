import { LinearGradient } from "react-text-gradients";
import React, { useState, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { workExperiences } from "../constants/data";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const ExperienceCard = ({ experience }) => {
  const [showGrades, setShowGrades] = useState(false);
  const [expandedRow, setExpandedRow] = useState(null);
  
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setShowGrades(false);
        setExpandedRow(null);
      }
    };
    if (showGrades) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showGrades]);

  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#32303a", color: "fff" }}
      contentArrowStyle={{ borderRight: "7px solid #32303a" }}
      date={experience.duration}
      dateClassName="text-white"
      iconStyle={{ background: "#32303a", color: "#fff" }}
      icon={
      <div className="flex justify-center items-center w-full h-full">
        {experience.icon && (
          <img
            src={experience.icon}
            alt={experience.company}
            className="w-[60%] h-[60%] object-contain"
          />
        )}
      </div>
      }
    >
      {/* Experience */}
      <div>
        <h3 className="text-white text-base font-bold">
          {experience.position}
        </h3>
        <p className="text-gray-300 text-base font-mono" style={{ margin: 0 }}>
          {experience.company}
        </p>
      </div>

      {/* Technologies */}
      <div className="mt-4 flex flex-wrap gap-2">
        {experience.technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-[#7e3ff2] text-white text-xs md:text-sm px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Projects */}
      {experience.projects && experience.projects.length > 0 && (
        <div className="mt-5">
          <h4 className="text-sm text-white font-semibold mb-2">Projects:</h4>
          <ul className="list-disc ml-5 space-y-1">
            {experience.projects.map((project, i) => (
              <li
                key={`project-${i}`}
                className="text-gray-400 text-xs md:text-sm font-medium"
              >
                {project.name}
              </li>
            ))}
          </ul>
        </div>
      )}
 
      {experience.grades && (
        <>
          <button
            onClick={() => setShowGrades(true)}
            className="mt-4 bg-[#ff9720] text-black px-4 py-1 rounded hover:bg-[#fc0865] transition"
          >
            Show Grades
          </button>

          {showGrades && (
            <div
      /* overlay */
      className="fixed inset-0 flex items-center justify-center bg-black/60 z-50"
      onClick={() => { setShowGrades(false); setExpandedRow(null); }}
    >
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#32303a] text-white p-6 rounded-2xl w-[92%] sm:max-w-lg
                  max-h-[80vh] overflow-y-auto shadow-2xl ring-1 ring-[#ff9720]/40"
      >
        <h4 className="text-xl font-bold mb-4">
          <LinearGradient gradient={["to left", "#ff9720 ,#fc0865"]}>
            Course Grades
          </LinearGradient>
        </h4>

        {/* table */}
        <table className="w-full text-xs md:text-sm">
          <thead>
            <tr className="bg-[#1f1d26] sticky top-0">
              <th className="p-2 text-left">Course</th>
              <th className="p-2">Grade</th>
              <th className="p-2 w-28"></th>
            </tr>
          </thead>
          <tbody>
            {experience.grades.map((g, i) => (
              <React.Fragment key={i}>
                <tr className={i % 2 ? "bg-gradient-to-r from-[#ff9720]/20 to-[#fc0865]/20" : "bg-white/5"}>
                  <td className="p-2 font-medium">{g.course}</td>
                  <td className="p-2 text-center">{g.grade}</td>
                  <td className="p-2">
                    {g.info && (
                      <button
                        onClick={() => setExpandedRow(expandedRow === i ? null : i)}
                        className="bg-gradient-to-r from-[#ff9720] to-[#fc0865] text-black
                        px-2 py-[2px] rounded transition hover:opacity-80"
                      >
                        {expandedRow === i ? "Hide" : "More"}
                      </button>
                    )}
                  </td>
                </tr>

                {expandedRow === i && (
                  <tr>
                    <td colSpan={3} className="p-3 bg-[#1f1d26] whitespace-pre-line">
                      {g.info}
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>

    <button
      onClick={() => { setShowGrades(false); setExpandedRow(null); }}
      className="mt-6 bg-[#ff9720] hover:bg-[#fc0865] px-4 py-1 rounded-lg transition
                 self-end block ml-auto text-black"
    >
      Close
    </button>
  </div>
</div>
      )}
    </>
  )}

    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <section
        className="w-full flex justify-center mb-20 px-4"
        id="experience"
      >
        <div className="flex flex-col w-full max-w-7xl items-center justify-start">
          {/* Title */}
          <div className="w-full">
            <motion.h2
              className="mb-10 xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-black !leading-normal"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <LinearGradient gradient={["to left", "#ff9720 ,#fc0865"]}>
                Time line
              </LinearGradient>
            </motion.h2>
          </div>

          {/* Timeline */}
          <VerticalTimeline lineColor={"#fff"}>
            {workExperiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
              ></ExperienceCard>
            ))}
          </VerticalTimeline>
        </div>
      </section>
    </>
  );
};

export default Experience;

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    duties: PropTypes.arrayOf(PropTypes.string).isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string),
    projects: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        link: PropTypes.string,
      })
    ),
    grades: PropTypes.arrayOf(
    PropTypes.shape({
    course: PropTypes.string.isRequired,
    grade: PropTypes.string.isRequired,
    info: PropTypes.string,
    })
    ),
  }).isRequired,
};
