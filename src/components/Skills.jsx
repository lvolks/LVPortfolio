import React from 'react'
import { skills } from '../constants'
import { motion } from "framer-motion"

const circleVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

export const Skills = () => {
    return (
        <div className='relative mt-20 border-b border-neutral-800 min-h-[800px] select-none'>
            <div className='text-center select-none'>
                <motion.h2 
                whileInView={{ opacity: 1, y: 0 }} 
                initial={{ opacity: 0, y: -100 }} 
                transition={{ duration: 1.5 }} 
                className='text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide'>
                    Showing my
                    <span className='bg-gradient-to-r from-pink-300 to-purple-500 text-transparent bg-clip-text'>
                        {" "}
                        skills
                    </span>
                    !
                </motion.h2>
            </div>

            <div className='flex flex-wrap justify-center mt-10'>
                {skills.map((skillCategory, index) => (
                    <div key={index} className='w-full mb-10'>

                        <motion.h2 
                        whileInView={{ opacity: 1, y: 0 }} 
                        initial={{ opacity: 0, y: 100 }} 
                        transition={{ duration: 1.0 }} 
                        className='text-center bg-gradient-to-r from-pink-300 to-purple-500 bg-clip-text text-transparent line-height-fix text-3xl sm:text-5xl lg:text-6xl tracking-wide'>
                            {skillCategory.category}
                        </motion.h2>

                        <div className='flex flex-wrap justify-center'>
                            {skillCategory.items.map((skill, skillIndex) => (

                                <motion.div
                                    whileInView={{ opacity: 1, x: 0 }} 
                                    initial={{ opacity: 0, x: -100 }} 
                                    transition={{ duration: 1.5 }}
                                    key={skillIndex}
                                    className='w-full md:w-1/3 px-4 py-4 flex justify-center'
                                >
                                    <motion.div
                                        variants={circleVariants(2)}
                                        initial="initial"
                                        animate="animate"
                                        className="relative size-40">
                                        <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                            <circle
                                                cx="18"
                                                cy="18"
                                                r="16"
                                                fill="none"
                                                className="stroke-current text-gray-200 dark:text-neutral-700"
                                                strokeWidth="2"
                                            />
                                            <circle
                                                cx="18"
                                                cy="18"
                                                r="16"
                                                fill="none"
                                                className={skill.classname}
                                                strokeWidth="2"
                                                strokeDasharray="100"
                                                strokeDashoffset={skill.percentage}
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                        <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 flex flex-col">
                                            <span className={skill.text}>
                                                {skill.name}
                                            </span>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
