import React from 'react';
import meat from "../images/meat.jpg";
import chicken from "../images/chicken.jpg";
import drinks from "../images/drink.jpg";
import burger from "../images/burger.jpg"

const HeadlineCards = () => {
  return (
    <section className='max-w-[1640px] mx-auto p-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {/*Card */}
        <div className='rounded-xl relative'>
            {/*overlay */}
            <div className='absolute w-full h-full bg-black/40 rounded-md text-white'>
           <div className='p-3 space-y-2'>
           <h3 className='font-bold text-xl pt-3 md:text-2xl'>Burgers</h3>
                <p>Our steakhouse is not only known for its high-quality 
                    cuts of steak, but also for its delicious burger menu.
                </p>
                <button className='w-max bg-orange-500 px-4 py-1 border-none hover:bg-white hover:text-orange-500 duration-300'>See Our Menu</button>
           </div>
            </div>
            <img src={burger} alt="burger picture" className='max-h-[250px] md:max-h-[200px] w-full object-cover h-full rounded-md' />
        </div>
        {/*Card */}
        <div className='rounded-xl relative'>
            {/*overlay */}
            <div className='absolute w-full h-full bg-black/40 rounded-md text-white'>
           <div className='p-3 space-y-2'>
           <h3 className='font-bold text-xl pt-3 md:text-2xl'>Chicken</h3>
                <p>
                In addition to our delicious steak and burger options, 
                we also offer a variety of chicken dishes to satisfy you.
                </p>
                <button className='w-max bg-orange-500 px-4 py-1 border-none hover:bg-white hover:text-orange-500 duration-300'>See Our Menu</button>
           </div>
            </div>
            <img src={chicken} alt="chicken picture" className='max-h-[250px] md:max-h-[200px] w-full object-cover h-full rounded-md' />
        </div>
        {/*Card */}
        <div className='rounded-xl relative'>
            {/*overlay */}
            <div className='absolute w-full h-full bg-black/40 rounded-md text-white'>
           <div className='p-3 space-y-2'>
           <h3 className='font-bold text-xl pt-3 md:text-2xl'>Meat</h3>
                <p>
                Our steakhouse menu doesn't stop at just steak and chicken, 
                we also offer a variety of other meats. 
                </p>
                <button className='w-max bg-orange-500 px-4 py-1 border-none hover:bg-white hover:text-orange-500 duration-300'>See Our Menu</button>
           </div>
            </div>
            <img src={meat} alt="meat picture" className='max-h-[250px] md:max-h-[200px] w-full object-cover h-full rounded-md' />
        </div>
        {/*Card */}
        <div className='rounded-xl relative'>
            {/*overlay */}
            <div className='absolute w-full h-full bg-black/40 rounded-md text-white'>
           <div className='p-3 space-y-2'>
           <h3 className='font-bold text-xl pt-3 md:text-2xl'>Drinks</h3>
                <p>
                Our steakhouse offers a wide selection of drinks to complement your meal. 
                  Check out our menu!
                </p>
                <button className='w-max bg-orange-500 px-4 py-1 border-none hover:bg-white hover:text-orange-500 duration-300'>See Our Menu</button>
           </div>
            </div>
            <img src={drinks} alt="drinks picture" className='max-h-[250px] md:max-h-[200px] w-full object-cover h-full rounded-md' />
        </div>
    </section>
  )
}

export default HeadlineCards;