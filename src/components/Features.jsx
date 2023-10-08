import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <div name='features' className='w-full py-24 mt-32'>
      <div className='max-w-[1240px] mx-auto px-2'>
        <h2 className='text-4xl md:text-5xl font-bold text-center'>
          Experiences you've never had before
        </h2>
        <p className='text-lg md:text-2xl py-8 text-gray-600 text-center'>
          KAKEHASHI: Bridging project creators and skilled collaborators through
          AI-driven connections in the open science landscape.
        </p>

        {/* Cards container */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
          {/* Individual Cards */}
          <div className='flex shadow-xl pt-4'>
            <div>
              <AiOutlineCheck className='w-7 mr-4 text-green-600 font-bold text-2xl' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>AI Matching Algorithm</h3>
              <p className='text-lg pt-2 pb-4 pr-4'>
                Swiftly matches users based on skills, project requirements, and interests.{' '}
              </p>
            </div>
          </div>

          {/* Individual Cards */}
          <div className='flex shadow-xl pt-4'>
            <div>
              <AiOutlineCheck className='w-7 mr-4 text-green-600 font-bold text-2xl' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>User Profiles</h3>
              <p className='text-lg pt-2 pb-4'>
                Allows project creators and collaborators to highlight
                their skills, past projects, and interests.
              </p>
            </div>
          </div>

          {/* Individual Cards */}
          <div className='flex shadow-xl pt-4'>
            <div>
              <AiOutlineCheck className='w-7 mr-4 text-green-600 font-bold text-2xl' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Real-time Communicate</h3>
              <p className='text-lg pt-2 pb-4'>
                Integrated chat and notification systems for immediate collaboration.
              </p>
            </div>
          </div>

          {/* Individual Cards */}
          <div className='flex shadow-xl pt-4'>
            <div>
              <AiOutlineCheck className='w-7 mr-4 text-green-600 font-bold text-2xl' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Responsive Design</h3>
              <p className='text-lg pt-2 pb-4 mr-1'>
                Accessible on all devices, from desktops to mobiles.
              </p>
            </div>
          </div>
        </div>

        <a href="https://kakehashi-platform.vercel.app/" target="_blank" rel="noreferrer">
          <div className='flex justify-between items-center'>
            <div
              className='mx-auto md:flex rounded-md  mt-10 px-8 py-2 text-white border border-black bg-black hover:bg-transparent hover:text-black hover:border-black'
            >
              Try it now
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Features;
