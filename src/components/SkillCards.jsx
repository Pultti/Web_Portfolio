import PropTypes from "prop-types";
import * as SiIcons from "react-icons/si";
import { skillCards } from "../constants/data";

const toPascal = (str) =>
  str
    .replace(/[^a-zA-Z0-9]/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join("");

const Card = ({ skill }) => {
  const isString = typeof skill === "string";

  const name      = isString ? skill            : skill.text  ?? skill.name;
  const fill      = isString ? "#888"           : skill.fill  ?? "#888";
  const iconKey   = isString ? null             : skill.icon;
  const since     = isString ? null             : skill.since;
  const months    = isString ? null             : skill.months;
  const iconFill  = isString ? "#fff"           : skill.iconFill ?? "#fff";

  const IconCmp =
    iconKey && SiIcons[`Si${toPascal(iconKey)}`]
      ? SiIcons[`Si${toPascal(iconKey)}`]
      : null;

  let subtitle = null;
  if (since)      subtitle = `Since ${since}`;
  else if (months) subtitle = `≈ ${months} months`;

  return (
    <div className="flex items-center gap-4 bg-gray-400/60 rounded-xl p-4 w-full">
      <div
        className="flex items-center justify-center rounded-full shrink-0"
        style={{ backgroundColor: fill, width: 34, height: 34 }}
      >
        {IconCmp && <IconCmp size={20} color={iconFill} />}
      </div>

      <div>
        <h3 className="font-bold text-black">{name}</h3>
        {subtitle && <p className="text-sm text-black/80">{subtitle}</p>}
      </div>
    </div>
  );
};

Card.propTypes = {
  skill: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

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
