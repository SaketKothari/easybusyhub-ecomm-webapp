import Image from 'next/image';
import amazonLogo from '../../public/assets/amazonLogo.png';

function Header() {
  return (
    <header>
      {/* Top Nav */}
      <div>
        <div>
          <Image src={amazonLogo} width={150} height={40} alt="Amazon-Logo" />
        </div>
      </div>
    </header>
  );
}

export default Header;
