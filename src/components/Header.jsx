import Image from 'next/image';
import amazonLogo from '../../public/assets/amazonLogo.png';

function Header() {
  return (
    <header>
      {/* Top Nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src={amazonLogo}
            onClick={() => router.push('/')}
            width={150}
            height={40}
            alt="Amazon-Logo"
            objectFit="contain"
            className="cursor-pointer active:transform active:scale-90"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
