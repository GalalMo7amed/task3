import Arrow from "../../Image/BestDeals/ArrowRight.png"
import rating from "../../Image/BestDeals/Rating.png"
import product1 from "../../Image/BestDeals/Image.png"


export default function BestsDeals() {
    return (
        <div className='w-[70%] mx-auto h-[1000px] mt-5'>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-[#191C1F] text-[24px] font-[600]">
                        Best Deals
                    </h1>
                </div>

                <div className="flex justify-center items-center gap-2">
                    <p className="text-[#2DA5F3] ">
                        Browse All Product
                    </p>
                    <img src={Arrow} />
                </div>
            </div>

            <div className="flex justify-between items-center h-[600px] mt-[24px] border border-[#E4E7E9]">
                <div className="h-full w-[330px] border-r-2">
                    <div className="p-[24px]">
                        <img src={product1} />
                    </div>
                    <div className="px-[24px] mt-[24px]">
                        <img src={rating} />
                        <p className="w-[280px]">
                            Xbox Series S - 512GB SSD Console with Wireless Controller - EU Versio...
                        </p>
                        <span className="text-[#ADB7BC] line-through">
                            $865.99
                        </span>
                        <span className="text-[#2DA5F3] text-[18px]">
                            $442.12
                        </span>
                        <p className="w-[280px] text-[#5F6C72] text-[14px]">
                            Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
