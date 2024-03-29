import Image from "next/image"
import Link from "next/link"
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { BsFillPersonLinesFill } from "react-icons/bs"

import { useState, useEffect } from "react"
const Navbar = () => {

    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)

    }, [])

    const handleNav = () => {
        setNav(prev => !prev)
    }
    return (
        <div className={shadow ? "fixed w-full h-20 shadow-xl z-[100] bg-[#ecf0f3]" : "fixed w-full h-20 z-[100] bg-[#ecf0f3]"}>
            <div className="flex justify-between items-center w-full h-full px-2 lg:px-16 2xl:justify-evenly sm:justify-between sm:px-8">
                <div className="text-4xl">🧑🏻‍💻 Tom Miller</div>


                <div>
                    <ul className="hidden md:flex">
                        <Link href="/">
                            <l1 className="ml-10 text-sm uppercase hover:border-b">Home</l1>
                        </Link>
                        <Link href="/#about">
                            <l1 className="ml-10 text-sm uppercase hover:border-b">About</l1>
                        </Link>
                        <Link href="/#skills">
                            <l1 className="ml-10 text-sm uppercase hover:border-b">Skills</l1>
                        </Link>
                        <Link href="/#projects">
                            <l1 className="ml-10 text-sm uppercase hover:border-b">Projects</l1>
                        </Link>
                        
                    </ul>
                    <div onClick={handleNav} className="md:hidden">
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            <div className={nav ? " md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ease-in duration-500" : ""} onClick={handleNav}>
                <div className={nav ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500" :
                    "fixed left-[-100%] top-0  p-10 ease-in duration-500"}>
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <div className="text-2xl">🧑🏻‍💻 Tom Miller</div>
                            <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className="border-b border-gray-300 my-4">
                            <p className="w-[85%] md:w-[90%] py-4">Isaac is the best game ever!!!</p>
                        </div>
                    </div>
                    <div className="py-4 flex flex-col">
                        <ul className="uppercase">
                            <Link href="/">
                                <li className="py-4 text-sm">Home</li>
                            </Link>
                            <Link href="/about">
                                <li className="py-4 text-sm">About</li>
                            </Link>
                            <Link href="/projects">
                                <li className="py-4 text-sm">Projects</li>
                            </Link>
                            <Link href="/contact">
                                <li className="py-4 text-sm">Contact</li>
                            </Link>
                        </ul>
                        <div className="pt-40 ">
                            <p className="uppercase tracking-widest text-[#5651e5]">Let's Connect</p>
                            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <FaLinkedinIn />
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <FaGithub />
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <AiOutlineMail />
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <BsFillPersonLinesFill />
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Navbar