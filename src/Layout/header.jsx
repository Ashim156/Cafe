import React from 'react'
import { logo } from '../images'
import { IoSearchOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";


const header = () => {
    return (

        <>
            <div className='w-full images'>
                <div className='flex justify-between items-center mx-auto max-w-7xl '>
                    <img src={logo} alt="logo" className='mt-10' />
                    <div className='flex justify-between items-center gap-6 font-serif text-[16px] mt-10'>
                        <h1>browse.</h1>
                        <h1>contact.</h1>
                        <h1>shop.</h1>
                        <IoSearchOutline size={25} />
                        <IoIosMenu size={25} />

                    </div>
                </div>
            </div>
        </>
    )
}

export default header