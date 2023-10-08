import React, { useState } from 'react';
import collaborate from '../assets/collaborate.png';
import code from '../assets/code.png';
import networking from '../assets/networking.png';

const Tabs = () => {
  const [openTab, setOpenTab] = useState(1);

  const toggleTab = (i) => {
    setOpenTab(i);
  };

  return (
    <>
      <div className='flex flex-wrap mt-6 w-full'>
        <div className='w-9/12 mx-auto'>
          <ul
            className='flex mb-0 list-none flex-wrap pt-3 pb-4  flex-col md:flex-row'
            role='tablist'
          >
            <li className='-mb-px mr-2 last:mr-0 flex-auto text-center'>
              <a
                className={
                  'text-s font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal mb-2 transition-bg-color duration-300' +
                  (openTab === 1
                    ? ' text-white bg-gray-600'
                    : ' text-gray-600 bg-white')
                }
                onClick={(e) => toggleTab(1)}
                data-toggle='tab'
                href='#link1'
                role='tablist'
              >
                Researchers
              </a>
            </li>
            <li className='-mb-px mr-2 last:mr-0 flex-auto text-center'>
              <a
                className={
                  'text-s font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal mb-2 transition-bg-color duration-300' +
                  (openTab === 2
                    ? ' text-white bg-gray-600'
                    : ' text-gray-600 bg-white')
                }
                onClick={(e) => toggleTab(2)}
                data-toggle='tab'
                href='#link2'
                role='tablist'
              >
                Project Owners
              </a>
            </li>
            <li className='-mb-px mr-2 last:mr-0 flex-auto text-center'>
              <a
                className={
                  'text-s font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal mb-2 transition-bg-color duration-300' +
                  (openTab === 3
                    ? ' bg-gray-600 text-white'
                    : ' text-gray-600 bg-white')
                }
                onClick={(e) => toggleTab(3)}
                data-toggle='tab'
                href='#link3'
                role='tablist'
              >
                Guests
              </a>
            </li>
          </ul>
          <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded -z-50'>
            <div className='px-4 py-5 flex-auto'>
              <div
                className={openTab === 1 ? 'grid md:grid-cols-2' : 'hidden'}
                id='#link1'
              >
                <img
                  className='w-[300px] mx-auto my-4'
                  src={collaborate}
                  alt='/'
                />
                <div className='flex flex-col justify-center'>
                  <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-sky-500'>
                    Tailored Experience for Researchers
                  </h1>
                  <p className=''>
                    <b>Effortless Sign-Up and Skill Tagging:</b><br /> Researchers can sign up
                    using their ORCID, and skill tags are automatically generated
                    and refreshed from public records.{' '}
                  </p>
                  <br />
                  <p>
                    <b>Personalized Project Recommendations:</b><br /> KAKEHASHI recommends projects
                    tailored to researchers' expertise based on their public records.
                  </p>
                </div>
              </div>
              <div
                className={openTab === 2 ? 'grid md:grid-cols-2' : 'hidden'}
                id='#link2'
              >
                <img
                  className='w-[300px] mx-auto my-4'
                  src={networking}
                  alt='/'
                />
                <div className='flex flex-col justify-center'>
                  <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-sky-500'>
                    Seamless Management for Project Owners
                  </h1>
                  <p className=''>
                    <b>Automated Project Information Extraction:</b><br /> Project information is
                    directly extracted from existing project webpages, minimizing manual
                    input.
                  </p>
                  <br />
                  <p>
                    <b>Easy Contributor Browsing and Contact:</b><br /> Owners can explore potential
                    contributors who are apt for their project and contact them directly
                    through the platform with a click.{' '}
                  </p>
                </div>
              </div>
              <div
                className={openTab === 3 ? 'grid md:grid-cols-2' : 'hidden'}
                id='#link3'
              >
                <img className='w-[300px] mx-auto my-4' src={code} alt='/' />
                <div className='flex flex-col justify-center'>
                  <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-sky-500'>
                    Engaging Exploration for Guests
                  </h1>
                  <p className=''>
                    <b>Unrestricted Project Browsing:</b><br /> Guests can explore various
                    projects without the necessity of an account.
                  </p>
                  <br />
                  <p>
                    <b>Direct Engagement Opportunities:</b><br />  Guests have the option
                    to contact project owners directly or take a step further
                    by becoming a contributor to a project of interest.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
