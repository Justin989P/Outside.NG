import React from 'react'

const PaymentOptions = ({option,index,selectHandler}) => {
  return (
    <div onClick={()=>selectHandler(option.id)}>
            <div className="bg-whiteColor rounded-lg cursor-pointer relative px-[12px] py-[8px] mb-[2em]">
              <img
                src={option.imgs}
                className="inline-block mr-[20px]"
                alt="Mastercard Icon"
              />
              <p className="font-[700] inline-block absolute left-24 text-[14px]">
                {option.title}
              </p>
              {option.isSelected ? <img src="selectedIcon.svg" className=" mb-[-8px] inline-block absolute right-12" alt="selected icon" />:<div className="w-[22px] mb-[-8px] h-[22px] inline-block absolute right-12 border-[2px] rounded-[100px] border-grayColor"></div>}
            </div>
          </div>
  )
}

export default PaymentOptions
