import { useState } from "react";
import { Route, Routes} from "react-router-dom";
import BuyTicket from "./pages/BuyTicketPage";
import EventPage from "./pages/EventPage";
import Homepage from "./pages/Homepage";
import SeeMoreEvents from "./pages/SeeMoreEvents";
import UserHomepage from "./pages/UserHomepage";
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
  ]);
  const [number, setNumber] = useState(0)
  const showEventPage = (id) => {
    setNumber(prevNumber => prevNumber = id)
  } 
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage events={events} hotEvents={hotEvents} showEventPage={ showEventPage} />} />
        <Route path='/my-homepage' element={<UserHomepage events={events} hotEvents={hotEvents} />} />
        <Route path='/see-more' element={<SeeMoreEvents hotEvents={hotEvents} />} />
        <Route path='/event' element={<EventPage hotEvents={hotEvents} number={number} setNumber={setNumber} />} />
        <Route path='/buy-ticket' element={<BuyTicket events={ events} />}/>
      </Routes>
      
    </>
  )
}

export default App
