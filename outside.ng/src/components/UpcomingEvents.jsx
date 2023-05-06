import React from 'react'
import UpcomingEvent from './UpcomingEvent'

const UpcomingEvents = ({hotEvents}) => {
  return (
    <div className='flex flex-row gap-4 mb-[56px] w-[97%]'>
          {hotEvents.map((hotEvent,index) => (
          <UpcomingEvent hotEvent={hotEvent} key={index} />
          ))}
          
    </div>
  )
}

export default UpcomingEvents
