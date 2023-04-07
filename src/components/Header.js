import Image from 'next/image';
import { MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'

export function Header() {
  return (
    <header className="w-full sticky flex flex-col">
      <div className="w-full flex items-center justify-between px-1 py-2 bg-amazon_blue flex-grow space-x-3">

        {/* Logo */}
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={90}
            height={40}
            alt="Amazon Logo"
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/* Search */}
        <div className="hidden sm:flex w-[60%] h-10 items-center bg-yellow-300 hover:bg-yellow-400 rounded-md cursor-pointer">
          <input
            type="text"
            className="w-6 h-full p-2 rounded-l-md flex-grow flex-shrink outline-none"
          />
          <MagnifyingGlassIcon className='h-12 p-4' />
        </div>

        {/* Right Column */}

        <div className="flex flex-grow justify-between p-1 items-center text-white text-sm">
          <div className="cursor-pointer">
            <p>Hi Dru</p>
            <p className="font-bold">Account & Lists</p>
          </div>

          <div className="cursor-pointer">
            <p>Returns</p>
            <p className="font-bold">& Orders</p>
          </div>

          <div className="flex items-center cursor-pointer">
            <div className="relative">
              <ShoppingCartIcon className="w-8 h-8" />
              <span className="absolute top-[-3px] right-[-3px] pb-2 rounded-full w-4 h-4 bg-yellow-200 text-black text-center text-xs">0</span>
            </div>
            <p className="font-bold">Cart</p>
          </div>
        </div>

      </div>


      {/* <div className="bottom">bottom</div> */}
    </header>
  )
};