import React from 'react'
import { NavLink } from 'react-router-dom'
import imgLogo from '../assets/logo@4x.png'
import iconBar from '../assets/menu.png'
import iconSearch from '../assets/magnifying-glass.png'
import iconUser from '../assets/account.png'



export default function Header () {
  return (
    <nav className="sticky top-0 py-5 bg-[#211f20] shadow-sm">
      <div className="container mx-auto">
        <div className="item-center flex">
          <div className="flex w-2/12 items-center ">
            <img src={iconBar} alt="" className="w-8 ml-3"/>
            <NavLink to="/"><img src={imgLogo} alt="" className="w-8/12 ml-8 mt-2" /></NavLink>
          </div>

          <div className="flex w-8/12 items-center ">
            <ul className='flex mx-auto mt-4 text-[16px] font-reguler text-white'>
                <NavLink to="/news"><li className='mr-8'>Charts</li></NavLink>
                <li className='mr-8'>Music</li>
                <li className='mr-8'>Culture</li>
                <li className=''>Media</li>
            </ul>
          </div>

          <div className="right justify-end flex w-2/12">
            <ul className="flex items-center space-x-5 mr-5">
              <li>
                <button><img src={iconSearch} alt="" className="w-5 mt-2"/></button>
              </li>
              <li>
              <button><img src={iconUser} alt="" className="w-6 mt-2"/></button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
