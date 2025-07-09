import { FaTimes } from "react-icons/fa";
import { AllSKills } from "../constants/constants";
import {
  TbBrandCpp
} from 'react-icons/tb';
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiGithub,
  SiGit,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiDjango,
  SiFlask,
  SiSpring,
  SiPhp,
  SiSharp,
  SiDotnet,
  SiRuby,
  SiRubyonrails,
  SiVuedotjs,
  SiAngular,
  SiSvelte,
  SiNuxtdotjs,
  SiGatsby,
  SiFirebase,
  SiAmazon,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiGrafana,
  SiElasticsearch,
  SiJest,
  SiMocha,
  SiCypress,
  SiSelenium,
  SiFigma,
  SiAdobexd,
  SiAdobephotoshop,
  SiWordpress,
  SiShopify,
  SiWebpack,
  SiVite,
  SiSass,
  SiLess,
  SiStyledcomponents,
  SiSwift,
  SiKotlin,
  SiDart,
  SiFlutter,
  SiReactivex,
  SiGraphql,
  SiApollographql,
  SiElixir,
  SiGo,
  SiRust,
  SiWebgl,
  SiThreedotjs,
  SiElectron,
  SiRaspberrypi,
  SiArduino
} from 'react-icons/si';

interface Skill {
  icon: string;
  name: string;
  color: string;
}

interface AddSkillModalProps {
  setShowAddModal: (show: boolean) => void;
  skills: Skill[];
  deletedSkills: Skill[];
  onAddSkill: (skill: Skill) => void;
}

// Mapping from icon string to actual component
const iconMap: { [key: string]: React.ComponentType<any> } = {
  TbBrandCpp,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiGithub,
  SiGit,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiDjango,
  SiFlask,
  SiSpring,
  SiPhp,
  SiSharp,
  SiDotnet,
  SiRuby,
  SiRubyonrails,
  SiVuedotjs,
  SiAngular,
  SiSvelte,
  SiNuxtdotjs,
  SiGatsby,
  SiFirebase,
  SiAmazon,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiGrafana,
  SiElasticsearch,
  SiJest,
  SiMocha,
  SiCypress,
  SiSelenium,
  SiFigma,
  SiAdobexd,
  SiAdobephotoshop,
  SiWordpress,
  SiShopify,
  SiWebpack,
  SiVite,
  SiSass,
  SiLess,
  SiStyledcomponents,
  SiSwift,
  SiKotlin,
  SiDart,
  SiFlutter,
  SiReactivex,
  SiGraphql,
  SiApollographql,
  SiElixir,
  SiGo,
  SiRust,
  SiWebgl,
  SiThreedotjs,
  SiElectron,
  SiRaspberrypi,
  SiArduino
};

const AddSkillModal = ({
  setShowAddModal,
  skills,
  deletedSkills,
  onAddSkill,
}: AddSkillModalProps) => {
  const availableSkills = AllSKills.filter(
    (skill) =>
      !skills.some((s) => s.name === skill.name) &&
      !deletedSkills.some((s) => s.name === skill.name)
  );
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1a191e] rounded-xl p-6 w-full max-w-3xl max-h-[80vh] overflow-hidden flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Add New Skill</h3>
          <button
            onClick={() => setShowAddModal(false)}
            className="text-gray-400 hover:text-white"
          >
            <FaTimes size={24} />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 overflow-y-auto p-2">
          {availableSkills.length > 0 ? (
            availableSkills.map((skill) => {
              const Icon = iconMap[skill.icon];
              return (
                <div
                  key={skill.name}
                  onClick={() => {
                    onAddSkill(skill);
                    setShowAddModal(false);
                  }}
                  className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg 
                  transition-all duration-300 hover:bg-gray-700 cursor-pointer text-center"
                >
                  <div className="text-3xl mb-2" style={{ color: skill.color }}>
                    {Icon ? <Icon /> : null}
                  </div>
                  <span className="text-white text-sm font-medium">
                    {skill.name}
                  </span>
                </div>
              );
            })
          ) : (
            <div className="col-span-full text-center py-8 text-gray-400">
              No available skills to add
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddSkillModal;
