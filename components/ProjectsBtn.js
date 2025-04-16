import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowDown } from 'react-icons/bs';

const ProjectsBtn = () => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
  };

  return (
    <div className='mx-auto xl:mx-0'>
      <Link
        title="Download Resume"
        target='_blank'
        href="/Alfredo B Santos Jr.pdf"
        download
        className={`relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group z-10 ${downloaded ? 'pointer-events-none opacity-50' : ''}`}
        onClick={handleDownload}
      >
        <Image
          src={'/myrounded-3.png'}
          width={141}
          height={148}
          alt=''
          className='animate-spin-slow w-fill h-full max-w-[141px] max-h-[148px]'
        />
        <BsArrowDown className='absolute text-4xl group-hover:transition-all duration-300' />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
