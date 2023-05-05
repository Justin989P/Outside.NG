//import PopularShow from "./components/PopularShow"
import Nav from "./pages/Nav";
import { useState } from "react";
import PopularShows from "./components/PopularShows";
function App() {
  const [events, setEvents] = useState([
    {
        id: 1,
        imgs: 'showsImage1.svg',
        title: 'Teki Conference',
        date: 'Tue Dec 22, 2023 - 8:00 PM',
        address: 'The Oriental, Ikoyi, Lagos.'
    },
    {
        id: 2,
        imgs: 'showsImage2.svg',
        title: 'Portability Festival',
        date: 'Tue Jan 24, 2023 - 8:00 PM',
        address: 'The Streetz, Alagbado, Lagos.'
    },
    {
        id: 3,
        imgs: 'showsImage3.svg',
        title: 'Rocky Concert',
        date: 'Tue Nov 22, 2022 - 8:00 PM',
        address: 'The Champ, Lagos.'
    },
    {
        id: 4,
        imgs: 'showsImage4.svg',
        title: 'Teki Conference',
        date: 'Tue Dec 22, 2023 - 8:00 PM',
        address: 'The Oriental, Ikoyi, Lagos.'
    },
    {
        id: 5,
        imgs: 'showsImage5.svg',
        title: 'Portability Festival',
        date: 'Tue Jan 24, 2023 - 8:00 PM',
        address: 'The Streetz, Alagbado, Lagos.'
    },
    {
        id: 6,
        imgs: 'showsImage6.svg',
        title: 'Rocky Concert',
        date: 'Tue Nov 22, 2022 - 8:00 PM',
        address: 'The Champ, Lagos.'
    },
    {
        id: 7,
        imgs: 'showsImage1.svg',
        title: 'Teki Conference',
        date: 'Tue Dec 22, 2023 - 8:00 PM',
        address: 'The Oriental, Ikoyi, Lagos.'
    },
]);
  return (
    <>
      <header>
        <Nav />
      </header>
      <div className="w-[85%] mx-[auto]">
        <img src="bigImage.svg" alt="Event Image" className="w-[1227px] h-[500px]" />
        <div className="pb-[2em] ">
          <button className="py-[10px] ml-[24em]  px-[30px] font-[600] text-[15px] text-whiteColor mr-[69px] bg-textColor rounded">Organizers</button>

          <button className="py-[10px] px-[30px] font-[600] text-[15px] text-whiteColor mr-[69px] bg-textColor rounded">Organizers</button>
        </div>
      </div>
      <div className="ml-[3em] mb-[78px] flex">
        <button className="border w-[185px] h-[65x] focus:bg-textColor focus:text-whiteColor rounded text-textColor font-[600] text-[16px] border-textColor mr-[2.5em]">Fliters</button> 

        <button className="border w-[185px] h-[65x] focus:bg-textColor focus:text-whiteColor rounded text-textColor font-[600] text-[16px] border-textColor mr-[2.5em]">Dates</button> 

        <button className="border w-[185px] h-[65x] focus:bg-textColor focus:text-whiteColor rounded text-textColor font-[600] text-[16px] border-textColor mr-[2.5em]">Location</button> 

        <button className="border w-[185px] h-[65x] focus:bg-textColor focus:text-whiteColor rounded text-textColor font-[600] text-[16px] border-textColor mr-[2.5em]">Pricing</button> 

        <button className="border w-[185px] h-[65x] focus:bg-textColor focus:text-whiteColor rounded text-textColor font-[600] text-[16px] border-textColor mr-[2.5em]">A-Z</button> 

        <button className="border w-[185px] h-[65x] focus:bg-textColor focus:text-whiteColor rounded text-textColor font-[600] text-[16px] border-textColor mr-[2.5em]">A-z</button> 

        <button className="border w-[185px] h-[65x] focus:bg-textColor focus:text-whiteColor rounded text-textColor font-[600] text-[16px] border-textColor mr-[2.5em]">A-z</button> 
        
      </div>

      <div className="ml-[3em]">
        <h3 className="font-[700] mb-[1em]">Popular Shows</h3>
        <PopularShows events={ events} />
      </div>
    </>
  )
}

export default App
