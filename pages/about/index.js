import React, { useState } from 'react';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs, SiMysql, SiFirebase, SiAdobexd, SiLaravel, SiJquery, SiMongodb, SiPhp, SiBootstrap, SiTailwindcss,
  SiPostgresql, SiStrapi, SiNestjs, SiFlutter, SiPython
} from "react-icons/si";

// Data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <div className="group relative" key="html5">
            <FaHtml5 className="group-hover:text-[#E34F26] transition-all duration-300 transform group-hover:scale-110" />
          </div>,
          <div className="group relative" key="css3">
            <FaCss3 className="group-hover:text-[#1572B6] transition-all duration-300 transform group-hover:scale-110" />
          </div>,
          <div className="group relative" key="bootstrap">
            <SiBootstrap className="group-hover:text-[#563D7C] transition-all duration-300 transform group-hover:scale-110" />
          </div>,
          <div className="group relative" key="tailwind">
            <SiTailwindcss className="group-hover:text-[#06B6D4] transition-all duration-300 transform group-hover:scale-110" />
          </div>,
          <div className="group relative" key="js">
            <FaJs className="group-hover:text-[#F7DF1E] transition-all duration-300 transform group-hover:scale-110" />
          </div>,
          <div className="group relative" key="react">
            <FaReact className="group-hover:text-[#61DAFB] transition-all duration-300 transform group-hover:scale-110" />
          </div>,
          <div className="group relative" key="nextjs">
            <SiNextdotjs className="group-hover:text-[#000000] transition-all duration-300 transform group-hover:scale-110" />
          </div>,
          <div className="group relative" key="mysql">
            <SiMysql className="group-hover:text-[#4479A1] transition-all duration-300 transform group-hover:scale-110" />
          </div>,
          <div className="group relative" key="firebase">
            <SiFirebase className="group-hover:text-[#FFCB2F] transition-all duration-300 transform group-hover:scale-110" />
          </div>,
          <div className="group relative" key="laravel">
            <SiLaravel className="group-hover:text-[#FF2D20] transition-all duration-300 transform group-hover:scale-110" />
          </div>,
          <div className="group relative" key="jquery">
            <SiJquery className="group-hover:text-[#0769AD] transition-all duration-300 transform group-hover:scale-110" />
          </div>,
          <div className="group relative" key="mongodb">
            <SiMongodb className="group-hover:text-[#47A248] transition-all duration-300 transform group-hover:scale-110" />
          </div>,
          <div className="group relative" key="php">
            <SiPhp className="group-hover:text-[#777BB4] transition-all duration-300 transform group-hover:scale-110" />
          </div>,
          <div className="group relative" key="postgresql">
            <SiPostgresql className="group-hover:text-[#336791] transition-all duration-300 transform group-hover:scale-110" />
          </div>,
          <div className="group relative" key="strapi">
            <SiStrapi className="group-hover:text-[#2F2F2F] transition-all duration-300 transform group-hover:scale-110" />
          </div>,
          <div className="group relative" key="nestjs">
            <SiNestjs className="group-hover:text-[#E0234E] transition-all duration-300 transform group-hover:scale-110" />
          </div>,
          <div className="group relative" key="flutter">
            <SiFlutter className="group-hover:text-[#02569B] transition-all duration-300 transform group-hover:scale-110" />
          </div>,
          <div className="group relative" key="python">
            <SiPython className="group-hover:text-[#3776AB] transition-all duration-300 transform group-hover:scale-110" />
          </div>,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [
          <div className="group relative" key="figma">
            <FaFigma className="group-hover:text-[#F24E1E] transition-all duration-300 transform group-hover:scale-110" />
          </div>,
          <div className="group relative" key="adobexd">
            <SiAdobexd className="group-hover:text-[#FF61F6] transition-all duration-300 transform group-hover:scale-110" />
          </div>,
        ],
      },
    ],
  },
  
  {
    title: 'experience',
    info: [
      {
        title: 'Intern - NEUST-MGT',
        stage: 'Jan 2024 - May 2024',
      },
      {
        title: 'Software Developer - QUANTUM METAL GT',
        stage: 'Nov 2024 - 2025',
      },
      {
        title: 'Software Developer - GO8',
        stage: '2025 - Present',
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

import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);

  const startYear = 2021;
  const currentYear = new Date().getFullYear();
  const yearsExperience = currentYear - startYear;

  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      <motion.div
        variants={fadeIn('right', 0.6)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-0 -left-[370px]'
      >
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
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
            {yearsExperience} years ago, as a first-year college student I began freelancing as a developer creating projects like case studies, websites, 
            and more. Since then, my passion for coding and design has grown exponentially. 
          </motion.p>
          <motion.div
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden md:flex max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
          >
            <div className='flex flex-1 xl:gap-x-6'>
              <div className='relative flex-1'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={yearsExperience} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]' >
                  Years of experience
                </div>
              </div>
              <div className='relative flex-1'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]' >
                  Satisfied Clients
                </div>
              </div>
              <div className='relative flex-1'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]' >
                  Finished projects
                </div>
              </div>
              <div className='relative flex-1'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={4} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]' >
                  Certificates
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn('right', 0.6)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-[480px] xl:h-auto overflow-y-auto'
        >
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 ${
                  index === itemIndex
                    ? 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                    : 'text-white/60 after:w-[50%] after:bg-white/60'
                }`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
              >
                <div className='font-light mb-2 md:mb-0'> {item.title}</div>
                <div className='hidden md:flex'>-</div>
                <div>{item.stage}</div>
                <div className='flex flex-wrap gap-x-4 gap-y-2'>
                  {item.icons?.map((icon, iconIndex) => (
                    <div
                      key={iconIndex}
                      className='text-2xl text-white group relative cursor-pointer'
                    >
                      {icon}
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent to-transparent opacity-0 group-hover:opacity-80 transition-all duration-300'></div>
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
