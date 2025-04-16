//Links
import Link from "next/link";

//icons
import { 

  RiInstagramLine,
  RiFacebookLine,
  RiGithubLine , 
  RiLinkedinLine ,
  RiMailLine ,
 
} from 'react-icons/ri';

const Socials = () => {
  return (
      <div className='flex items-center gap-x-5 text-lg'>
    
    <Link href={'https://github.com/AlfredoSantos20'} target="_blank" className='hover:text-accent transition-all duration-300' title="GitHub">
      <RiGithubLine/>
    </Link>
    <Link href={'https://www.facebook.com/tazki.santosjr'} target="_blank" className='hover:text-accent transition-all duration-300' title="Facebook">
      <RiFacebookLine/>
    </Link>
    <Link href={'https://www.instagram.com/afrdo_sntsjr/?hl=en'} className='hover:text-accent transition-all duration-300' title="Instagram">
      <RiInstagramLine/>
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300' title="Email">
      <RiMailLine/>
    </Link>
    <Link href={'https://www.linkedin.com/in/alfredo-santos-jr-511921242/'} className='hover:text-accent transition-all duration-300' title="LinkedIn">
      <RiLinkedinLine/>
    </Link>

      </div>
  );
};

export default Socials;
