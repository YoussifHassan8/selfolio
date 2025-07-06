import { useContext, useState } from "react";
import SkillCard from "./ui/SkillCard";
import TitleTwo from "./ui/TitleTwo";
import { IconType } from "react-icons";
import EditSkillsButton from "./skills/EditSkillsButton";
import SkillsDescription from "./skills/SkillsDescription";
import AddNewSkillButton from "./skills/AddNewSkillButton";
import AddSkillModal from "./skills/AddSkillModal";
import { skillsContext } from "./about/context/skillsContext";

interface Skill {
  icon: IconType;
  name: string;
  color: string;
}

const Skills = () => {
  const skillContext = useContext(skillsContext);
  const skillsGradient = skillContext?.skillsGradient || "";
  const setSkillsGradient = skillContext?.setSkillsGradient || (() => {});
  const skills = skillContext?.skills || [];
  const setSkills = skillContext?.setSkills || (() => {});
  const [deletedSkills, setDeletedSkills] = useState<Skill[]>([]);
  const [editMode, setEditMode] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const handleDeleteSkill = (skillName: string) => {
    const skillToDelete = skills.find((skill) => skill.name === skillName);
    if (skillToDelete) {
      setSkills(skills.filter((skill) => skill.name !== skillName));
      setDeletedSkills([...deletedSkills, skillToDelete]);
    }
  };

  return (
    <section
      id="skills"
      className="my-32 mx-auto max-w-6xl px-4 space-y-6 relative"
    >
      <TitleTwo gradient={skillsGradient} setGradient={setSkillsGradient}>
        My Skills
      </TitleTwo>
      <EditSkillsButton
        editMode={editMode}
        onToggleEdit={() => setEditMode(!editMode)}
      />
      <SkillsDescription />

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <SkillCard
              key={skill.name}
              icon={Icon}
              name={skill.name}
              color={skill.color}
              index={index}
              isEditing={editMode}
              onDelete={handleDeleteSkill}
            />
          );
        })}

        {editMode && <AddNewSkillButton setShowAddModal={setShowAddModal} />}
      </div>

      {showAddModal && (
        <AddSkillModal
          setShowAddModal={setShowAddModal}
          skills={skills}
          deletedSkills={deletedSkills}
          onAddSkill={(newSkill) => {
            if (
              !skills.some((skill) => skill.name === newSkill.name) &&
              !deletedSkills.some((skill) => skill.name === newSkill.name)
            ) {
              setSkills([...skills, newSkill]);
            }
          }}
        />
      )}
    </section>
  );
};

export default Skills;
