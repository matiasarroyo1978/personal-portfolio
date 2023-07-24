import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image 
        src={'/avatar_home.png'} 
        width={452} 
        height={678} 
        loading = 'lazy'
        alt="" 
        className="translate-z-0"
        />
    </div>
  );
};

export default Avatar;
