// src/components/SkillCards.jsx
import PropTypes from "prop-types";
import * as SiIcons from "react-icons/si";          // Simple-Icons
import { skillCards } from "../constants/data";     // oma lista

/* ---------- apu: muuttuu kebabCase → PascalCase, esim. "redux-saga" → "ReduxSaga" */
const toPascal = (str) =>
  str
    .replace(/[^a-zA-Z0-9]/g, " ")     // korvaa viivat/alatolit välilyönniksi
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join("");

/* ---------- yksi kortti ---------- */
const Card = ({ skill }) => {
  /* salli myös pelkkä merkkijono varmuuden vuoksi */
  const isString = typeof skill === "string";
  const name  = isString ? skill       : skill.text ?? skill.name;
  const fill  = isString ? "#888"      : skill.fill  ?? "#888";
  const iconK = isString ? null        : skill.icon;
  const since = isString ? null        : skill.since;
  const iconFill = isString ? "#fff"   : skill.iconFill ?? "#fff";

  /* hae ikonikomponentti dynaamisesti "SiReact" -tyyliin */
  const IconCmp =
    iconK && SiIcons[`Si${toPascal(iconK)}`]
      ? SiIcons[`Si${toPascal(iconK)}`]
      : null; // fallback null

  return (
    <div className="flex items-center gap-4 bg-gray-400/60 rounded-xl p-4 w-full">
      {/* värillinen ympyrä */}
      <div
        className="flex items-center justify-center rounded-full shrink-0"
        style={{ backgroundColor: fill, width: 34, height: 34 }}
      >
        {IconCmp && <IconCmp size={20} color={iconFill} />}
      </div>

      {/* tekstit */}
      <div>
        <h3 className="font-bold text-black">{name}</h3>
        {since && <p className="text-sm text-black/80">Since {since}</p>}
      </div>
    </div>
  );
};

Card.propTypes = {
  skill: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

/* ---------- korttigridi ---------- */
const SkillCards = ({ skills = skillCards }) => (
  <div className="grid gap-4 w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {skills.map((s, idx) => (
      <Card key={idx} skill={s} />
    ))}
  </div>
);

SkillCards.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ),
};

export default SkillCards;
