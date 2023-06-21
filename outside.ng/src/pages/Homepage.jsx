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

const Homepage = ({ events, hotEvents, showEventPage }) => {
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
        <div className="pb-[2em] text-center ">
          <button className="w-[183px] h-[66px]  px-[30px] font-[600] text-[15px] text-whiteColor mr-[69px] focus:bg-purpleColor bg-textColor rounded">
            Organizers
          </button>

          <button className="w-[183px] h-[66px] font-[600] text-[15px] text-whiteColor mr-[69px] bg-textColor focus:bg-purpleColor rounded">
            Outsiders
          </button>
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
            A-z
          </button>

          <button className="border w-[185px] h-[65px] focus:bg-textColor focus:text-whiteColor rounded text-textColor font-[600] text-[16px] border-textColor ">
            A-z
          </button>
        </div>
      </div>

      <div className="ml-[3em] mb-[59px]">
        {<PopularShowsPage events={events} />}
      </div>

      {
        <HottestEventsPage
          hotEvents={hotEvents}
          showEventPage={showEventPage}
        />
      }

      {<UpcomingEventsPage hotEvents={hotEvents} />}

      <div className="text-right mr-[2.5em] ">
        <button className="py-[19px] px-[30px] bg-textColor  text-whiteColor rounded text-[16px] font-[700]">
          Chat With Us
        </button>
      </div>

      <div className="text-center mb-[82px]">
        <h2 className="font-[900] text-[50px] mb-[10px] text-textColor mt-[64px]">
          Receive Our Newsletters
        </h2>
        <p className="mb-[30px]">
          <span className="text-[16px] text-grayColor">
            Unsubscribe at anytime.
          </span>
          <Link
            className="text-purpleColor font-[400] hover:font-[500] hover:underline text-[16px]"
            to="/"
          >
            Privacy policy↗
          </Link>
        </p>

        <div className="border border-textColor rounded-lg px-[13px] py-[8px] inline-block">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              className="mr-[4px] font-[500] indent-1 bg-transparent outline-none text-[15px] py-[7px] px-[12px]"
              placeholder="Email Address"
              required
            />
            <button className="p-[7px] focus:rounded focus:bg-purpleColor">
              <img src="arrowRightBlack.svg" alt="Arrow Icon" />
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
