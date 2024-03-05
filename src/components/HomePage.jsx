
import { CiSearch } from "react-icons/ci";
import { FaLongArrowAltRight } from "react-icons/fa";
import { coffee1, cup } from "../images";

const HomePage = () => {

    return (

        <>
            <div className='images h-[1000px] w-full relative'>
                <div className="w-[1374px] h-[1000px] absolute">
                    <div className="flex justify-center items-center gap-8 mt-28 ml-80">
                        <CiSearch size={50} />
                        <h1 className="flex justify-center items-center gap-11 mr-9 text-[48px] border-b-4 border-black leading-loose">What Would You Like To Drink Today? <FaLongArrowAltRight size={40} /> </h1>



                    </div>
                    <p className="float-right m-16">Discover new flavors, tastes, and experiences along with <br /> your loved ones an XYZ cafe.</p>

                </div>

                <div className="grid grid-cols-3 mx-auto max-w-7xl pt-[300px] ">
                    <div className="flex flex-col mt-48">

                        <div className="flex justify-start items-start  h-[120px]">
                            <img src={coffee1} alt="cof" />
                            <div className="flex flex-col ">
                                <h1 className="mb-3">Cappuccino</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh est nisi.</p>

                            </div>
                        </div>
                        <div className="flex justify-start items-start  h-[120px]">
                            <img src={coffee1} alt="cof" />
                            <div className="flex flex-col ">
                                <h1 className="mb-3">Cappuccino</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh est nisi.</p>

                            </div>
                        </div>
                    </div>

                    <div>
                        <img src={cup} alt="cup" />
                    </div>
                    <div className="flex flex-col mt-48">

                        <div className="flex justify-start items-start  h-[120px]">
                            <img src={coffee1} alt="cof" />
                            <div className="flex flex-col ">
                                <h1 className="mb-3">Cappuccino</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh est nisi.</p>

                            </div>
                        </div>
                        <div className="flex justify-start items-start  h-[120px]">
                            <img src={coffee1} alt="cof" />
                            <div className="flex flex-col ">
                                <h1 className="mb-3">Cappuccino</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh est nisi.</p>

                            </div>
                        </div>
                    </div>

                </div>




            </div>
        </>
    )
}

export default HomePage