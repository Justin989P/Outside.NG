import React from 'react'

const Event = ({ hotEvents,number}) => {
    return (
        <div >
            <img src={hotEvents[number].imgs} alt="event image" className='mb-[1em] w-full ' />
            <div className='flex justify-between items-center '>
                <div>
                    <h3 className='text-[17px] font-[600]'>{hotEvents[number].title}</h3>
                    <p className='text-[13px] font-[400] '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod quia, voluptatibus laboriosam minus asperiores consequuntur nobis velit?</p>
                </div>
                <div className='flex'>
                    <img className='mr-[2em] inline-block' src='knuckle.svg' alt='knuckle icon' />
                    <img className='mr-[2em] inline-block' src='heart.svg' alt='heart icon' />
                </div>
            </div>
        </div>
    )
}

export default Event
