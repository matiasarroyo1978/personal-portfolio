import Link from "next/link";
import {
  RiTwitterLine,
  RiLinkedinLine,
  RiWhatsappLine,
} from 'react-icons/ri';


const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href='https://www.twitter.com/arroyomatias19' target="_blank" className="hover:text-accent transition-all duration-300">
       <RiTwitterLine/>
      </Link>
      <Link href='https://www.linkedin.com/in/matias-arroyo19' target="_blank" className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine/>
      </Link>
      <Link href='https://wa.me/543777516220' target="_blank" className="hover:text-accent transition-all duration-300">
        <RiWhatsappLine/>
      </Link>
    </div>
  );
};

export default Socials;
