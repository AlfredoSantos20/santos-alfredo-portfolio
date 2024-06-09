//NEXT IMAGE
import Image from 'next/image';

//next link
import Link from 'next/link';

//icons
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
  <div className='mx-auto xl:mx-0'>
    <Link href={'/work'} className='relative w-[175px] h-[175px] flex justify-center items-center
    bg-circleStar bg-cover bg-center bg-no-repeat group'>
      <Image src={'/myrounded-3.png'} width={141} height={148} alt='' className='animate-spin-slow w-fill h-full max-w-[141px] 
      max-h-[148px]'/>
      <HiArrowRight className='absolute text-4xl group-hover:transition-all duration-300'/>
      </Link>
  </div>
  );
};

export default ProjectsBtn;
