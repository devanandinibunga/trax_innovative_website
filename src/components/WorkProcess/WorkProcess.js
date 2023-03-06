import React from "react";
import "./WorkProcess.scss";
import { motion } from 'framer-motion';


export const WorkProcess = () => {
  
  const workProcessData = [
    {
      id: "01",
      name: "Concept",
      description: "Quisque tellus risus, adipisci viverra bibendum urna.",
    },
    {
      id: "02",
      name: "Plan",
      description: "Quisque tellus risus, adipisci viverra bibendum urna.",
    },
    {
      id: "03",
      name: "Design",
      description: "Quisque tellus risus, adipisci viverra bibendum urna.",
    },
    {
      id: "04",
      name: "Development",
      description: "Quisque tellus risus, adipisci viverra bibendum urna.",
    },
    {
      id: "05",
      name: "Quality Check",
      description: "Quisque tellus risus, adipisci viverra bibendum urna.",
    },
  ];

  return (
    <div className="work-process-container" >
      <motion.h4 initial={{ opacity: 0, y: '30px' }} animate={{ opacity: 1,y:'-5px'}} transition={{ duration: 1 }} className="work-progress-caption">Quisque tellus risus, adipisci</motion.h4>
      <motion.h1 initial={{ opacity: 0, y: '30px' }} animate={{ opacity: 1,y:'-5px'}} transition={{ duration: 1 }} className="work-progress-title">Our Work Process</motion.h1>
      <div className="work-process-main-container" >
        {workProcessData.map((eachProcess) => (
          <>
            <div className="work-process-each-container">
              <span className="work-process-each-id-span">
                {eachProcess.id}
              </span>
              <p className="work-process-each-title">{eachProcess.name}</p>
              <p>{eachProcess.description}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
