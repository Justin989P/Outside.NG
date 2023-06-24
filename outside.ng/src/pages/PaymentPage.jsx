import React, { useState } from "react";
import PaymentOptions from "../components/PaymentOptions";
import {FaTimes} from 'react-icons/fa'

const PaymentPage = ({cancelPaymentPopup}) => {
  const [paymentOption, setPaymentOption] = useState([
    {
      id: 1,
      imgs: "masterCardIcon.svg",
      title: "Mastercard",
      isSelected: false,
    },
    {
      id: 2,
      imgs: "paystackIcon.svg",
      title: "Paystack",
      isSelected: true,
    },
    {
      id: 3,
      imgs: "visaIcon.svg",
      title: "Visa",
      isSelected: false,
    },
  ]);
  const selectHandler = (id) => {
        setPaymentOption(paymentOption.map(option => option.id === id ? {...option,isSelected:!option.isSelected}:{...option,isSelected:false}))
    }
  return (
    <div className="bg-modalBG fixed top-0 bottom-0 left-0 right-0 z-20 ">
      <div className="bg-backGroundColor fixed left-[30em] top-16 px-[2em] py-[2em] w-[400px] h-[500px] ">
        <FaTimes className="float-right cursor-pointer" onClick={cancelPaymentPopup}/>
        <h2 className="font-[700] text-[17px] mt-[4em] mb-[3em]">Payment Methods</h2>
        {paymentOption.map((option,index) => (
          <PaymentOptions key={index} option={ option} index={index} selectHandler={selectHandler} />
        ))}
      </div>
    </div>
  );
};

export default PaymentPage;
