import React,{useState} from 'react'
import PopularShow from './PopularShow'

const PopularShows = ({events}) => {
    
    return (
        <div className='overflow-x-auto'>
            <div className='w-[1729px]'>
            {events.map(show => (
                <PopularShow key={show.id} show={show} />
            ))}

        </div>
        
        </div>
    )
}

export default PopularShows
