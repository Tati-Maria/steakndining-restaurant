import React, {useState} from 'react'
import Title from './Title';
import {toast} from "react-toastify";
import { SyncLoader } from 'react-spinners';

const ReserveForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [guests, setGuests] = useState(0);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [submit, setSubmit] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        setSubmit(true)
        setTimeout(() => {
            toast.success("Reservetion made with success 😀", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1500
            });
            setSubmit(false)
            setDate(""),
            setEmail("")
            setGuests(0)
            setName("")
            setTime("")
        }, 1000)
    }

  return (
    <section className='py-12 bg-orange-100' id="reserve">
        <Title title="Reservation" />
        <div className='max-w-[1200px] mx-auto p-4'>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <div className='space-x-4 flex items-center'>
                <label htmlFor="name" className='font-medium'>
                    Name:
                </label>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                    placeholder='Your name'
                    className='py-2 px-1 w-full rounded-md shadow-md shadow-orange-500'
                     />
                </div>
                <br/>
                <div className='space-x-4 flex items-center'>
                <label htmlFor="email" className='font-medium'>
                    Email: 
                </label>
                    <input 
                    type="email" 
                    value={email} 
                    id="email"
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Your email"
                    required
                    className='py-2 px-1 w-full rounded-md shadow-md shadow-orange-500'
                     />
                </div>
                <br/>
                <div className='space-x-4 flex items-center'>
                <label htmlFor="guests" className='font-medium'>
                    Guests:
                </label>
                    <input 
                    type="number" 
                    value={guests} 
                    id="guests"
                    min="1"
                    max="10"
                    placeholder='Number of guests'
                    onChange={e => setGuests(e.target.value)}
                    required
                    className='py-2 px-1 rounded-md shadow-md shadow-orange-500'
                     />
                </div>
                <br/>
                <div className='space-x-4'>
                <label htmlFor="date" className='font-medium'>
                    Date:
                </label>
                    <input 
                    type="date" 
                    value={date}
                    id="date" 
                    onChange={e => setDate(e.target.value)}
                    required
                    className='py-2 px-1 w-max rounded-md shadow-md shadow-orange-500'
                    />
                </div>
                <br />
                <div className='space-x-4'>
                <label htmlFor="time" className='font-medium'>
                    Time:
                </label>
                    <select 
                    name="time" 
                    value={time} 
                    onChange={e => setTime(e.target.value)} 
                    required
                    className='py-2 px-1 w-max rounded-md shadow-md shadow-orange-500'
                    >
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
                <br />
                {submit && <SyncLoader color='#222' size={10} />}
                <button 
                className='border-none bg-white shadow-md w-full lg:w-max lg:hover:scale-110  duration-300'
                type='submit'>
                    Book Now
                </button>
            </form>
        </div>
    </section>
  )
}

export default ReserveForm;