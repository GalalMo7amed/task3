import Logo from "../Image/Navebar/Logo.png"
import ArrowRight from "../Image/Navebar/arrow-right.svg"
import icon1 from "../Image/Navebar/Facebook.png";
import icon2 from "../Image/Navebar/Instagram.png";
import icon3 from "../Image/Navebar/Pinterest.png";
import icon4 from "../Image/Navebar/Reddit.png";
import icon5 from "../Image/Navebar/Twitter.png";
import icon6 from "../Image/Navebar/Youtube.png";

import shoppingcard from '../Image/Navebar/ShoppingCartSimple.png'
import heart from '../Image/Navebar/Heart.png'
import user from '../Image/Navebar/User.png'

import icons1 from '../Image/Navebar/MapPinLine.png'
import icons2 from '../Image/Navebar/ArrowsCounterClockwise.png'
import icons3 from '../Image/Navebar/Headphones.png'
import icons4 from '../Image/Navebar/Info.png'
import icons5 from '../Image/Navebar/PhoneCall.png'


const iconSocial = [
    { icon: icon1 },
    { icon: icon2 },
    { icon: icon3 },
    { icon: icon4 },
    { icon: icon5 },
    { icon: icon6 },
]

export default function Navebar() {
    return (<>

        <div className="bg-[#191C1F] h-[80px] flex items-center justify-between lg:px-[300px]">
            <div className="flex justify-center items-center gap-2">
                <div className="w-[74px] h-[40px] bg-[#F3DE6D] -rotate-2 flex justify-center items-center text-[20px] font-[600] text-[#191C1F]">
                    Black
                </div>
                <p className="text-[#FFFFFF] text-[24px] font-[600]">
                    Friday
                </p>
            </div>
            <div className="flex justify-center items-center gap-[8px] text-[white] font-[600]">
                <p>
                    Up to
                </p>
                <p className="text-[40px] text-[#EBC80C]" >
                    59%
                </p>
                <p>OFF</p>
            </div>

            <button className="w-[156px] h-[48px] bg-[#EBC80C] flex justify-center items-center gap-[10px] rounded-[5px]">
                <div>
                    <h1 className="text-[#191C1F] text-[20px] font-[600]">
                        Shop now
                    </h1>
                </div>

                <div className="w-[24px] h-[24px]">
                    <img src={ArrowRight} className="h-full w-full" />
                </div>

            </button>



        </div>

        <div className="bg-[#1B6392] h-[58px] lg:px-[300px] pt-[16px]">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-[white]">
                        Welcome to Clicon online eCommerce store.
                    </p>
                </div>
                <div className="flex items-center justify-between gap-10 text-[white]">
                    <div className="flex items-center justify-between gap-3">
                        <p>
                            Follow us:
                        </p>
                        {

                            iconSocial.map((item, index) => (
                                <div className="flex items-center justify-between">
                                    <img src={item.icon} key={index} />
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex gap-4">
                        <p>
                            Eng
                        </p>
                        <p>
                            USD
                        </p>

                    </div>

                </div>
            </div>
        </div>
        <hr className="text-[#F2F4F5]" />
        <div className="bg-[#1B6392] h-[88px] flex items-center justify-between lg:px-[300px] pt-[16px] gap-10">

            <div >
                <img src={Logo} />
            </div>

            <>
                <form class="mx-auto">
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" class="block w-[650px] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Search for anything..." required />
                    </div>
                </form>
            </>

            <div className="flex justify-center items-center gap-5">
                <img src={shoppingcard} />
                <img src={heart} />
                <img src={user} />
            </div>
        </div>

        <div className="h-[80px] flex items-center justify-between  lg:px-[300px]">
            <div className="flex gap-5">
                <button className="w-[160px] h-[48px] bg-[#F2F4F5] text-center rounded font-[500]">
                    All Category
                </button>
                <button className="w-[160px] h-[48px] text-center rounded font-[500] duration-500 hover:bg-[#F2F4F5]">
                    <div className="flex items-center justify-center gap-[2px]">
                        <img src={icons1} />
                        Track Order
                    </div>
                </button>
                <button className="w-[160px] h-[48px] text-center rounded font-[500] duration-500 hover:bg-[#F2F4F5]">
                    <div className="flex items-center justify-center gap-[2px]">
                        <img src={icons2} />
                        Compare
                    </div>
                </button>
                <button className="w-[160px] h-[48px] text-center rounded font-[500] duration-500 hover:bg-[#F2F4F5]">
                    <div className="flex items-center justify-center gap-[2px]">
                        <img src={icons3} />
                        Customer Support
                    </div>
                </button>
                <button className="w-[160px] h-[48px] text-center rounded font-[500] duration-500 hover:bg-[#F2F4F5]">
                    <div className="flex items-center justify-center gap-[2px]">
                        <img src={icons4} />
                        Need Help
                    </div>
                </button>
            </div>

            <div className="flex justify-center items-center gap-4">
                <img src={icons5} />
                <p>
                    +1-202-555-0104
                </p>
            </div>
        </div>
    </>
    )
}
