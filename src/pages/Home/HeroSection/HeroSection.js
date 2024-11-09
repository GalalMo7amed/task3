import Img1 from '../../../Image/Hero/Image (1).png'
import Img2 from '../../../Image/Hero/image 4.png'
import Img3 from '../../../Image/Hero/image 5.png'

import ArrowRight from '../../../Image/Hero/ArrowRight.png'


import icon1 from '../../../Image/Hero/Package.png';
import icon2 from '../../../Image/Hero/Trophy.png';
import icon3 from '../../../Image/Hero/CreditCard.png';
import icon4 from '../../../Image/Hero/Headphones.png';
import BestsDeals from '../../Best Deals/BestsDeals';


export default function HeroSection() {
    return (
        <>

            <div className='w-[70%] mx-auto h-[full]'>
                <div className='flex justify-center items-center gap-[25px]'>
                    <div className='w-[872px] h-[520px] bg-[#F2F4F5]'>
                        <div className='flex justify-center items-center gap-4 pt-[56px]'>
                            <div className='w-[360px] h-[225px] text-white'>
                                <p className='text-[#2484C2] text-[14px] font-[600]'>
                                    THE BEST PLACE TO PLAY
                                </p>
                                <p className='text-[#191C1F] text-[48px] font-[600]'>
                                    Xbox Consoles
                                </p>
                                <p className='text-[#475156] text-[19px] font-[400]'>
                                    Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.
                                </p>

                                <button className="w-[156px] h-[48px] bg-[#FA8232] mt-[25px] flex justify-center items-center gap-[10px] rounded-[5px]">
                                    <div>
                                        <h1 className="text-[white] text-[20px] font-[600]">
                                            Shop now
                                        </h1>
                                    </div>

                                    <div className="w-[24px] h-[24px]">
                                        <img src={ArrowRight} className="h-full w-full" />
                                    </div>

                                </button>
                            </div>
                            <div className="w-[368px] h-[408px] relative ">
                                <img src={Img1} className='w-full h-full' />
                                <div className='w-[100px] h-[100px] rounded-full bg-[#2DA5F3] flex justify-center items-center text-[22px] text-white font-bold top-0 right-0 absolute'>
                                    $299
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='w-[424px] h-full '>
                        <div className='w-[424px] h-[248px] bg-[#191C1F] mb-7 relative'>
                            <div className='flex'>
                                <div className='w-[180px] h-[155px] pl-[40px] pt-[46px]'>
                                    <p className='text-[#EBC80C] text-[14px]'>
                                        Summer Sales
                                    </p>
                                    <p className='text-[24px] font-[600] text-white'>
                                        New Google Pixel 6 Pro
                                    </p>

                                    <button className="w-[156px] h-[48px] bg-[#FA8232] mt-[20px] flex justify-center items-center gap-[10px] rounded-[5px]">
                                        <div>
                                            <h1 className="text-[white] text-[20px] font-[600]">
                                                Shop now
                                            </h1>
                                        </div>

                                        <div className="w-[24px] h-[24px]">
                                            <img src={ArrowRight} className="h-full w-full" />
                                        </div>

                                    </button>
                                </div>


                                <div className='w-[200px] h-[200px] bottom-0 right-0 absolute'>
                                    <img src={Img3} className='w-full h-full' />
                                    <div className='w-[105px] h-[40px] bg-[#EFD33D] rounded font-[700] flex justify-center items-center text-[#141414] -top-7 right-[24px] absolute'>
                                        29% OFF
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className='w-full h-[248px] bg-[#F2F4F5] '>
                            <div className='flex justify-center items-center  pt-[40px]'>
                                <div className='w-[160px] h-[160px]'>
                                    <img src={Img2} className='w-full h-full' />
                                </div>
                                <div className='w-[175px] h-[170px]'>
                                    <p className='text-[#191C1F] text-[24px] font-[600]'>
                                        Xiaomi FlipBuds Pro
                                    </p>
                                    <p className='text-[18px] text-[#2DA5F3]'>
                                        $299 USD
                                    </p>

                                    <button className="w-[156px] h-[48px] bg-[#FA8232] mt-[20px] flex justify-center items-center gap-[10px] rounded-[5px]">
                                        <div>
                                            <h1 className="text-[white] text-[20px] font-[600]">
                                                Shop now
                                            </h1>
                                        </div>

                                        <div className="w-[24px] h-[24px]">
                                            <img src={ArrowRight} className="h-full w-full" />
                                        </div>

                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='h-[110px] border border-[#E4E7E9] rounded mt-5'>
                    <div className='flex justify-center items-center mt-[16px] gap-[50px]'>
                        <div className='w-[280px] h-[76px] flex items-center gap-5 border-r-2'>
                            <div>
                                <img src={icon1} />
                            </div>
                            <div>
                                <p>
                                    Fasted Delivery
                                </p>
                                <p className='text-[#5F6C72] text-[14px]'>
                                    Delivery in 24/H
                                </p>
                            </div>
                        </div>
                        <div className='w-[280px] h-[76px] flex items-center gap-5 border-r-2'>
                            <div>
                                <img src={icon2} />
                            </div>
                            <div>
                                <p>
                                    24 Hours Return
                                </p>
                                <p className='text-[#5F6C72] text-[14px]'>
                                    100% money-back guarantee
                                </p>
                            </div>
                        </div>
                        <div className='w-[280px] h-[76px] flex items-center gap-5 border-r-2'>
                            <div>
                                <img src={icon3} />
                            </div>
                            <div>
                                <p>
                                    Secure Payment
                                </p>
                                <p className='text-[#5F6C72] text-[14px]'>
                                    Your money is safe
                                </p>
                            </div>
                        </div>
                        <div className='w-[280px] h-[76px] flex items-center gap-5'>
                            <div>
                                <img src={icon4} />
                            </div>
                            <div>
                                <p>
                                    Support 24/7
                                </p>
                                <p className='text-[#5F6C72] text-[14px]'>
                                    Live contact/message
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BestsDeals />
        </>
    )
}
