import React from 'react'

const PopularShow = ({imgs,date,address,title}) => {
  return (
      <div>
          <h4>hello</h4>
          <img src={imgs} className='w-[200px] h-[210px]' alt="Event Image" />
          <h3 className='text-[14px] font-[400]'>{title}</h3>
          <p className='text-[14px] font-[400]'>{ date}</p>
          <p className='text-[14px] font-[400]'>{address}</p>
    </div>
  )
}

export default PopularShow