import React, { useEffect, useRef, useState } from 'react'
import images from '../images/index'
import { motion } from 'framer-motion'
const
    Slider = () => {
        const [width, setWidth] = useState(0);
        const carousel = useRef()
        useEffect(() => {
            // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth)
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
        }, [])

        return (
            <>
                <motion.div whileTap={{ cursor: "grabbing" }} ref={carousel} className='max-w-7xl mt-24 mx-auto h-screen overflow-hidden  '>
                    <h1 className='font-serif font-bold text-5xl text-center mb-9'>Newest</h1>
                    <motion.div drag='x' dragConstraints={{ right: 0, left: -width }} className='flex justify-center items-center gap-7 relative left-96'>
                        {images.map((image, i) => (
                            <motion.div key={i} className=' cursor-pointer'>
                                <img src={image} alt="images" className='pointer-events-none  ' />

                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </>
        )
    }

export default Slider