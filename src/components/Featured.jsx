import {TweenMax, Power3 } from 'gsap';
import React, { useEffect, useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import imgPlaceholder from '../assets/placeholder.png'
import imgPlaceholder2 from '../assets/placeholder2.png'

export default function Featured() {
    let navigate = useNavigate();
    let thumbnailItem = useRef(null);
    let thumbnailItem2 = useRef(null);
    let thumbnailImg = useRef(null);
    let thumbnailImg2 = useRef(null);
    let thumbnailText = useRef(null);
    let thumbnailText2 = useRef(null);
  


    useEffect(() => {
        TweenMax.to(
            thumbnailItem,
            2,
            {
                opacity: 1,
                x: -30,
                ease: Power3.easeOut
            }
        )

        TweenMax.to(
            thumbnailItem2,
            2,
            {
                opacity: 1,
                x: -30,
                ease: Power3.easeOut
            }
        )

        TweenMax.to(
            thumbnailImg,
            2,
            {
                opacity: 1,
                y: -20,
                ease: Power3.easeOut,
                delay: .2
            }
        )

        TweenMax.to(
            thumbnailImg2,
            2,
            {
                opacity: 1,
                y: -20,
                ease: Power3.easeOut,
                delay: .2
            }
        )

        TweenMax.to(
            thumbnailText,
            2,
            {
                opacity: 1,
                y: -20,
                ease: Power3.easeOut,
                delay: .4
            }
        )

        TweenMax.to(
            thumbnailText2,
            2,
            {
                opacity: 1,
                y: -20,
                ease: Power3.easeOut,
                delay: .4
            }
        )


    }, [])

  return (
    <div className='container mx-auto border-t-2 border-white'>
            <div className='flex flex-wrap justify-between border-t-2 border-b-4 border-white'>
                <div className='w-6/12 pl-3 pr-14 border-r-4 border-white pt-16 pb-8'>
                    <div
                        ref={el => {thumbnailItem = el}} 
                        className='container opacity-0'>
                            <button className='bg-red-600 mb-10 ml-8 px-4 py-2 text-white text-xs rounded-2xl' onClick={()=>{navigate("/news")}}>top story</button>
                    </div>
                    <div className='container'>
                        <NavLink to='/news'>
                            <img
                                ref={el => {thumbnailImg = el}} id='img-container'
                                className='rounded-lg opacity-0' src={imgPlaceholder} alt='' >
                            </img>
                        </NavLink>
                    </div>
                    <div
                    ref={el => {thumbnailText = el}}
                    className='container mt-3 text-white font-reguler text-3xl opacity-0'>
                        <NavLink to='/news'><h1>Ye Planning Rusia Trip to Meet Putin and Perform Sunday Service</h1></NavLink>
                    </div>
                </div>
                <div className='w-6/12 pl-14 pr-3 pt-16 pb-8'>
                    <div 
                        ref={el => {thumbnailItem2 = el}}
                        className='container opacity-0'>
                            <button className=' bg-red-600 mb-10 ml-8 px-4 py-2 text-white text-xs rounded-2xl' onClick={()=>{navigate("/news")}}>chart beat</button>
                    </div>
                    <div className='container'>
                        <NavLink to='/news'>
                            <img 
                                ref={el => {thumbnailImg2 = el}}
                                className='rounded-lg opacity-0' src={imgPlaceholder2} alt='' >
                            </img>
                        </NavLink>
                    </div>
                    <div 
                    ref={el => {thumbnailText2 = el}}
                    className='container mt-3 text-white font-reguler text-3xl opacity-0'>
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
