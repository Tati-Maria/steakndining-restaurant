import React from 'react'
import Logo from './Logo';
import {AiFillInstagram, 
    AiOutlineTwitter, 
    AiOutlineWhatsApp, 
    AiOutlineFacebook} from "react-icons/ai";
import {SiUbereats} from "react-icons/si"


const Footer = () => {
  return (
    <footer className='bg-black text-orange-600 pt-4'>
        <div className='max-w-[1640px] mx-auto p-4'>
            <div className='border-b border-b-orange-400 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                <div>
                    <h5 className='font-medium text-lg py-4'>Address</h5>
                    <p className='flex flex-col'>
                        <span>Av Lorem ipsum dolor sit</span>
                        <span>LS 4547</span>
                    </p>
                </div>
                <div>
                    <h5 className='font-medium text-lg py-4'>Opening Hours</h5>
                    <div>
                        <p>Mon-Fri: 11am - 10pm</p>
                        <p>Sat-Sun: 11am - 12pm</p>
                    </div>
                </div>
                <div>
                    <h5 className='font-medium text-lg py-4'>Contact Us</h5>
                    <div>
                        <p>info@steakndining.com</p>
                        <p>Tel: 265 376 2345</p>
                    </div>
                </div>
                <div>
                    <h5 className='font-medium text-lg py-4'>Socials</h5>
                    <div className='flex items-center gap-5'>
                    <AiFillInstagram size={20}/>
                    <AiOutlineFacebook size={20} />
                    <AiOutlineTwitter size={20}/>
                    <AiOutlineWhatsApp size={20}/>
                    </div>
                </div>
            </div>
                        
            <div className='text-center pt-4 pb-2'>
            <h6 className='font-medium text-lg'>Credits</h6>
            <p>All images used here were handpicked from <a href="https://www.pexels.com/pt-br/" className='underline'>Pexels</a></p>
            <p className='text-center pt-2'>Build By <a href="https://github.com/Tati-Maria" className='underline'> &copy; Maria</a></p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;