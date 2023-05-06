import React from 'react'

const PopularShow = ({show}) => {
  return (
      <div key={show.id} className='mr-[2em]'>
          <img src={show.imgs} className='w-[214px]' alt="Event Image" />
          <h3 className='text-[14px] font-[400]'>{show.title}</h3>
          <p className='text-[14px] font-[400]'>{ show.date}</p>
          <p className='text-[14px] font-[400]'>{show.address}</p>          
    </div>
  )
}

export default PopularShow