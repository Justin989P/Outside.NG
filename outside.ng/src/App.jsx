import PopularShow from "./components/PopularShow"
import Nav from "./pages/Nav";
import { useState } from "react";
import PopularShows from "./components/PopularShows";
import ShowsAPI from './components/ShowsAPI.json'
import { Link } from "react-router-dom";
import HottestEvent from "./components/HottestEvent";
import HottestEvents from "./components/HottestEvents";
import UpcomingEvents from "./components/UpcomingEvents";
import Footer from "./components/footer";
function App() {
  const [events,setEvents] = useState([
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
      imgs: 'showsImage2.svg',
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
  const [hotEvents, setHotEvents] = useState([
    {
      id: 1,
      imgs: 'hotEvent1.svg',
      title: 'Teki Conference',
      date: 'Tue Dec 22, 2023 - 8:00 PM',
      address: 'The Oriental, Ikoyi, Lagos.'
    },
    {
      id: 2,
      imgs: 'hotEvent2.svg',
      title: 'Portability Festival',
      date: 'Tue Jan 24, 2023 - 8:00 PM',
      address: 'The Streetz, Alagbado, Lagos.'
    },
    {
      id: 3,
      imgs: 'hotEvent3.svg',
      title: 'Rocky Concert',
      date: 'Tue Nov 22, 2022 - 8:00 PM',
      address: 'The Champ, Lagos.'
    },
  ])
  return (
    <div className="bg-backGroundColor">
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

      <div className="ml-[3em] mb-[59px]">
        <h3 className="font-[700] text-[22px] mb-[23px]">Popular Shows</h3>
        <PopularShows events={ events} />
      </div>

      <div className="ml-[3em] mb-[85px] w-[93%]">
        <h3 className="font-[700] text-[24px] mb-[59px] flex justify-between items-center">Hottest Events <Link to='/' className="text-textColor hover:underline text-[16px] font-[600]">See More</Link></h3>
        <HottestEvents hotEvents={hotEvents} />
        
      </div>

      <div className="ml-[3em] mb-[64px] w-[93%]">
        <h3 className="font-[700] text-[24px] mb-[59px] flex justify-between items-center">Upcoming Events <Link to='/' className="text-textColor hover:underline text-[16px] font-[600]">See More</Link></h3>
        <UpcomingEvents hotEvents={hotEvents} />
        <Link to='/' className="flex justify-center items-center hover:underline text-[16px] font-[700]"><span className='mr-[12px] text-textColor '>Load More </span> <img src="arrowRightPurple.svg" alt="Arrow Icon" /></Link>
      </div>

      <div className='text-right mr-[2.5em] '>
      <button className="py-[19px] px-[30px] bg-textColor  text-whiteColor rounded text-[16px] font-[700]">Chat With Us</button>
     </div>

      <div className="text-center mb-[82px]">
        <h2 className="font-[900] text-[50px] mb-[10px] text-textColor mt-[64px]">Receive Our Newsletters</h2>
        <p className="mb-[30px]"><span className="text-[16px] text-grayColor">Unsubscribe at anytime.</span><Link className="text-purpleColor font-[400] hover:font-[500] hover:underline text-[16px]" to='/'>Privacy policy↗</Link></p>

        <div className="border border-textColor rounded-lg px-[13px] py-[8px] inline-block">
        <form onSubmit={(e)=>e.preventDefault()}>
            <input type="email" className="mr-[4px] font-[500] indent-1 bg-transparent outline-none text-[15px] py-[7px] px-[12px]" placeholder="Email Address" required />
            <button className="p-[7px] focus:rounded focus:bg-purpleColor"><img src="arrowRightBlack.svg" alt="Arrow Icon" /></button>
        </form>
        </div>
      </div>

      <Footer/>
      
    </div>
  )
}

export default App
