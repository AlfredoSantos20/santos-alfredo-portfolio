import React, { useState } from 'react';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs, SiMysql, SiFirebase, SiAdobexd,  SiLaravel, SiJquery, SiMongodb, SiPhp, SiBootstrap, SiTailwindcss,
} from "react-icons/si";

//  my  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <SiBootstrap key="bootstrap" />,
          <SiTailwindcss key="tailwind" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiMysql key="mysql" />,
          <SiFirebase key="firebase" />,
          <SiLaravel key="laravel" />,
          <SiJquery key="jquery" />,
          <SiMongodb key="mongodb" />,
          <SiPhp key="php" />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [
          <FaFigma key="figma" />, 
          <SiAdobexd key="adobexd" />, 
          
        ],
      },
    ],
  },
  
  {
    title: 'experience',
    info: [
     
      {
        title: 'Intern - NEUST-MGT',
        stage: 'jan 2024 - May 2024',
      },
    ],
  },
  {
    title: 'certificates',
    info: [
      {
        title: 'Digital Video Animation Software as Tools in Marketing and e-Commerce',  
        stage: '2022',
      },
      {
        title: 'Internet Media and Information Literacy Training',
        stage: '2022',
      },
      {
        title: 'Decrypting Cyber Threat: Empowering Individuals and Organizations',
        stage: '2024',
      },
      {
        title: 'Filipino Web Development Peers Monthly community day',
        stage: '2024',
      },
    ],
  },
];

//components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

//framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

//counter
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn('right', 0.6)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-0 -left-[370px]'
      >
        {/* <Avatar/> */}
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2'
          >
            Captivating <span className='text-accent'> stories </span> birth magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn('left', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
          >
            4 years ago, as a first-year college student I began freelancing as a developer creating projects like case studies, websites, 
            and more. Since then, my passion for coding and design has grown exponentially. 
            I&apos;ve had the privilege of working with a variety of clients, each presenting unique 
            challenges and opportunities that have honed my skills and expanded my knowledge.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden md:flex nd:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
          >
            <div className='flex flex-1 xl:gap-x-6'>
              {/* experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={4} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leadning-[1x4] max-w-[100px]'>
                  Years of experience
                </div>
              </div>
              {/* clients */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leadning-[1x4] max-w-[100px]'>
                  Satisfied Clients
                </div>
              </div>
              {/* projects */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leadning-[1x4] max-w-[100px]'>
                  Finished projects
                </div>
              </div>
              {/* certificates */}
              <div className='relative flex-1'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={4} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leadning-[1x4] max-w-[100px]'>
                  Certificates
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn('right', 0.6)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-[480px]'
        >
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 ${
                  index === itemIndex
                    ? 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                    : ''
                }`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
              >
                {/* title */}
                <div className='font-light mg-2 md:mb-0'> {item.title}</div>
                <div className='hidden md:flex'>-</div>
                <div>{item.stage}</div>
                <div className='flex gap-x-4'>
                  {/* icons */}
                  {item.icons?.map((icon, iconIndex) => (
                    <div key={iconIndex} className='text-2xl text-white'>
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
