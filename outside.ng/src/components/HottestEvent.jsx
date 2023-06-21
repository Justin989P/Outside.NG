import React from 'react'
import { Link } from 'react-router-dom';

const HottestEvent = ({ hotEvent,showEventPage,index }) => {
    return (
        <Link key={hotEvent.id} to='/event' onClick={()=>showEventPage(index)}>
          
            <img src={hotEvent.imgs} className='w-[397px]' alt="Event Image" />
            <div className='flex justify-between items-end'>
                <div>
                    <h3 className='text-[14px] font-[400]'>{hotEvent.title}</h3>
                    <p className='text-[14px] font-[400]'>{hotEvent.date}</p>
                    <p className='text-[14px] font-[400]'>{hotEvent.address}</p>
                </div>
                <div>
                    <img className='mr-[2em] inline-block' src='knuckle.svg' alt='knuckle icon' />
                    <img className='mr-[2em] inline-block' src='heart.svg' alt='heart icon' />
                </div>
            </div>

            
        </Link>
    )
};

export default HottestEvent
