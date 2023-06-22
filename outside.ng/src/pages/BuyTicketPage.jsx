import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import PopularShows from '../components/PopularShows'
import Nav from './Nav'
import PaymentPage from './PaymentPage'
import PopularShowsPage from './shows/PopularShowsPage'

const BuyTicket = ({ events }) => {
    const [showPaymentPopup,setShowPaymentPopup] = useState(true)
  return (
    <div className='relative'>
          {<Nav />}
          <div className='mt-[2.5em] w-[80%] mx-[auto]'>
          <div className='flex justify-between items-center mb-[42px]'>
          <div className='flex items-center'>
              <img src="eventOwnerImage.svg" className='mr-[17px] w-[80px]' alt="Host Image" />
              <div>
              <div className='flex items-center'>
                  <h2 className='font-[600] text-[24px] mr-[9px]'>Tiller Kana </h2>
                  <div className='relative mt-[4px]'>
                      <img src="checkCircle.svg" alt="" />
                  <img src="checkIcon.svg" className='absolute left-[0.2em] top-[0.3em]' alt="" />
                  </div>
              </div>
              <p className='text-[16px] font-[400]'>Organizer</p>
              </div>
              </div>
              <p className='font-[600] text-[16px] border-purpleColor border-[1px] rounded-lg px-[18px] text-purpleColor'>Verified</p>

              </div>
              <h3 className='text-[32px] font-[600]'>Rocky Concert</h3>
              <p className='w-[50%] font-[400]  mb-[31px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsa qui quia? Itaque qui earum vitae aspernatur repellendus?</p>

              <h5 className='text-[24px] font-[500] mb-[31px]'>Customise Your Design</h5>
              <div className='inline-block mr-[12px]'>
                  <img src="copHereImage1.svg" className='mb-[16px] w-[180px]' alt="face Image" />
                  <Link className='text-purpleColor underline'>Cop Here</Link>
              </div>
              <div className='inline-block mr-[12px]'>
                  <img src="copHereImage2.svg" className='mb-[16px] w-[180px]' alt="face Image" />
                  <Link className='cursor-pointer text-purpleColor underline'>Cop Here</Link>
              </div>
              <div className='inline-block mr-[12px] mb-[31px]'>
                  <img src="copHereImage3.svg" className='mb-[16px] w-[180px]' alt="face Image" />
                  <Link className=' text-purpleColor underline'>Cop Here</Link>
              </div>
              <div className='mb-[30px]'>
                  <h3 className='mb-[18px] text-[16px] font-[600]'>Share</h3>
                  <img src="shareIcon.svg" className='mr-[16px] inline-block
                  ' alt="share icon" />
                  <img src="facebookIcon.svg" className='mr-[16px] inline-block
                  ' alt="facebook icon" />
                  <img src="twitterIcon.svg" className='mr-[16px] inline-block
                  ' alt="twitter icon" />
                  <img src="instagramIcon.svg" className='mr-[16px] inline-block
                  ' alt="instagram icon" />
              </div>
              <div>
                  <h3 className='font-[500] mb-[30px] text-[24px]'>
                      Select Ticket
                  </h3>
                  <div className='w-[400px] mb-[12px] h-[170px] bg-aquaColor rounded-lg'>
                  <div className=' pl-[25px] pt-[12px]  '>
                      <h3 className='font-[700] text-[18px] text-royalBlue mb-[9px]'>Regular</h3>
                      <h2 className='mb-[9px] text-whiteColor font-[800] text-[20px]'>Rocky Concert</h2>
                      <p className='text-whiteColor text-[16px] font-[600]'>5000</p>
                      <p className='text-greyColor text-[14px] font-[400]'>Tickets</p>
                  </div>
                      
                      <button className='bg-whiteColor text-royalBlue rounded-xl px-[10px] py-[4px] text-[14px] font-[400] float-right mr-[1em]' onClick={()=>setShowPaymentPopup(true)}>Buy Now</button>
                      
                  </div>

                  <div className='w-[400px]  mb-[12px] h-[170px] bg-goldColor rounded-lg'>
                  <div className=' pl-[25px] pt-[12px]  '>
                      <h3 className='font-[700] text-[18px] text-royalBlue mb-[9px]'>VIP</h3>
                      <h2 className='mb-[9px] text-whiteColor font-[800] text-[20px]'>Rocky Concert</h2>
                      <p className='text-whiteColor text-[16px] font-[600]'>30000</p>
                      <p className='text-greyColor text-[14px] font-[400]'>Tickets</p>
                  </div>
                     
                      
                          <button className='bg-whiteColor text-royalBlue rounded-xl px-[10px] py-[4px] text-[14px] font-[400] float-right mr-[1em]' onClick={()=>setShowPaymentPopup(true)}>Buy Now</button>
                      
                  </div>

                  <div className='w-[400px] mb-[12px] h-[170px] bg-royalBlue rounded-lg'>
                  <div className=' pl-[25px] pt-[12px]  '>
                      <h3 className='font-[700] text-[18px] text-whiteColor mb-[9px]'>VVIP</h3>
                      <h2 className='mb-[9px] text-whiteColor font-[800] text-[20px]'>Rocky Concert</h2>
                      <p className='text-whiteColor text-[16px] font-[600]'>50000</p>
                      <p className='text-greyColor text-[14px] font-[400]'>Tickets</p>
                  </div>
                      
                      <button className='bg-whiteColor text-royalBlue rounded-xl px-[10px] py-[4px] text-[14px] font-[400] float-right mr-[1em] ' onClick={()=>setShowPaymentPopup(true)}>Buy Now</button>
                      
                  </div>
              </div>
              <div className="text-right mr-[2.5em] ">
        <button className="py-[19px] px-[30px] bg-textColor  text-whiteColor rounded text-[16px] font-[700]">
          Chat With Us
        </button>
      </div>
          </div>
              <div className='mb-[23px] ml-[8.5em]'>
              <PopularShowsPage events={events}/>
          </div>
          <div className='absolute top-0 z-[99]'>
              {showPaymentPopup && <PaymentPage />}
          </div>
          
          
    </div>
  )
}

export default BuyTicket
