import React, { useState } from 'react'
import {menu} from "../data/menu";
import {AiOutlineArrowRight, AiOutlineArrowLeft} from "react-icons/ai"

const OurMenu = () => {
    const [categories, setCategories] = useState("all");
    const [prices, setPrices] = useState("all");
    const [food, setFoods] = useState(menu);
    const [currentPage, setCurrentPage] = useState(1);
    //number of elements per page
    const itemsPerPage = 8;

    //handle Category
    const categorySelected = (e) => {
        setCategories(e.target.value);
        setCurrentPage(1)
    }

    //handle price
    const priceSelected = (e) => {
        setPrices(e.target.value);
        setCurrentPage(1)
    }

    //handle page change
    const pageChange = (newPage) => {
        setCurrentPage(newPage);
    }

    //Filter Data
    const filteredMenu = food.filter(item => categories === "all" || item.category === categories)
    .filter(item => {
        if(prices === "€") {
            return item.price >= 4 && item.price < 8;
        } else if(prices === "€€") {
            return item.price >= 8 && item.price < 20
        } else if (prices === "€€€") {
            return item.price >= 20 && item.price <= 40
        } else {
            return true;
        }
    }).sort((a, b) => b.price - a.price);

    //slice the new data to different pages
    const paginatedData = filteredMenu.slice(
        (currentPage -1) * itemsPerPage,
        currentPage * itemsPerPage
    ) ;


  return (
    <section className='max-w-[1640px] mx-auto p-4 py-12'>
        <h2 className='text-center font-bold text-4xl md:text-5xl lg:text-6xl pb-10 text-orange-500'>Our Menu</h2>
        {/*filter */}
        <div className='flex items-center justify-center gap-6'>
            {/*filter type */}
            <div className='border-2 border-orange-500 p-2 rounded-sm flex items-center gap-2'>
               <label htmlFor="category" className='font-medium'>Filter By Category</label>
               <select name="category" id='category' onChange={categorySelected} className='outline-none border-none focus:outline-orange-500'>
                <option value="" className=''></option>
                <option value="all">All</option>
                <option value="steak">steak</option>
                <option value="burger">burgers</option>
                <option value="chicken">chicken</option>
                <option value="drink">drinks</option>
                <option value="extra">extras</option>
                </select> 
            </div>
            <div className='border-2 border-orange-500 p-2 rounded-sm flex items-center gap-2'>
            {/*filter price */}
            <label htmlFor="price" className='font-medium'>Filter By Price</label>
            <select name="price" id='price' onChange={priceSelected} className='outline-none border-none focus:outline-orange-500'>
                <option value=""></option>
                <option value="all">All</option>
                <option value="€">€</option>
                <option value="€€">€€</option>
                <option value="€€€">€€€</option>
            </select>
            </div>
        </div>
        <section className='grid grid-cols-1 py-10 gap-6 md:grid-cols-2 lg:grid-cols-4'>
        {paginatedData.map(item => (
            <div key={item.id} className="hover:scale-110 cursor-pointer duration-300">
                <img src={item.image} alt={item.name} className="w-full h-[150px] object-cover rounded-t-md shadow" />
                <div className='flex items-center justify-between py-4 px-2 bg-orange-500 rounded-b-md'>
                    <p className=''>{item.name}</p>
                    <p className='font-bold'>€ {item.price}</p>
                </div>
            </div>
        ))}
        </section>
        <div className='flex items-center justify-center gap-6'>
            <button className='text-orange-500 border-none px-2 disabled:text-orange-200' disabled={currentPage === 1} onClick={() => pageChange(currentPage -1)}>
                <AiOutlineArrowLeft size={25} />
            </button>
            <button className='text-orange-500 border-none px-2 disabled:text-orange-200' disabled={currentPage === Math.ceil(filteredMenu.length / itemsPerPage)}
            onClick={() => pageChange(currentPage + 1)}
            >
               <AiOutlineArrowRight size={25} />
            </button>
        </div>
    </section>
  )
}

export default OurMenu;