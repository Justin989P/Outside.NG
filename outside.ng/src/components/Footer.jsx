import React from 'react'

const Footer = () => {
    return (
        <div className='bg-gradient-to-t from-textColor to-purpleColor mt-[2em]'  >
            <div className='text-whiteColor pt-[31px] px-[69px] flex justify-between mb-[111px] items-center  '>
                <div>
                    <h2 className='font-[700] text-[20px] mb-[18px] '>OUTSIDE.NG</h2>
                    <p className='font-[200] text-[18px] w-[120px]'>Party Lovers, and expense managements for your events.</p>
                </div>

                <div className='text-center '>
                    <table>
                        <thead>
                            <th className='pb-[20px]  pr-[98px]'><tr>Outsiders</tr></th>
                            <th className='pb-[20px] pr-[98px]'><tr>Event Organizers</tr></th>
                            <th className='pb-[20px] pr-[98px]'><tr>Useful Info</tr></th>
                            <th className='pb-[20px] pr-[98px]'><tr>About Us</tr></th>
                        
                        </thead>
                        <tbody>
                            <td>
                                <tr ><li className='pb-[20px] list-none text-[14px] font-[600]'>
                                   Register
                                </li></tr>
                                <tr ><li className='pb-[20px] list-none text-[14px] font-[600]'>
                                   Delivery
                                </li></tr>
                                <tr ><li className='pb-[20px] list-none text-[14px] font-[600]'>
                                   Return
                                </li></tr>
                            </td>

                            <td>
                            <tr ><li className='pb-[20px] list-none text-[14px] font-[600]'>
                                   Sell With Us
                                </li></tr>
                                <tr ><li className='pb-[20px] list-none text-[14px] font-[600]'>
                                   Pricing
                                </li></tr>
                                <tr ><li className='pb-[20px] list-none text-[14px] font-[600]'>
                                   Event Organizers FAQ
                                </li></tr>
                            </td>

                            <td>
                            <tr ><li className='pb-[20px] list-none text-[14px] font-[600]'>
                                   Contact Us
                                </li></tr>
                                <tr ><li className='pb-[20px] list-none text-[14px] font-[600]'>
                                   Follow Us
                                </li></tr>
                                <tr ><li className='pb-[20px] list-none text-[14px] font-[600]'>
                                   Useful Info
                                </li></tr>
                            </td>

                            <td>
                            <tr ><li className='pb-[20px] list-none text-[14px] font-[600]'>
                                   Newsletter
                                </li></tr>
                                <tr ><li className='pb-[20px] list-none text-[14px] font-[600]'>
                                   Cookies Policy
                                </li></tr>
                                <tr ><li className='pb-[20px] list-none text-[14px] font-[600]'>
                                   Main Event Page
                                </li></tr>
                            </td>
                        </tbody>
                    </table>
                </div>
            </div>
           <h3 className='font-[500] text-[16px] text-center text-whiteColor pb-[29px]'>Copyright @ TillerAfrikana 2022. All Rights Reserved. </h3> 
        </div>
    )
};

export default Footer
