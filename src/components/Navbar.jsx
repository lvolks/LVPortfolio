import logo from "../assets/logo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"


export const Navbar = () => {

  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="h-20 w-20 ml-10" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/lucas-volkweis-54b9a1278/" target="blank">
        <FaLinkedin className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300" />
        </a>
        <a href="https://github.com/lvolks" target="blank">
        <FaGithub className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300" />
        </a>
        <a href="https://www.instagram.com/lukasvkw/" target="blank">
        <FaInstagram className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300" />
        </a>
      </div>
    </nav>
  )
}
