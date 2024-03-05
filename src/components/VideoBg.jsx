import React from 'react'
import { video } from '../images'

const VideoBg = () => {
    return (
        <>
            <div className='relative h-full w-full bg-black'>

                <video src={video} className='w-full object-fill' autoPlay muted loop />

                <p className='absolute text-center -mt-48 top-1/2 w-full text-[#E5DBC9] font-bold text-[96px]'>Fueling Your Day, ✧ ✺ <br /> The Coffee Way</p>



            </div>

        </>
    )
}

export default VideoBg