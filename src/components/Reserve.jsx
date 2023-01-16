import React from 'react'
import Title from './Title';



const Reserve = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <section className='py-12 bg-orange-50'>
        <Title title="Reservations" />
        <div className='max-w-[1640px] mx-auto p-4 grid grid-cols- items-center'>
            <form className='' onSubmit={handleSubmit}>
                {/*Inputs */}
                <fieldset className='grid grid-cols-1 gap-6'>
                <div className='grid grid-cols-1'>
                <label htmlFor="name">Name</label>
                <input 
                className='w-full py-1 px-2 border-2 border-orange-500 rounded-md' 
                type="text" 
                placeholder='Your name' 
                id='name' required 
                />
                </div>
                <div className='grid grid-cols-1'>
                    <label htmlFor="email">Email</label>
                    <input 
                    className='w-full py-1 px-2 border-2 border-orange-500 rounded-md' 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder='Your email' 
                    required 
                    />
                </div>
                </fieldset>
                <fieldset className='grid grid-cols-1 py-2 gap-5 mt-2'>
                    <div className='flex flex-col'>
                        <label htmlFor="date">Date</label>
                        <input type="date" name="date" id="date" className='w-max py-1 px-2 border-2 border-orange-500 rounded-md' required/>
                    </div>
                <div className='flex items-center bg-white border-2 border-orange-500 gap-2 rounded-md w-max p-2'>
                    <label htmlFor="time">Time</label>
                    <select name="time" id="time" className='outline-none border-none bg-transparent focus:outline-orange-500' required>
                        <option value="11:30">11:30</option>
                        <option value="12:30">12:30</option>
                        <option value="13:30">13:30</option>
                        <option value="14:30">14:30</option>
                        <option value="15:30">15:30</option>
                        <option value="16:30">16:30</option>
                        <option value="17:30">17:30</option>
                        <option value="18:30">18:30</option>
                        <option value="19:30">19:30</option>
                        <option value="20:30">20:30</option>
                        <option value="21:30">21:30</option>
                        <option value="22:30">22:30</option>
                    </select>
                </div>
                <div className='flex items-center bg-white border-2 border-orange-500 gap-2 rounded-md w-max p-2'>
                    <label htmlFor="number">Party Size</label>
                    <select name="number" id="number">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
                </fieldset>
                <input type="button" value="Book Now"  className='bg-white py-2 px-6 border-2 border-orange-500 rounded-md shadow-md mt-5'/>
            </form>
        </div>
    </section>
  )
}

export default Reserve