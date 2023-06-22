import React from 'react';
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
      <div className='w-[93%] mx-[auto] my-[0] py-[15px] flex justify-between items-center' >
          <Link to='/'>
              <img src="logo.svg" alt="Logo Image" />
          </Link>
          <ul>
              <li className='hover:text-textColor inline-block list-none mr-[20px] text-[15px] cursor-pointer font-[500]'>About</li>
              <li className='hover:text-textColor inline-block list-none mr-[20px] text-[15px] cursor-pointer font-[500]'>Events</li>
              <li className='hover:text-textColor inline-block list-none mr-[20px] text-[15px] cursor-pointer font-[500]'>Pricing</li>
              <li className='hover:text-textColor inline-block list-none mr-[20px] text-[15px] cursor-pointer font-[500]'>Event Organizing</li>
              <li className='hover:text-textColor inline-block list-none mr-[20px] text-[15px] cursor-pointer font-[500]'>Contact</li>
          </ul>
          <div>
              <button className='text-textColor mr-[2em] text-[12px] font-[700]'>Login</button>
              <button className='py-[7px] px-[15px] rounded text-whiteColor bg-textColor text-[12px] font-[700]'>Sign up</button>
          </div>
    </div>
  )
}

export default Nav