import Bullet from "./Bullet"
import { AiFillTool } from "react-icons/ai"
import { FaPaintBrush } from "react-icons/fa"
import { useState } from "react"
import { RoughNotation } from "react-rough-notation"

const Skills = () => {

    const [skills, setSkills] = useState(true)
    const [hobbies, setHobbies] = useState(false)


    return (
        <div id="skills" className="w-full p-2 flex items-center  py-32 bg-[#d5dceb]">
            <div className="w-[1240px] m-auto flex items-center">
                <div className=" md:w-[575px]">
                    <div className="pb-6">
                        <p className="uppercase text-2xl tracking-widest text-[#5651e5] py-5">Skills & Hobbies</p>
                        <div className="flex">
                            <div onClick={() => {
                                setSkills(true)
                                setHobbies(false)
                            }} className={skills ? "flex items-center bg-[#5651e5] shadow-xl text-white rounded-md p-3 mx-2 ml-0 text-2xl cursor-pointer hover:scale-105 ease-in duration-200" :
                                "flex items-center bg-white text-gray-500 shadow-xl rounded-md p-3 mx-2 ml-0 text-2xl cursor-pointer hover:scale-105 ease-in duration-200 hover:bg-[#5651e5] hover:text-white"}>
                                <AiFillTool className="mr-2 " />
                                <button className="">Skills</button>
                            </div>
                            <div onClick={() => {
                                setHobbies(true)
                                setSkills(false)
                            }} className={hobbies ? "flex items-center text-white  bg-[#5651e5] shadow-xl rounded-md p-3 mx-2 ml-0 text-2xl cursor-pointer hover:scale-105 ease-in duration-200 hover:bg-[#5651e5] hover:text-white" :
                                "flex items-center text-gray-500  bg-white shadow-xl rounded-md p-3 mx-2 ml-0 text-2xl cursor-pointer hover:scale-105 ease-in duration-200 hover:bg-[#5651e5] hover:text-white "}>
                                <FaPaintBrush className="mr-2 fill-[rgb(107 114 128)] hover:fill-white" />
                                <button className=" ">Hobbies</button>
                            </div>
                        </div>


                    </div>
                    {skills && <div>
                        <div>
                            <div className="flex items-center py-2">
                                <div className="bg-green-400 w-[12px] h-[12px] mr-2 rounded-md"></div>

                                <div className="text-gray-600 text-lg">Experience building <RoughNotation show={true} color="green" type="underline" >iOS</RoughNotation> apps with <b>Swift</b>, <b>SwiftUI</b> and <b>UIKit</b>.</div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center py-2">
                                <div className="bg-green-400 w-[12px] h-[12px] mr-2 rounded-md"></div>

                                <div className="text-gray-600 text-lg">Experience building <RoughNotation show={true} color="green" type="underline" >web</RoughNotation> apps with <b>JavaScript</b>, <b>React</b>, <b>Next</b> and <b>Tailwind</b>.</div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center py-2">
                                <div className="bg-green-400 w-[12px] h-[12px] mr-2 rounded-md"></div>

                                <div className="text-gray-600 text-lg">Worked with technologies such as <b>Firebase</b>, <b>Node</b> and <b>Express</b> in the <RoughNotation show={true} color="green" type="underline">backend</RoughNotation>.</div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center py-2">
                                <div className="bg-green-400 w-[12px] h-[12px] mr-2 rounded-md"></div>

                                <div className="text-gray-600 text-lg">Used <b>Git</b> and <b>Github</b> for version control throughout all my applications.</div>
                            </div>
                        </div>

                    </div>}
                    {hobbies && <div>
                        <Bullet text={"I'm a big fan of MMA and BJJ and follow the UFC very closely."} />
                        <Bullet text={"I enjoy playing many different video games such as UFC 4 and Dead by Daylight."} />
                        <Bullet text={"I love watching movies and my favorite movie genre without a doubt is horror."} />
                        <Bullet text={"Used Git and GitHub for version control of all my applications."} />
                    </div>}

                </div>
                <div>
                    <img src="Untitled.png" className="w-[50rem]  "></img>


                </div>
            </div>
        </div>
    )
}
export default Skills