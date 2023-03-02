import { AiOutlineMail } from "react-icons/ai"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import Image from "next/image"
import { redirect } from 'next/navigation'
import { RoughNotation } from "react-rough-notation"
import Link from "next/link"




const Main = () => {
    const linkedInLink = "https://www.linkedin.com/in/tommlr/"
    const githubLink = "https://github.com/HamsterStack"
    return (
        <div id="home" className=" w-full text-center py-[8rem]">
            <div className="max-w[1240px] w-full h-full mx-auto p-2 flex flex-col  items-center">
                <div>


                    <h1 className="py-4 text-gray-700">
                        Hi, I'm <span className="text-[#5651e5]" >Tom Miller</span></h1>
                    <h1 className="py-2 text-gray-700">
                        An <RoughNotation order="1" animationDelay="600" show={true} color="#ffd54f" type="highlight">iOS</RoughNotation> and <RoughNotation order="2" animationDelay="1200" show={true} color="#ffd54f" type="highlight" >Web Developer</RoughNotation>
                    </h1>
                    <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente exercitationem unde aliquid quos obcaecati sed dicta asperiores nesciunt facilis quam. Similique aliquam soluta, perferendis consectetur fugit cum recusandae possimus doloribus.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente exercitationem unde aliquid quos obcaecati sed dicta asperiores nesciunt facilis quam. Similique aliquam soluta, perferendis consectetur fugit cum recusandae possimus doloribus.


                    </p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        <Link href={linkedInLink} passHref={true}>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                <FaLinkedinIn />
                            </div>
                        </Link>
                        <Link href={githubLink} passHref={true}>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                <FaGithub />
                            </div>
                        </Link>

                        <Link href="mailto:tommillercs@gmail.com" passHref={true}>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                <AiOutlineMail />
                            </div>
                        </Link>



                    </div>


                </div>

                <img className="pt-[6vh] w-[50vh]" src="statstrat3d.png"  ></img>

            </div>


        </div>
    )

}

export default Main