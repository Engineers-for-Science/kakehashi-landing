import React from 'react';
import postgre from '../assets/skills/postgre.png';
import ts from '../assets/skills/ts.png';
import github1 from '../assets/skills/github1.png';
import node from '../assets/skills/node.png';
import python from '../assets/skills/python.png';
import fireBase from '../assets/skills/firebase.png';
import pinecone from '../assets/skills/pinecone.png';
import tailwind from '../assets/skills/tailwind.png';
import radixUI from '../assets/skills/radixUI.png';
import shadcn from "../assets/skills/shadcn-ui.png";
import nextJS from "../assets/skills/nextjs.png";
import gpt from "../assets/skills/gpt.png";

const Skills = () => {
  const skillData = [
    { src: ts, alt: 'ts', name: 'TypeScript' },
    { src: python, alt: 'python', name: 'Python' },
    { src: nextJS, alt: 'nextJS', name: 'Next.js' },
    { src: gpt, alt: 'gpt', name: 'GPT' },
    { src: node, alt: 'node', name: 'Node.js' },
    { src: postgre, alt: 'postgre', name: 'PostgreSQL' },
    { src: tailwind, alt: 'tailwind', name: 'Tailwind CSS' },
    { src: github1, alt: 'github', name: 'GitHub' },
    { src: radixUI, alt: 'radixUI', name: 'radixUI' },
    { src: fireBase, alt: 'fireBase', name: 'FireBase' },
    { src: pinecone, alt: 'pinecone', name: 'PineconeDB' },
    { src: shadcn, alt: 'shadcn', name: 'shadcnUI' },
  ];

  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Technologies Used
        </h2>
        <p className="text-lg md:text-2xl py-8 text-gray-600 text-center">
          Vibrant platform that seamlessly unites project creators and collaborators
          in the pulsating heart of the open science domain
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillData.map((skill, index) => (
            <div
              key={index}
              className="p-6 shadow-lg shadow-grey-500 rounded-xl hover:scale-105 ease-in duration-300"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <img src={skill.src} width="64" height="64" alt={skill.alt} />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>{skill.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
