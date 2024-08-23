import pic from "../assets/academic.png"
import { academic } from "../constants"
import { motion } from "framer-motion"

export const Academic = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="mt-10 text-center text-4xl">Academic</h1>
            <div className="flex flex-wrap">

                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 text-center">
                    <div className="flex justify-center lg:justify-start lg:ml-20 lg:text-2xl">
                        <p className="my-1 max-w-xl py-6">{academic}</p>
                    </div>
                </motion.div>

                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5, }}
                    className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img src={pic} className="rounded-2xl" />
                    </div>
                </motion.div>

            </div>
        </div>
    )
}
