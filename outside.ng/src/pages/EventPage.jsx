import React from "react";
import { Link } from "react-router-dom";
import Event from "../components/Event";
import Nav from "./Nav";

const EventPage = ({ hotEvents, number }) => {
  return (
    <div>
      {<Nav />}
      <div className="w-[30%] mx-[auto] mt-[65px]">
        <Event hotEvents={hotEvents} number={number} />
        <div className="flex justify-between items-center w-[57%] mt-[2em]">
          <div className="relative">
            <img src="lightPurpleRoundIcon.svg" alt="icon" />
            <img
              src="calendarIcon.svg"
              className="absolute top-[0.7em] left-[0.7em] "
              alt="icon"
            />
          </div>
          <div>
            <div className="mb-[7px]">
              <h4 className="font-[400] text-[14px]">
                Monday February 23, 2023
              </h4>
              <p className="font-[400] mt-[-2px] text-[12px] text-greyColor">
                17:00 - 20:00
              </p>
            </div>
            <button className="text-purpleColor rounded-xl border-purpleColor font-[600] text-[12px] border-[1px] px-[42px] py-[3px]">
              Add To Calendar
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center w-[57%] mt-[2em]">
          <div className="relative">
            <img src="lightPurpleRoundIcon.svg" alt="icon" />
            <img
              src="locationIcon.svg"
              className="absolute top-[0.7em] left-[0.9em] "
              alt="icon"
            />
          </div>
          <div>
            <div className="mb-[7px]">
              <h4 className="font-[400] text-[14px]">
              {hotEvents[number].address}
              </h4>
            </div>
                      <button className="text-purpleColor rounded-xl border-purpleColor font-[600] text-[12px] border-[1px] px-[42px] py-[3px]">
                          View On Map
            </button>
          </div>
              </div>
              <Link to='/buy-ticket'>
              <button className="w-full bg-purpleColor text-whiteColor focus:bg-textColor py-[6px] mt-[4em] mb-[174px] text-[14px] rounded-lg font-[600]">Buy Ticket</button>
              </Link>
      </div>
    </div>
  );
};

export default EventPage;
