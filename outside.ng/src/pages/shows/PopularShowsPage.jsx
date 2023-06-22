import React from 'react'
import PopularShows from '../../components/PopularShows'

const PopularShowsPage = ({events}) => {
  return (
    <div className="">
        <h3 className="font-[700] text-[22px] mb-[21px]">Popular Shows</h3>
        <PopularShows events={ events} />
      </div>
  )
}

export default PopularShowsPage
