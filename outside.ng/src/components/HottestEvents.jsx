import React from 'react'
import HottestEvent from './HottestEvent'

const HottestEvents = ({hotEvents,showEventPage}) => {
  return (
    <div className='flex flex-row gap-4 mb-[56px] w-[97%]'>
          {hotEvents.map((hotEvent,index) => (
          <HottestEvent hotEvent={hotEvent} index={index} showEventPage={showEventPage} />
          ))}
          
    </div>
  )
}

export default HottestEvents
