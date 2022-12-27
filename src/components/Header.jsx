import Image from 'next/image';
import amazonLogo from '../../public/assets/amazonLogo.png';
import { useRouter } from 'next/router';
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';

function Header() {
  const router = useRouter();

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

        {/* Custom search bar */}
        <div className="hidden sm:flex items-center h-10 rounded-md bg-yellow-400 hover:bg-yellow-500 flex-grow cursor-pointer">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"
            placeholder={
              router.route === '/' ? '🔎 Search in products listed below…' : ''
            }
            onInput={(event) =>
              router.route === '/' && props.onSearchValue(event.target.value)
            }
          />
          <SearchIcon className="h-12 p-4" />
        </div>
      </div>
    </header>
  );
}

export default Header;
