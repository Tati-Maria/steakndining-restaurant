import {useState} from 'react';
import Logo from './Logo';
import {AiOutlineClose,
     AiOutlineMenu, 
     AiOutlineSearch, 
     AiOutlineShoppingCart,
     AiFillTag,
     AiFillSave
} 
from "react-icons/ai";
import {FaWallet} from "react-icons/fa"
import {BsFillHeartFill, BsFillPeopleFill} from "react-icons/bs";
import {TbTruckDelivery, TbHelp} from "react-icons/tb";
import {SiUbereats, SiDoordash} from "react-icons/si"




const NavBar = () => {
    const [open, setOpen] = useState(false);

  return (
    <nav className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        {/*Left side */}
        <div className='flex items-center'>
            <div className='cursor-pointer' onClick={() => setOpen(!open)}>
                <AiOutlineMenu size={30} />
            </div>
            <Logo />
            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                <div className='bg-green-500 p-2 rounded-full -mr-2'>
                <SiUbereats size={25} />
                </div>
                <div className='bg-red-500 p-2 rounded-full'>
                <SiDoordash size={25} />
                </div>
            </div>
        </div>
        {/*search */}
        <div className='bg-gray-200 rounded-full items-center px-2 hidden md:flex sm:w-[400px] lg:[500px]'>
            <AiOutlineSearch size={25} />
            <input className='bg-transparent p-2 focus:outline-none w-full' type="search" placeholder='Search foods' />
        </div>
        {/*Cart Button */}
        <button className='hidden lg:flex items-center gap-2 text-white bg-orange-600 py-2 shadow-sm rounded-full' disabled>
            Book now
        </button>
        {/*Mobile Menu */}
        {/*overlay */}
        {open ? <div className='bg-black/80 fixed w-full h-screen z-10 inset-0' onClick={() => setOpen(!open)} /> : "" }
        {/*side menu */}
        <div className={open ? "fixed inset-0 w-[300px] h-screen bg-white z-10 duration-300" : "fixed top-0 -left-[100%] w-[300px] h-screen bg-white z-10 duration-300" }>
            <AiOutlineClose onClick={() => setOpen(!open)} size={30} className='absolute right-4 top-4 cursor-pointer hover:text-red-600 duration-300 hover:rotate-180' />
            <div className='mt-4'>
                <Logo />
            </div>
           <ul className='flex flex-col p-4 text-gray-800 mt-10'>
           <li className='flex items-center gap-2 py-4'>
                <TbTruckDelivery size={25} />
                <span className='text-xl'>Delivery</span>
            </li>
            <li className='flex items-center gap-2 py-4'>
                <BsFillHeartFill size={25}/>
                <span className='text-xl'>Favorites</span>
            </li>
            <li className='flex items-center gap-2 py-4'>
                <FaWallet  size={25}/>
                <span className='text-xl'>Wallet</span>
            </li>
            <li className='flex items-center gap-2 py-4'>
                <TbHelp size={25} />
                <span className='text-xl'>Help</span>
            </li>
            <li className='flex items-center gap-2 py-4'>
                <AiFillTag size={25} />
                <span className='text-xl'>Promotions</span>
            </li>
            <li className='flex items-center gap-2 py-4'>
                <AiFillSave size={25} />
                <span className='text-xl'>Best One</span>
            </li>
            <li className='flex items-center gap-2 py-4'>
                <BsFillPeopleFill size={25} />
                <span className='text-xl'>Invite Friends</span>
            </li>
           </ul>
        </div>
    </nav>
  )
}

export default NavBar;