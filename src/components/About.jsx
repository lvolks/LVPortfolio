import pic from "../assets/about.png"
import { aboutme } from "../constants"
import { motion } from "framer-motion"

export const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">About
                <span className="bg-gradient-to-r from-pink-300 to-purple-500 bg-clip-text text-transparent">{" "}Me</span>
            </h1>
            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5, }}
                    className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img src={pic} className="rounded-2xl" />
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 text-center">
                    <div className="flex justify-center lg:justify-start lg:text-2xl">
                        <p className="my-2 max-w-xl py-6">{aboutme}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
