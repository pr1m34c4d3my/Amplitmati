import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import imgPlaceholder from '../assets/placeholder.png'
import imgPlaceholder2 from '../assets/placeholder2.png'

export default function Featured() {
    let navigate = useNavigate();
  return (
    <div className='container mx-auto border-t-2 border-white'>
            <div className='flex flex-wrap justify-between border-t-2 border-b-4 border-white'>
                <div className='w-6/12 pl-3 pr-14 border-r-4 border-white pt-16 pb-8'>
                    <div className='container'>
                        <button className='bg-red-600 mb-4 px-4 py-2 text-white text-xs rounded-2xl' onClick={()=>{navigate("/news")}}>top story</button>
                    </div>
                    <div className='container'>
                        <NavLink to='/news'><img className='rounded-lg' src={imgPlaceholder} alt='' ></img></NavLink>
                    </div>
                    <div className='container mt-3 text-white font-reguler text-3xl'>
                        <NavLink to='/news'><h1>Ye Planning Rusia Trip to Meet Putin and Perform Sunday Service</h1></NavLink>
                    </div>
                </div>
                <div className='w-6/12 pl-14 pr-3 pt-16 pb-8'>
                    <div className='container'>
                        <button className=' bg-red-600 mb-4 px-4 py-2 text-white text-xs rounded-2xl' onClick={()=>{navigate("/news")}}>chart beat</button>
                    </div>
                    <div className='container'>
                        <NavLink to='/news'><img className='rounded-lg' src={imgPlaceholder2} alt='' ></img></NavLink>
                    </div>
                    <div className='container mt-3 text-white font-reguler text-3xl'>
                        <NavLink to='/news'><h1>'Euphoria' Dots Top TV Songs Chart After Second Season Premiere</h1></NavLink>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap justify-center items-center mx-auto w-full border-b-4 border-white'>
                <div className='container w-4/12 pt-10 pb-10 px-4'>
                    <div className='container'>
                        <button className=' bg-red-600 mb-3 px-4 py-2 text-white text-xs rounded-2xl'>guitar rig</button>
                    </div>
                    <div className='text-gray-200 text-xs pb-2'>
                        <h3>2 hours ago</h3>
                    </div>
                    <div className='text-xl text-white font-reguler'>
                        <h1>Years & Years Release New 'Starstruck' Remix With Rising J-pop Artist SIRUP</h1>
                    </div>
                </div>
                <div className='container w-4/12 pt-10 pb-10 border-r-4 border-l-4 border-white px-4'>
                    <div className='container'>
                        <button className=' bg-red-600 mb-3 px-4 py-2 text-white text-xs rounded-2xl'>billboard news</button>
                    </div>
                    <div className='text-gray-200 text-xs pb-2'>
                        <h3>10 hours ago</h3>
                    </div>
                    <div className='text-xl text-white font-reguler'>
                        <h1>Bad Bunny Breaks Chart Record, Latest on Kanye West, Britney Spears</h1>
                    </div>
                </div>
                <div className='container w-4/12 pt-10 pb-10 px-4'>
                    <div className='container'>
                        <button className=' bg-red-600 mb-3 px-4 py-2 text-white text-xs rounded-2xl'>hip-hop</button>
                    </div>
                    <div className='text-gray-200 text-xs pb-2'>
                        <h3>20 hours ago</h3>
                    </div>
                    <div className='text-xl text-white font-reguler'>
                        <h1>The Roots, Gregory Porter & More Slated for 2022 Hollywood Bowl Jazz Festival</h1>
                    </div>
                </div>
            </div>
        </div>
  )
}
