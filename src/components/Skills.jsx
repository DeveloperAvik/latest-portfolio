import React from "react";

const skills = [
  { name: "HTML", level: 85 },
  { name: "CSS", level: 80 },
  { name: "Tailwind CSS", level: 90 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 75 },
  { name: "Node JS", level: 70 },
  { name: "C / C++", level: 80 },
  { name: "Express JS", level: 80 },
  { name: "MongoDB", level: 80 },
  { name: "MYSQL", level: 80 },
  { name: "Django", level: 60 },
];

const SkillBar = () => {
  return (
    <div className="  p-6 rounded-lg max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-4 text-center ">Development Skill</h2>
      {skills.map((skill, index) => (
        <div key={index} className="mb-4">
          <div className="flex justify-between">
            <span className="text-gray-600">{skill.name}</span>
            <span className="text-gray-600">{skill.level}%</span>
          </div>
          <progress
            className="progress progress-error h-1.5"
            value={skill.level}
            max="100"
          ></progress>
        </div>
      ))}
    </div>
  );
};

export default SkillBar;
