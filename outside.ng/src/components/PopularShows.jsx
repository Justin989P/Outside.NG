import React,{useState} from 'react'
import PopularShow from './PopularShow'

const PopularShows = ({ events }) => {
    
    return (
        <div>
            {events.map((event, index) => {
                <PopularShow key={index} title={event.title} date={event.date} imgs={event.imgs} address={event.address} id={event.id} />
            })}
        </div>
    )
}

export default PopularShows
