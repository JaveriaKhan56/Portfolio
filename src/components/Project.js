import React from 'react';
import "../tailwind.css";
// import pro1 from "../assets/pro1.png"
// import pro2 from "../assets/aptech.png"

const Project = () => {
  
    const projects = [
    {
      title: "Metric Conversion",
      description:
        "A web-based Metric Converter offering conversion tools for length, area, volume, mass, and temperature. Includes charts, history, and FAQs.",
      // image: pro1,
      tools: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      source: "https://github.com/JaveriaKhan56/Metric-Conversion.git",
    },
    {
      title: "Travel Ease",
      description:
        "A modern travel booking platform designed for explorers worldwide. It features seamless trip planning, secure reservations, Membership, and encrypted payment system.",
      // image: pro2,
      tools: ["PHP", "MySQL", "Bootstrap", "JQuery"],
      source: "https://github.com/JaveriaKhan56/Travel-Ease.git",
    },
    {
      title: "Baby Hub Shop",
      description:
        "A modern travel booking platform designed for explorers worldwide. It features seamless trip planning, secure reservations, Membership, and encrypted payment system.",
      // image: pro2,
      tools: ["Flutter", "Firebase", "Dart"],
      source: "https://github.com/JaveriaKhan56/Baby-Hub-Shop.git",
    },
  ];
  return (
 <div className="flex flex-wrap gap-6 justify-center mt-2">
      {projects.map((project, index) => (
        <div
          key={index}
          className="rounded overflow-hidden shadow-lg flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900"
          style={{ width: 350 }}
      data-aos="flip-right"
      data-aos-duration="1000"
        
        >
          {/* <img
            src={project.image}
            alt={project.title}
            style={{ width: 200 }}
            className="mx-4 mt-3"
          /> */}

          <div className="px-3 py-2">
            <div className="font-bold font-sans text-xl mb-2 text-white text-center">
              {project.title}
            </div>
            <p className="text-gray-300 text-base">{project.description}</p>
          </div>

          {/* Tools */}
          <div className="px-4 pb-2">
            {project.tools.map((tool, i) => (
              <span
                key={i}
                className="inline-block bg-gray-700 rounded-full px-2 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2"
              >
                {tool}
              </span>
            ))}
          </div>

          {/* GitHub link */}
          <div className="px-4 pb-2">
            <a
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gray-700 rounded-full px-2 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2 hover:bg-purple-800 transition no-underline"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="GitHub"
                className="w-4 h-4 mr-1 invert"
              />
              Source
            </a>
          </div>
        </div>
      ))}
    </div>


    
  )
}

export default Project
