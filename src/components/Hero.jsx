import React from 'react'

const Hero = () => {
  return (
    <header className='max-w-[1640px] mx-auto p-4'>
        <div className='bg-hero text-white bg-center bg-cover h-[80vh] flex items-center'>
            {/*Overlay */}
            <div className='px-6'>
              <h1 className='py-5 flex flex-col gap-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
                <span>The <span className='font-bold text-orange-500'>Best</span></span>
                <span className='font-bold text-orange-500'>Steakhouse <span className='text-white'>Near You</span></span>
              </h1>
              <button className='border-2 border-orange-500 text-orange-500 py-2 px-10 text-sm sm:text-base shadow-orange-600 shadow'>Book now</button>
            </div>
        </div>
    </header>
  )
}

export default Hero;