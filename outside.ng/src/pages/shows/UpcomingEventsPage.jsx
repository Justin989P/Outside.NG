import React from "react";
import { Link } from "react-router-dom";
import UpcomingEvents from "../../components/UpcomingEvents";

const UpcomingEventsPage = ({ hotEvents }) => {
  return (
    <div className="ml-[3em] mb-[64px] w-[93%]">
      <h3 className="font-[700] text-[24px] mb-[59px] flex justify-between items-center">
        Upcoming Events{" "}
        <Link
          to="/"
          className="text-textColor hover:underline text-[16px] font-[600]"
        >
          See More
        </Link>
      </h3>
      <UpcomingEvents hotEvents={hotEvents} />
      <Link
        to="/"
        className="flex justify-center items-center hover:underline text-[16px] font-[700]"
      >
        <span className="mr-[12px] text-textColor ">Load More </span>{" "}
        <img src="arrowRightPurple.svg" alt="Arrow Icon" />
      </Link>
    </div>
  );
};

export default UpcomingEventsPage;
