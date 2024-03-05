import React from 'react'
import { big, check, elipse, small } from '../images'
import { FaLongArrowAltRight } from "react-icons/fa";


const Info = () => {
    return (
        <>
            <div className='w-[100vw] h-[100vh] flex -mt-20'>
                <div className='w-[50vw] h-[70vh] ml-32'>
                    <img src={big} alt="pic1" className='ml-14' />
                    <img src={small} alt="pic2" className='relative -top-56' />
                </div>
                <div className='w-[50vw] h-full flex flex-col'>
                    <h1 className='text-[20px] mt-28'><span className='relative top-7 -z-10'><img src={elipse} /></span>Best in the bussiness</h1>
                    <h1 className='text-[40px] font-serif mt-4'>We are the best <span className='text-[#BC9A6C] '>quality</span>  <br />coffee maker</h1>
                    <p className='text-[14px] mt-5'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima cumque molestiae, earum fugiat voluptas aperiam enim necessitatibus id rerum! Facere cupiditate earum, perferendis voluptatem, fugit magnam nisi delectus sit laborum porro placeat nemo quo non consequatur ullam alias, ipsa ex molestias voluptatibus cumque commodi!
                    </p>
                    <div className='flex flex-col mt-7 gap-3  '>
                        <h1 className='flex gap-3 text-[25px] '><img src={check} className='w-10 h-9 bg-[#EDEAE3]' />Experienced Chefs</h1>
                        <h1 className='flex gap-3 text-[25px]'><img src={check} className='w-10 h-9 bg-[#EDEAE3]' />Fresh & Organic Foods</h1>
                        <h1 className='flex gap-3 text-[25px]'><img src={check} className='w-10 h-9 bg-[#EDEAE3]' />Different Coffee & Drinks</h1>

                    </div>
                    <button className='text-white text-lg flex items-center justify-center gap-4 mt-7 w-44 h-16 bg-[#BC9A6C] '>Learn More <FaLongArrowAltRight size={20} />
                    </button>
                </div>


            </div>
        </>
    )
}

export default Info