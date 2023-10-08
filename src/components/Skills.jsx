import React from 'react';
import html from '../assets/skills/html.png';
import css from '../assets/skills/css.png';
import aws from '../assets/skills/aws.png';
import flask from '../assets/skills/flask.png';
import github1 from '../assets/skills/github1.png';
import javascript from '../assets/skills/javascript.png';
import mongo from '../assets/skills/mongo.png';
import node from '../assets/skills/node.png';
import python from '../assets/skills/python.png';
import reactImg from '../assets/skills/react.png';
import sql from '../assets/skills/sql.png';
import tailwind from '../assets/skills/tailwind.png';

const Skills = () => {
  const skillData = [
    { src: html, alt: 'html', name: 'HTML' },
    { src: css, alt: 'css', name: 'CSS' },
    { src: javascript, alt: 'javascript', name: 'JavaScript' },
    { src: reactImg, alt: 'react', name: 'React' },
    { src: node, alt: 'node', name: 'Node.js' },
    { src: mongo, alt: 'mongo', name: 'MongoDB' },
    { src: python, alt: 'python', name: 'Python' },
    { src: flask, alt: 'flask', name: 'Flask' },
    { src: sql, alt: 'SQL', name: 'SQL' },
    { src: tailwind, alt: 'tailwind', name: 'Tailwind CSS' },
    { src: github1, alt: 'github', name: 'GitHub' },
    { src: aws, alt: 'aws', name: 'AWS' },
  ];

  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <h2 className='text-4xl md:text-5xl font-bold text-center'>
          Technologies Used
        </h2>
        <p className='text-lg md:text-2xl py-8 text-gray-600 text-center'>
          KAKEHASHI: Bridging project creators and skilled collaborators through
          AI-driven connections in the open science landscape.
        </p>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {skillData.map((skill, index) => (
            <div
              key={index}
              className='p-6 shadow-lg shadow-orange-500 rounded-xl hover:scale-105 ease-in duration-300'
            >
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <img src={skill.src} width='64' height='64' alt={skill.alt} />
                </div>
                <div className='flex flex-col items-center justify-center'>
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
