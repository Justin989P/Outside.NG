import React from "react";
import { Link } from "react-router-dom";
import HottestEvents from "../../components/HottestEvents";

const HottestEventsPage = ({ hotEvents,showEventPage }) => {
  return (
    <div className="ml-[3em] mb-[85px] w-[93%]">
      <h3 className="font-[700] text-[24px] mb-[59px] flex justify-between items-center">
        Hottest Events{" "}
        <Link
          to="/"
          className="text-textColor hover:underline text-[16px] font-[600]"
        >
          See More
        </Link>
      </h3>
      <HottestEvents hotEvents={hotEvents} showEventPage={showEventPage} />
    </div>
  );
};

export default HottestEventsPage;
