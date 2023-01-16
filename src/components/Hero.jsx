import hero from "../images/hero.jpg"

const Hero = () => {
  return (
    <header className='max-w-[1640px] mx-auto p-4'>
        <div className='h-[60vh] relative'>
            <div className="absolute w-full h-[60vh] bg-black/40 flex flex-col justify-center">
            <div className="px-6">
            <h1 className='py-5 font-bold flex flex-col gap-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
                <span className="text-white">The <span className=' text-orange-500'>Best</span></span>
                <span className=' text-orange-500'>Steakhouse <span className='text-white'>Near You</span></span>
              </h1>
              <button className='w-max border-2 border-orange-500 text-orange-500 py-2 px-10 text-sm sm:text-base shadow-orange-600 shadow hover:scale-110 duration-300'>Book now</button>
            </div>
            </div>
            <img src={hero} alt="meat" className="w-full h-[60vh] object-cover" />
        </div>
    </header>
  )
}

export default Hero;

