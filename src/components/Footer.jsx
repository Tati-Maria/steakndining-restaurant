import React from 'react'
import Logo from './Logo';
import {AiFillInstagram, 
    AiOutlineTwitter, 
    AiOutlineWhatsApp, 
    AiOutlineFacebook} from "react-icons/ai";
import {SiUbereats} from "react-icons/si"


const Footer = () => {
  return (
    <footer className='bg-black text-orange-600 pt-12'>
        <div className='max-w-[1640px] mx-auto'>
            {/*Container */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className='space-y-3 text-center md:text-left'>
                    <Logo />
                    <div className='flex items-center justify-center gap-4 md:items-start md:justify-start md:px-2'>
                        <AiFillInstagram size={25} />
                        <AiOutlineFacebook size={25} />
                        <AiOutlineTwitter size={25} />
                        <AiOutlineWhatsApp size={25} />
                    </div>
                </div>
                <div className='flex items-center flex-col md:items-start'>
                    <h2 className='font-bold text-xl'>Contact</h2>
                    <div className='text-center space-y-3 md:text-start'>
                        <address>Address: Av Lorem ipsum dolor  2345</address>
                        <p> tel: 345 7884 44</p>
                    </div>
                </div>
                <div className='flex flex-col items-center md:items-start md:px-2'>
                    <h2 className='font-bold text-xl'>Working Hours</h2>
                    <ul className='space-y-3 py-4'>
                        <li className='grid grid-cols-2 gap-6'>
                            <span>Monday to Friday</span>
                            <span>10am - 10pm</span>
                        </li>
                        <li className='grid grid-cols-2 gap-6'>
                            <span>Saturday</span>
                            <span>12pm - 10pm</span>
                        </li>
                        <li className='grid grid-cols-2 gap-6'>
                            <span>Sunday</span>
                            <span>16pm - 02am</span>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col items-center space-y-3 md:items-start'>
                <button className='border-2 border-orange-600 bg-white shadow-md hover:scale-110 duration-300'>Book a Table</button>
                <div className='
                    bg-green-500 p-3 w-max ml-2'>
                     <SiUbereats size={25} className="text-black" />
                </div>
                </div>
            </div>
            <p className='text-center pt-2 md:text-left md:px-2'>Build By <a href="https://github.com/Tati-Maria" className='underline'> &copy; Maria</a></p>
            <div className='text-center pt-4 py-2 md:text-left md:px-2'>
            <h6 className='font-medium text-lg'>Credits</h6>
            <p>All images used here were handpicked from <a href="https://www.pexels.com/pt-br/" className='underline'>Pexels</a></p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;