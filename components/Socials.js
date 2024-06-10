//Links
import Link from "next/link";

//icons
import { 
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine, 
  RiBehanceLine,
  RiPinterestLine,
 
} from 'react-icons/ri';

const Socials = () => {
  return (
      <div className='flex items-center gap-x-5 text-lg'>
    
          <Link href={'https://www.facebook.com/tazki.santosjr'} className='hover:text-accent transition-all duration-300'>
            <RiFacebookLine/>
          </Link>
          <Link href={'https://www.instagram.com/afrdo_sntsjr/?hl=en'} className='hover:text-accent transition-all duration-300'>
            <RiInstagramLine/>
          </Link>
          <Link href={''} className='hover:text-accent transition-all duration-300'>
            <RiYoutubeLine/>
          </Link>
          <Link href={''} className='hover:text-accent transition-all duration-300'>
            <RiDribbbleLine/>
          </Link>
          <Link href={''} className='hover:text-accent transition-all duration-300'>
            <RiPinterestLine/>
          </Link>
      </div>
  );
};

export default Socials;
