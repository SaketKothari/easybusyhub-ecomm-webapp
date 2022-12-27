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
    <header className="sticky top-0 z-50">
      {/* Top Nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mr-5 mt-2 flex items-center flex-grow sm:flex-grow-0">
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

        {/* Right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link cursor-pointer">
            <p className="hover:underline">Sign in</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="relative link flex items-center">
            <span
              className={`absolute top-0 right-0 md:right-10 h-4  bg-yellow-400 text-center rounded-full text-black font-bold`}
            >
              1
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
