import React,{useState,useEffect} from 'react'

const Pricing = ({ plan }) => {
  const [style, setStyle] = useState('')
  const [styleP, setStyleP] = useState('')
    useEffect (() => {
      if (plan.id === 1) {
        setStyle(prevStyle => prevStyle = 'bg-lightPurple text-offWhite h-[335px] w-[290px] px-[2em] rounded-lg ml-[3em]')
        setStyleP(prevStyle => prevStyle = 'bg-offWhite px-[40px] rounded py-[5px] text-purpleColor focus:bg-blurryPurple ')
      } else (
        setStyle(prevStyle => prevStyle = 'bg-whiteColor h-[335px] w-[290px] px-[2em] rounded-lg'),
          setStyleP(prevStyle => prevStyle = 'bg-blurryPurple px-[40px] rounded py-[5px] text-purpleColor focus:bg-offWhite absolute left-6 right-6 top-[19px] ')
      )
      if (plan.id === 2) {
        setStyleP(prevStyle => prevStyle = 'absolute top-10 right-10 bg-blurryPurple px-[40px] rounded py-[5px] text-purpleColor focus:bg-offWhite')
      }
    },[])
  return (
    <div className='inline-block mr-[2em]  '>
      <div className={style} key={plan.id} >
              <h3 className='font-[700] text-[28px] text-center '>{plan.title}</h3>
        <p className='text-[18px] font-[700] text-center mb-[12px]'>{plan.price}</p>
        <ul className='mb-[1.5em]'>
          {plan.benefits.map((benefit,index) => (
            <li key={index} className='font-[400] text-[14px] text-blackColor'>{benefit }</li>
          ))}
        </ul>
        <div className='text-center relative'>
        <button className={styleP}>{plan.buttonText }</button>
        </div>
      </div>
          
    </div>
  )
}

export default Pricing

