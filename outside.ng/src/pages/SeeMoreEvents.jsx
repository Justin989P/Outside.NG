import React from "react";
import HottestEvents from "../components/HottestEvents";
import Nav from "./Nav";
import HottestEventsPage from "./shows/HottestEventsPage";
import Footer from "../components/footer";

const SeeMoreEvents = ({ hotEvents }) => {
  return (
    <div>
      {<Nav />}
      <div className="w-[94%] mx-[auto] mt-[102px] mb-[79px]">
        <h1 className="text-[45px] font-[700] mb-[49px]">Hottest Event</h1>
        <p className="text-[18px] font-[400] w-[600px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsa ullam
          eaque sint, mollitia quo, officiis esse error dolores delectus facere
          dolor magni eligendi?
        </p>
      </div>
      <div className="w-[92%] mx-[auto]">
        <HottestEvents hotEvents={hotEvents} />
        <HottestEvents hotEvents={hotEvents} />
        <HottestEvents hotEvents={hotEvents} />
      </div>

      <div className="text-right mr-[2.5em] ">
        <button className="py-[19px] px-[30px] bg-textColor  text-whiteColor rounded text-[16px] font-[700]">
          Chat With Us
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default SeeMoreEvents;
