import React from 'react'
import Swiper from './Swiper'
import { first } from '../images'
import { FaStar } from "react-icons/fa";

const First = () => {


    return (
        <>
            <div className='flex justify-start items-start mx-auto max-w-[80rem] pr-28 h-full'>
                <Swiper />
                <div className='grid grid-cols-3 gap-x-52 '>

                    <div className='flex flex-col w-[400px] h-[400px] '>
                        <img src={first} alt="first" className='w-[300px] h-[200px]' />
                        <div className='flex justify-between items-center w-[300px]'>
                            <h1 className='text-[16px]'>Cofee Beans</h1>
                            <div className='flex  '>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />

                            </div>
                        </div>
                        <h1>$47</h1>
                    </div>
                    <div className='flex flex-col w-[400px] h-[400px]'>
                        <img src={first} alt="first" className='w-[300px] h-[200px]' />
                        <div className='flex justify-between items-center w-[300px]'>
                            <h1 className='text-[16px]'>Cofee Beans</h1>
                            <div className='flex  '>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />

                            </div>
                        </div>
                        <h1>$47</h1>
                    </div>
                    <div className='flex flex-col w-[400px] h-[400px]'>
                        <img src={first} alt="first" className='w-[300px] h-[200px]' />
                        <div className='flex justify-between items-center w-[300px]'>
                            <h1 className='text-[16px]'>Cofee Beans</h1>
                            <div className='flex  '>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />

                            </div>
                        </div>
                        <h1>$47</h1>
                    </div>
                    <div className='flex flex-col w-[400px] h-[400px] relative -top-32'>
                        <img src={first} alt="first" className='w-[300px] h-[200px]' />
                        <div className='flex justify-between items-center w-[300px]'>
                            <h1 className='text-[16px]'>Cofee Beans</h1>
                            <div className='flex  '>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />

                            </div>
                        </div>
                        <h1>$47</h1>
                    </div>
                    <div className='flex flex-col w-[400px] h-[400px] relative -top-32 '>
                        <img src={first} alt="first" className='w-[300px] h-[200px]' />
                        <div className='flex justify-between items-center w-[300px]'>
                            <h1 className='text-[16px]'>Cofee Beans</h1>
                            <div className='flex  '>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />

                            </div>
                        </div>
                        <h1>$47</h1>
                    </div>
                    <div className='flex flex-col w-[400px] h-[400px] relative -top-32'>
                        <img src={first} alt="first" className='w-[300px] h-[200px]' />
                        <div className='flex justify-between items-center w-[300px]'>
                            <h1 className='text-[16px]'>Cofee Beans</h1>
                            <div className='flex  '>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />

                            </div>
                        </div>
                        <h1>$47</h1>
                    </div>

                </div>
            </div>


        </>
    )
}

export default First