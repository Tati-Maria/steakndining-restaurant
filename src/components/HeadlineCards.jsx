import React from 'react'

const HeadlineCards = () => {
  return (
    <section className='max-w-[1640px] mx-auto p-4 py-12'>
        {/*Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <div className='bg-burger bg-center bg-cover text-white p-3 rounded-md space-y-4'>
                <h3 className='font-bold text-xl pt-3 md:text-2xl'>Burgers</h3>
                <p>Our steakhouse is not only known for its high-quality 
                    cuts of steak, but also for its delicious burger menu.
                </p>
                <button className='bg-orange-500 px-4 py-1 border-none hover:bg-white hover:text-orange-500 duration-300'>See Our Menu</button>
            </div>
            <div className='bg-chicken bg-center bg-cover text-white p-3 rounded-md space-y-4'>
                <h3 className="font-bold text-xl pt-3 md:text-2xl">Chicken</h3>
                <p>
                In addition to our delicious steak and burger options, 
                we also offer a variety of chicken dishes to satisfy your cravings. 
                </p>
                <button className='bg-orange-500 px-4 py-1 border-none hover:bg-white hover:text-orange-500 duration-300'>See Our Menu</button>
            </div>
            <div className='bg-meat bg-center bg-cover text-white p-3 rounded-md space-y-4'>
                <h3 className='font-bold text-xl pt-3 md:text-2xl'>Meat</h3>
                <p>
                Our steakhouse menu doesn't stop at just steak and chicken, 
                we also offer a variety of other meats to satisfy your cravings. 
                </p>
                <button className='bg-orange-500 px-4 py-1 border-none hover:bg-white hover:text-orange-500 duration-300'>See Our Menu</button>
            </div>
            <div className='bg-drink bg-center bg-cover text-white p-3 rounded-md space-y-4'>
                <h3 className='font-bold text-xl pt-3 md:text-2xl'>Drinks</h3>
                <p>
                  Our steakhouse offers a wide selection of drinks to complement your meal. 
                  Check out our menu!
                </p>
                <button className='bg-orange-500 px-4 py-1 border-none hover:bg-white hover:text-orange-500 duration-300'>See Our Menu</button>
            </div>
        </div>
    </section>
  )
}

export default HeadlineCards;