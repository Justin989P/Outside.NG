import React,{useState} from 'react'
import PopularShow from './PopularShow'

const PopularShows = ({events}) => {
    
    return (
        <div className= 'flex flex-row w-[1100px] overflow-x-auto'>
            {events.map(show => (
                <PopularShow key={show.id} show={show} />
            ))}
        </div>
    )
}

export default PopularShows
