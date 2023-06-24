import React, { useState } from "react";
import Footer from "../components/footer";
import Pricing from "../components/Pricing";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const PricingPage = () => {
  const [freeEvents, paidEvents] = useState(false);
  const [prices, setPrices] = useState([
    {
      id: 1,
      title: "Basic",
      price: "$10",
      benefits: [
        "Unlimited free events",
        "Unlimited paid events",
        "Unlimited ticket types",
        "Private (invite only) events",
        "Custom event page url",
        "Custom field on check out form",
        "Detailed exports of all data",
        "Mobile app for attendee check in",
        "5% + ₦100 fee per paid ticket",
      ],
      buttonText: "Get Started",
    },
    {
      id: 2,
      title: "Standard",
      price: "$10",
      benefits: [
        "Everything on the free plan plus:",
        "3.5% + ₦100 fee per paid ticket",
        "Recurring event types",
        "1:1 event types",
        "Discount codes",
        "Waitlists",
        "Premium Zoom integration",
      ],
      buttonText: "Get Started",
    },
    {
      id: 3,
      title: "Diamond",
      price: "$10",
      benefits: [
        "Event staffing",
        "Assigned seat ticketing",
        "Event wristbands",
        "Equipment rentals",
        "APIs and white labelling",
        "RFID access control",
        "RFID cashless payments",
        "events coverage",
      ],
      buttonText: "Contact Us",
    },
  ]);
  return (
    <div className="bg-backGroundColor">
      {<Nav />}
      <div>
        <div className="text-center  w-[60%] mx-[auto] mb-[2em]">
          <h2 className="font-[600] text-[48px]">
            Events Packages And Pricing
          </h2>
          <p className="text-[17px] font-[400] mb-[12px] w-[85%] mx-[auto]">
            To ensure premium satisfaction for our users that will provide for
            your every needs for your event we offer a vast range of services
            tailored for you
          </p>
          <div>
            <p
              className={
                freeEvents
                  ? "text-purpleColor font-[700] text-[18px] inline-block mr-[20px]"
                  : " inline-block font-[700] text-[18px] mr-[20px]"
              }
            >
              Free Events
            </p>
            <div
              className="w-[45px] mb-[-6px] mr-[20px] inline-block h-[25px] relative rounded-[20px] border-[2px] border-purpleColor "
              onClick={() => paidEvents(!freeEvents)}
            >
              <div
                className={
                  freeEvents
                    ? "w-[15px] inline-block absolute left-0 h-[15px] m-[3px] bg-purpleColor rounded-[100px]"
                    : "w-[15px] absolute right-0 h-[15px] inline-block m-[3px] bg-purpleColor rounded-[100px]"
                }
              ></div>
            </div>
            <p
              className={
                freeEvents
                  ? " inline-block font-[700] text-[18px]"
                  : " inline-block font-[700] text-[18px] text-purpleColor"
              }
            >
              Paid Events
            </p>
          </div>
        </div>
        <div className="w-[80%] mx-[auto] flex mb-[4em]">
          {prices.map((plan) => (
            <Pricing plan={plan} />
          ))}
        </div>
        <div>
          <div className="text-center mb-[3em]">
            <h2 className="inline-block font-[700] text-[30px] text-purpleColor mr-[20px]">
              Compare Plan
            </h2>
            <img
              src="caretDownIcon.svg"
              className="text-purpleColor w-[20px] inline-block"
              alt="caret-down Icon"
            />
          </div>
          <div className="w-[70%] mx-[auto]">
            <div className="flex justify-between items-center py-[1em]">
              <div>
                <h2 className="text-purpleColor font-[600] text-[22px] ">
                  Event Types
                </h2>
                <ul className="font-[500] text-[16px]">
                  <li className="mb-[5px]">Free Events</li>
                  <li className="mb-[5px]">Paid Events</li>
                  <li className="mb-[5px]">Private (Invite Only) Events</li>
                  <li className="mb-[5px]">Recurring Events</li>
                  <li className="mb-[5px]">1:1 Events</li>
                </ul>
              </div>
              <div className="flex justify-between items-center ">
                <div className="mr-[5em]">
                  <h2 className="text-purpleColor font-[600] text-[22px]">
                    Outside Basic
                  </h2>
                  <ul className="font-[500] text-[16px]">
                    <li className="mb-[5px]">Unlimited</li>
                    <li className="mb-[5px]"> Unlimited</li>
                    <li className="mb-[5px]"> Unlimited </li>
                    <li className="mb-[5px]">__</li>
                    <li className="mb-[5px]">__</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-purpleColor font-[600] text-[22px]">
                    Outside Standard
                  </h2>
                  <ul className="font-[500] text-[16px]">
                    <li className="mb-[5px]">Unlimited</li>
                    <li className="mb-[5px]">Unlimited</li>
                    <li className="mb-[5px]">Unlimited </li>
                    <li className="mb-[5px]">Coming Soon </li>
                    <li className="mb-[5px]">
                      <img
                        src="checkIcon.svg"
                        className="inline-block bg-purpleColor w-[20px] p-[3px] "
                        alt="check Box"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="text-purpleColor mb-[3em]" />
          <div className="w-[70%] mx-[auto]">
            <div className="flex justify-between items-center  py-[1em]">
              <div>
                <h2 className="text-purpleColor font-[600] text-[22px]">
                  Selling Tickets
                </h2>
                <ul className="font-[500] text-[16px]">
                  <li className="mb-[5px]">Fee Per Free Ticket</li>
                  <li className="mb-[5px]">Fee Per Paid Ticket</li>
                  <li className="mb-[5px]">
                    Pass Online Ticket Fees To Attendees
                  </li>
                  <li className="mb-[5px]">
                    Ability To Manage Ticket Inventory
                  </li>
                </ul>
              </div>
              <div className="flex justify-between items-center ">
                <div className="mr-[5em]">
                  <h2 className="text-purpleColor font-[600] text-[22px]">
                    Outside Basic
                  </h2>
                  <ul className="font-[500] text-[16px]">
                    <li className="mb-[5px]">Free</li>
                    <li className="mb-[5px]">5% + ₦100</li>
                    <li className="mb-[5px]">
                      <img
                        src="checkIcon.svg"
                        className="inline-block bg-purpleColor w-[20px] p-[3px] "
                        alt="check Box"
                      />
                    </li>
                    <li className="mb-[5px]">
                      <img
                        src="checkIcon.svg"
                        className="inline-block bg-purpleColor w-[20px] p-[3px] "
                        alt="check Box"
                      />
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-purpleColor font-[600] text-[22px]">
                    Outside Standard
                  </h2>
                  <ul className="font-[500] text-[16px]">
                    <li className="mb-[5px]">Free</li>
                    <li className="mb-[5px]">3.5% + ₦100</li>
                    <li className="mb-[5px]">
                      <img
                        src="checkIcon.svg"
                        className="inline-block bg-purpleColor w-[20px] p-[3px] "
                        alt="check Box"
                      />
                    </li>
                    <li className="mb-[5px]">
                      <img
                        src="checkIcon.svg"
                        className="inline-block bg-purpleColor w-[20px] p-[3px] "
                        alt="check Box"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="text-purpleColor mb-[3em]" />

          <div className="w-[70%] mx-[auto]">
            <div className="flex justify-between items-center  py-[1em]">
              <div>
                <h2 className="text-purpleColor font-[600] text-[22px]">
                  Virtual Events
                </h2>
                <ul className="font-[500] text-[16px]">
                  <li className="mb-[5px]">Basic Zoom Integration</li>
                  <li className="mb-[5px]">Premium Zoom Integration</li>
                </ul>
              </div>
              <div className="flex justify-between items-center ">
                <div className="mr-[5em]">
                  <h2 className="text-purpleColor font-[600] text-[22px]">
                    Outside Basic
                  </h2>
                  <ul className="font-[500] text-[16px]">
                    <li className="mb-[5px]">__</li>
                    <li className="mb-[5px]">__</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-purpleColor mb-[2.5em] font-[600] text-[22px]">
                    Outside Standard
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <hr className="text-purpleColor mb-[3em]" />

          <div className="w-[70%] mx-[auto]">
            <div className="flex justify-between items-center  py-[1em]">
              <div>
                <h2 className="text-purpleColor font-[600] text-[22px]">
                  Customizations
                </h2>
                <ul className="font-[500] text-[16px]">
                  <li className="mb-[5px]">Custom Event Page Url</li>
                  <li className="mb-[5px]">Custom Fields On Check Out Form</li>
                  <li className="mb-[5px]">
                    Customizable Order Confirmation Email
                  </li>
                </ul>
              </div>
              <div className="flex justify-between items-center ">
                <div className="mr-[5em]">
                  <h2 className="text-purpleColor font-[600] text-[22px]">
                    Outside Basic
                  </h2>
                  <ul className="font-[500] text-[16px]">
                    <li className="mb-[5px]">
                      <img
                        src="checkIcon.svg"
                        className="inline-block bg-purpleColor w-[20px] p-[3px] "
                        alt="check Box"
                      />
                    </li>
                    <li className="mb-[5px]">1</li>
                    <li className="mb-[5px]">
                      <img
                        src="checkIcon.svg"
                        className="inline-block bg-purpleColor w-[20px] p-[3px] "
                        alt="check Box"
                      />
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-purpleColor font-[600] text-[22px]">
                    Outside Standard
                  </h2>
                  <ul className="font-[500] text-[16px]">
                    <li className="mb-[5px]">
                      <img
                        src="checkIcon.svg"
                        className="inline-block bg-purpleColor w-[20px] p-[3px] "
                        alt="check Box"
                      />
                    </li>
                    <li className="mb-[5px]">Unlimited</li>
                    <li className="mb-[5px]">
                      <img
                        src="checkIcon.svg"
                        className="inline-block bg-purpleColor w-[20px] p-[3px] "
                        alt="check Box"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="text-purpleColor mb-[3em]" />

          <div className="w-[70%] mx-[auto]">
            <div className="flex justify-between items-center py-[1em]">
              <div>
                <h2 className="text-purpleColor font-[600] text-[22px]">
                  Support And Security
                </h2>
                <ul className="font-[500] text-[16px]">
                  <li className="mb-[5px]">Email And Chat Support</li>
                  <li className="mb-[5px]">Phone Support</li>
                  <li className="mb-[5px]">Card Payments</li>
                  <li className="mb-[5px]">Bank Transfer Payments</li>
                  <li className="mb-[5px]">Ussd Payments</li>
                  <li className="mb-[5px]">Secure Payment Processing </li>
                  <li className="mb-[5px]">(PCI-DSS 3.2 Level 1 Compliance)</li>
                </ul>
              </div>
              <div className="flex justify-between items-center ">
                <div className="mr-[5em]">
                  <h2 className="text-purpleColor font-[600] text-[22px]">
                    Outside Basic
                  </h2>
                  <ul className="font-[500] text-[16px]">
                    <li className="mb-[5px]">
                      <img
                        src="checkIcon.svg"
                        className="inline-block bg-purpleColor w-[20px] p-[3px] "
                        alt="check Box"
                      />
                    </li>
                    <li className="mb-[5px]">--</li>
                    <li className="mb-[5px]">
                      <img
                        src="checkIcon.svg"
                        className="inline-block bg-purpleColor w-[20px] p-[3px] "
                        alt="check Box"
                      />
                    </li>
                    <li className="mb-[5px]">
                      <img
                        src="checkIcon.svg"
                        className="inline-block bg-purpleColor w-[20px] p-[3px] "
                        alt="check Box"
                      />
                    </li>
                    <li className="mb-[5px]">
                      <img
                        src="checkIcon.svg"
                        className="inline-block bg-purpleColor w-[20px] p-[3px] "
                        alt="check Box"
                      />
                    </li>
                    <li className="mb-[5px]">
                      <img
                        src="checkIcon.svg"
                        className="inline-block bg-purpleColor w-[20px] p-[3px] "
                        alt="check Box"
                      />
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-purpleColor font-[600] text-[22px]">
                    Outside Standard
                  </h2>
                  <ul className="font-[500] text-[16px]">
                    <li className="mb-[5px]">
                      <img
                        src="checkIcon.svg"
                        className="inline-block bg-purpleColor w-[20px] p-[3px] "
                        alt="check Box"
                      />
                    </li>
                    <li className="mb-[5px]">
                      <img
                        src="checkIcon.svg"
                        className="inline-block bg-purpleColor w-[20px] p-[3px] "
                        alt="check Box"
                      />
                    </li>
                    <li className="mb-[5px]">
                      <img
                        src="checkIcon.svg"
                        className="inline-block bg-purpleColor w-[20px] p-[3px] "
                        alt="check Box"
                      />
                    </li>
                    <li className="mb-[5px]">
                      <img
                        src="checkIcon.svg"
                        className="inline-block bg-purpleColor w-[20px] p-[3px] "
                        alt="check Box"
                      />
                    </li>
                    <li className="mb-[5px]">
                      <img
                        src="checkIcon.svg"
                        className="inline-block bg-purpleColor w-[20px] p-[3px] "
                        alt="check Box"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="text-purpleColor mb-[3em]" />
          <div className="text-center">
            <h1 className="font-[600] text-[35px]">Have Any Questions</h1>
            <p className="[600] text-[25px]">
              Contact Us{" "}
              <Link to='/contact-us' className="cursor-pointer text-purpleColor font-[600] text-[25px]">
                Here
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PricingPage;
