import React from 'react'
import Footer from '../components/footer'
import Nav from './Nav'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <div className='bg-backGroundColor'>
          {<Nav />}
          <div className='w-[70%] mx-[auto]'>
              <div className='  '>
                  <h2 className='font-[700] text-[52px] text-purpleColor mb-[1em]'>Our Goal Is To Enable Event Organizers To Provide The Finest Event Experiences. </h2>
                  <p className='font-[500] text-[18px] mb-[3em]'>
                  Lorem ipsum dolor sit amet consectetur. Aliquam nunc posuere at mattis venenatis nisl imperdiet a maecenas. In sodales arcu mattis a in feugiat etiam et. Massa tincidunt molestie porttitor quis.
                  </p>
              </div>
              <img src="AboutPageBigImg.svg" className='mb-[4em]' alt="" />
              <div className='flex justify-around items-center gap-[3em] mb-[4em]'>
                  <img src="aboutPageSmall.svg" className='w-[500px]' alt="group Image" />
                  <div>
                      <p className='font-[500] text-[16px] mb-[2em]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dicta perspiciatis sequi sint reiciendis vero sit architecto officiis vitae, est esse omnis, eaque excepturi culpa.</p>
                      <p className='font-[500] text-[16px] mb-[2em]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum nam autem laudantium? Facere, porro ea, atque neque sapiente placeat, alias molestiae qui voluptate impedit nesciunt in ipsam unde eaque. Maiores vero voluptate odit debitis cupiditate consequuntur, quis laudantium, saepe corrupti quo animi commodi, velit blanditiis.</p>
                  </div>
              </div>
              <div className='mb-[5em]' >
                  <h2 className='font-[700] text-purpleColor mb-[12px] text-[40px] text-center'>Founder's Story</h2>
                  <p className='text-[16px] font-[400] w-[98%] mx-[auto]'>Lorem ipsum dolor sit amet consectetur. Tellus sit eu velit nunc. Diam ullamcorper vel luctus facilisi faucibus cursus venenatis proin. Id interdum condimentum ut velit habitant suspendisse nec semper. vallis ullamcorper vivamus non dictum cursus eu. Tellus et habitasse hendrerit nisl. Porttitor tellus morbi sed nibh molestie tortor est in. Erat volutpat et proin et tortor molestie consectetur mi. Dictumst ornare tortor at aliquam. Sagittis mauris varius congue neque ornare in commodo odio eget.</p>
              </div>

              <div className='mb-[5em]' >
                  <h2 className='font-[700] text-purpleColor mb-[12px] text-[40px] text-center'>Meet Our Team</h2>
                  <p className='text-[16px] mb-[3em] font-[400] w-[98%] mx-[auto]'>Lorem ipsum dolor sit amet consectetur. Tellus sit eu velit nunc. Diam ullamcorper vel luctus facilisi faucibus cursus venenatis proin. Id interdum condimentum ut velit habitant suspendisse nec semper. </p>
                  <div className='flex justify-evenly items-center'>
                      <div className='text-center'>
                      <img src="team1.svg" className='w-[150px]' alt="" />
                      <h3 className='font-[600] text-[16px]'>Annie Ann</h3>
                      <p className='font-[700] text-[17px text-blueColor'>CFO</p>
                      </div>

                      <div className='text-center'>
                      <img src="team2.svg" className='w-[150px]' alt="" />
                      <h3 className='font-[600] text-[16px]'>Tiller Afrikana</h3>
                      <p className='font-[700] text-[17px text-blueColor'>CEO</p>
                      </div>

                      <div className='text-center'>
                      <img src="team3.svg" className='w-[150px]' alt="" />
                      <h3 className='font-[600] text-[16px]'>Tayo Dee</h3>
                      <p className='font-[700] text-[17px text-blueColor'>Engineering</p>
                      </div>

                      <div className='text-center'>
                      <img src="team4.svg" className='w-[150px]' alt="" />
                      <h3 className='font-[600] text-[16px]'>Ben Bee</h3>
                      <p className='font-[700] text-[17px text-blueColor'>HR</p>
                      </div>
                  </div>
              </div>
              <div className='mb-[5em]'>
                  <h2 className='font-[700] text-purpleColor mb-[15px] text-[40px] text-center'>Our Investors</h2>
                  <div className='flex justify-evenly items-center'>
                      <img src="GoodPX.svg" className='w-[150px]' alt="" />
                      <img src="BusinessInsider.svg" className='w-[150px]' alt="" />
                      <img src="BestBuy.svg" className='w-[150px]' alt="" />
                  </div>
              </div>
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
          <Footer/>
          
    </div>
  )
}

export default AboutPage
