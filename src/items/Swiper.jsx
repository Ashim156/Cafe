import React from 'react'
import { NavLink } from 'react-router-dom'
import { bean, list } from '../images'

const Swiper = () => {
    const active = ' bg-[#BC9A6C]'
    const notActive = ""
    return (
        <>
            <div className='flex flex-col justify-center items-center w-[800px]'>
                <NavLink to='/' className={({ isActive }) => `${isActive ? active : notActive} w-[254px] h-12 flex gap-6 justify-center items-center`}>
                    <img src={list} />  Americano
                </NavLink>
                <NavLink to='/esperesso' className={({ isActive }) => `${isActive ? active : notActive} w-[254px] h-12 flex gap-6 justify-center items-center`}>
                    <img src={bean} alt="" /> Esperesso
                </NavLink>

                <div className='w-[254px] h-12 flex gap-6 justify-center items-center'>
                    <img src={bean} />  Americano
                </div>
                <div className='w-[254px] h-12 flex gap-6 justify-center items-center'>
                    <img src={bean} />  Americano
                </div>
                <div className='w-[254px] h-12 flex gap-6 justify-center items-center'>
                    <img src={bean} />  Americano
                </div>

            </div>
        </>
    )
}

export default Swiper