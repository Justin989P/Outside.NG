import React from 'react';
import {Link,useLocation} from 'react-router-dom'

const Nav = () => {
    const location = useLocation()
  return (
      <div className='w-[93%] mx-[auto] my-[0] py-[15px] flex justify-between items-center bg-backGroundColor' >
          <Link to='/'>
              <img src="logo.svg" className='w-[100%]' alt="Logo Image" />
          </Link>
          <ul>
              <Link to='/about' className='hover:text-purpleColor inline-block list-none mr-[32px] text-[16px] cursor-pointer font-[500]'>About</Link>
              <li className='hover:text-purpleColor  inline-block list-none mr-[32px] text-[16px] cursor-pointer font-[500]'>Events</li>
              <Link to='/pricing' className='hover:text-purpleColor  inline-block list-none mr-[32px] text-[16px] cursor-pointer font-[500]'>Pricing</Link>
              <li className='hover:text-purpleColor  inline-block list-none mr-[32px] text-[16px] cursor-pointer font-[500]'>Event Organizers</li>
              <li className='hover:text-purpleColor  inline-block list-none mr-[32px] text-[16px] cursor-pointer font-[500]'>Contact</li>
          </ul>
          <div>
              {location.pathname === '/'? (<><button className='text-textColor mr-[3em] text-[12px] font-[700]'>Login</button>
              <button className='py-[7px] px-[15px] rounded text-whiteColor bg-textColor text-[12px] font-[700]'>Sign up</button></>):<img src="profilePicture.svg" className='w-[55px] h-[55px]' alt="" />}
              

              
          </div>
    </div>
  )
}

export default Nav