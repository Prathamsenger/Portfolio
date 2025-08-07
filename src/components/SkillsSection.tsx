import { Code, Database, Bot, Palette, Settings, Zap } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
       {
      title: "generative Ai",
      icon: Bot,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Python", level: 65 },
        { name: "langchain", level: 50 },
        { name: "AI automation", level: 50 },
        { name: "Open source", level: 50 },


      ]
    },
    {
      title: "Frontend Development",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 60 },
        { name: "JavaScript", level: 60 },
        { name: "HTML/CSS", level: 80 },
        { name: "Tailwind CSS", level: 80 },
      ]
    },
    {
      title: "Backend Development",
      icon: Database,
      color: "from-emerald-500 to-teal-500",
      skills: [
        { name: "Node.js", level: 60 },
        { name: "Express.js", level: 60 },
        { name: "MongoDB", level: 60 },
      ]
    },
 
    {
      title: "Design & Tools",
      icon: Palette,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Figma", level: 85 },
        { name: "Git", level: 92 },
        { name: "VS Code", level: 95 },
        { name: "Sketch", level: 70 }
      ]
    }
  ];

  const getSkillBarColor = (level) => {
    if (level >= 90) return "bg-gradient-to-r from-emerald-400 to-emerald-600";
    if (level >= 80) return "bg-gradient-to-r from-blue-400 to-blue-600";
    if (level >= 70) return "bg-gradient-to-r from-yellow-400 to-yellow-600";
    return "bg-gradient-to-r from-gray-400 to-gray-600";
  };

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across frontend, backend, 
            generative AI, and design tools.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600 hover:border-slate-500 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-200 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full ${getSkillBarColor(skill.level)} transform transition-all duration-1000 ease-out rounded-full relative`}
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "REST APIs", "Microservices",
               "Vite", "Sass", "Material-UI","Lucide-react" ,"Bootstrap", "tailwind",
              "Firebase",  "Stripe", "Postman","Multer"
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-slate-600/50 text-gray-200 rounded-full text-sm font-medium border border-slate-500 hover:border-blue-400 hover:text-blue-200 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-2">6 month Internship experience</h4>
            <p className="text-gray-300">Development Experience</p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Settings className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-2">10+ Projects</h4>
            <p className="text-gray-300">Successfully Delivered</p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-2">3+ Tech Stack</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;