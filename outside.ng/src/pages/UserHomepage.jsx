import React from "react";
import PopularShow from "../components/PopularShow";
import Nav from "./Nav";
import PopularShows from "../components/PopularShows";
//import ShowsAPI from './components/ShowsAPI.json'
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import PopularShowsPage from "./shows/PopularShowsPage";
import HottestEventsPage from "./shows/HottestEventsPage";
import UpcomingEventsPage from "./shows/UpcomingEventsPage";

const UserHomepage = ({ events, hotEvents }) => {
  return (
    <div className="bg-backGroundColor">
      <header>
        <Nav />
      </header>
      <div className="w-[85%] mx-[auto]">
        <img
          src="bigImage.svg"
          alt="Event Image"
          className="w-[1227px] h-[500px]"
        />
              <div className=" rounded-[10px] border-purpleColor border-[1px] w-[50%] mx-[auto] my-[3em]">
                  <form onSubmit={(e)=>e.preventDefault()} className="flex justify-center items-center px-[2em]">
                      <input type="text" placeholder="Find Events" className="px-[8px] mx-[2px] py-[7px] text-blackColor placeholder:text-blackColor placeholder:font-[500] font-[500] bg-transparent my-[5px] outline-none border-none w-[85%]" required/>
                      <button>
                          <img src="searchIcon.svg" className="w-[20px] cursor-pointer" alt="search icon" />
                      </button>
                      <img src="arrowDownPurple.svg" className="ml-[2em] w-[20px] cursor-pointer" alt="arrow down icon" />
                  </form>
                  
                  
          
        </div>
      </div>
      <div className="ml-[2em] mb-[78px] overflow-x-auto o">
        <div className=" mb-[16px] w-[1500px] ">
          <button className="border w-[185px] h-[65px] focus:bg-textColor focus:text-whiteColor rounded text-textColor font-[600] text-[16px] border-textColor mr-[2em]">
            Fliters
          </button>

          <button className="border w-[185px] h-[65px] focus:bg-textColor focus:text-whiteColor rounded text-textColor font-[600] text-[16px] border-textColor mr-[2em]">
            Dates
          </button>

          <button className="border w-[185px] h-[65px] focus:bg-textColor focus:text-whiteColor rounded text-textColor font-[600] text-[16px] border-textColor mr-[2em]">
            Location
          </button>

          <button className="border w-[185px] h-[65px] focus:bg-textColor focus:text-whiteColor rounded text-textColor font-[600] text-[16px] border-textColor mr-[2em]">
            Pricing
          </button>

          <button className="border w-[185px] h-[65px] focus:bg-textColor focus:text-whiteColor rounded text-textColor font-[600] text-[16px] border-textColor mr-[2em]">
            A-Z
          </button>

          <button className="border w-[185px] h-[65px] focus:bg-textColor focus:text-whiteColor rounded text-textColor font-[600] text-[16px] border-textColor mr-[2em]">
            Verified Organizers
          </button>

          <button className="border w-[185px] h-[65px] focus:bg-textColor focus:text-whiteColor rounded text-textColor font-[600] text-[16px] border-textColor ">
            Free Shows
          </button>
        </div>
      </div>
      <div className="ml-[3em] mb-[59px]">
{<PopularShowsPage events={events} />}
      </div>
      

      {<HottestEventsPage hotEvents={hotEvents} />}

      {<UpcomingEventsPage hotEvents={hotEvents} />}

      <div className="text-right mr-[2.5em] ">
        <button className="py-[19px] px-[30px] bg-textColor  text-whiteColor rounded text-[16px] font-[700]">
          Chat With Us
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default UserHomepage;
