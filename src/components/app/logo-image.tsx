import Image from 'next/image';
export const LogoImage = () => {
  return <Image className="rounded-full" src={'/icon.png'} alt="Logo" width={32} height={32}></Image>;
};
