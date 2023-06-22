import React from 'react'
import HottestEvent from './HottestEvent'

const HottestEvents = ({hotEvents}) => {
  return (
    <div className='flex flex-row gap-4 mb-[56px] w-[97%]'>
          {hotEvents.map((hotEvent,index) => (
          <HottestEvent hotEvent={hotEvent} key={index} />
          ))}
          
    </div>
  )
}

export default HottestEvents
