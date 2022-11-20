import Image from 'next/image';

type Props = {
  size?: 256 | 64 | 48 | 40 | 32;
};

const Logo: React.FC<Props> = ({ size = 64 }) => {
  return <Image alt="TivlotCV" src="/images/logos/logo.png" className="rounded" width={size} height={size} />;
};

export default Logo;
