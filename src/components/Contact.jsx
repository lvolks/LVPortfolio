import { motion } from "framer-motion"
import { React, useState } from "react";
import Swal from 'sweetalert2'

export const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9d03fd2f-ab41-43f9-91b9-4a4dd7b416ce");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="max-w w-full mx-auto p-6 shadow-md ">

      <motion.h2 
      whileInView={{ opacity: 1, y: 0 }} 
      initial={{ opacity: 0, y: 100 }} 
      transition={{ duration: 1.0 }} 
      className="text-center bg-gradient-to-r from-pink-300 to-purple-500 bg-clip-text text-transparent line-height-fix text-3xl sm:text-5xl lg:text-6xl tracking-wide mb-5">
      Contact Me
      </motion.h2>

      <motion.form 
      whileInView={{ opacity: 1, x: 0 }} 
      initial={{ opacity: 0, x: -100 }} 
      transition={{ duration: 1.0 }} 
      onSubmit={onSubmit}>

        <div className="mb-4">
          <label className="block text-white text-sm mb-2" htmlFor="">Your Name</label>
          <input name="name" placeholder="John Snow" className="w-full px-3 py-2  rounded-lg bg-gray-800 focus:border-blue-500 focus:border-blue-500" required type="text" />
        </div>

        <div className="mb-4">
          <label className="block text-white text-sm mb-2" htmlFor="">Your Email</label>
          <input name="email" placeholder="johnsnow@example.com" className="w-full px-3 py-2  rounded-lg bg-gray-800 focus:border-blue-500 focus:border-blue-500" required type="email" />
        </div>

        <div className="mb-4">
          <label className="block text-white text-sm mb-2" htmlFor="">Your Message</label>
          <textarea name="message" rows="4" placeholder="Type your message here..." className="w-full px-3 py-2 rounded-lg bg-gray-800 focus:border-blue-500 focus:border-blue-500" required type="text" />
        </div>

        <div className="flex justify-center">
          <button type="submit" className="bg-gradient-to-r from-pink-400 to-purple-500 text-white px-4 py-2 rounded-lg focus:outline-white transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 mt-2">Send Message</button>
        </div>
      </motion.form>
    </div>
  )
}
