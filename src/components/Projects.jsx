import { projects } from '../constants'
import { motion } from "framer-motion"

export const Projects = () => {
    return (
        <div className='relative mt-20 border-b border-neutral-800 min-h-[600px] '>
            <div className='text-center select-none'>

                <motion.h2 
                whileInView={{ opacity: 1, y: 0 }} 
                initial={{ opacity: 0, y: -100 }} 
                transition={{ duration: 1.5 }} 
                className='text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide'>
                    Discover some of my
                    <span className='bg-gradient-to-r from-pink-300 to-purple-500 text-transparent bg-clip-text'>
                        {" "}
                        projects
                    </span>
                    !
                </motion.h2>

            </div>
            <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 sm:w-30 justify-center mt-10 lg:mt-20' >
                {projects.map((project, index) => (

                    <motion.div 
                    whileInView={{ opacity: 1, y: 0 }} 
                    initial={{ opacity: 0, y: 100 }} 
                    transition={{ duration: 1.5 }} 
                    key={index} 
                    className='w-full py-3 px-5 text-3xl sm:text-5xl lg:text-6xl'>

                        <div className='border rounded-md w-30 h-60 flex items-center justify-center text-white transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'
                            style={{ backgroundImage: `url('${project.bg}')`, }}
                        ><span className="relative z-10 tracking-wide text-center"><a href={project.link} target='blank'>{project.name}</a></span>
                        </div>
                    </motion.div>

                ))}
            </div>
        </div>
    )
}