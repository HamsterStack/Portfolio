import { useState } from "react"
import Modal from "./Modal"
const Projects = () => {
    const [statStratModal, setStatStratModal] = useState(false)
    const [projectTitle, setProjectTitle] = useState("")
    const [projectDesc, setProjectDesc] = useState("")
    const [devDesc, setDevDesc] = useState("")
    const [projectImg, setProjectImg] = useState("")
    const [side, setSide] = useState(false)
    const[link, setLink] = useState("")
    console.log(projectDesc)

    const setupModal = (projectName) => {
        if (projectName === "StatStrat") {
            setStatStratModal(true)
            setProjectTitle("StatStrat")
            setProjectDesc("StatStrat is an iOS app for tracking player statistics on the Minecraft server Hypixel. It has many unique features designed to help you learn and get better at the game by analyzing and reviewing your past performances.")
            setDevDesc("This was my first big iOS app and I plan to release it to the app store soon. I built the UI using SwiftUI and retrieved the latest player data from many different APIs in order to retrieve images of the player, statistics about them and more. I also used Firestore to store information about thousands of players and used Cloud Functions in order to track thousands of daily player statistics.")
            setProjectImg("statmodal.png")
            setLink("https://github.com/HamsterStack/StatStrat")
            setSide(false)

        }
        else if (projectName === "QuickRide") {
            setStatStratModal(true)
            setProjectTitle("QuickRide")
            setProjectDesc("QuickRide is an iOS app similar to Uber where you can find cheap rides to any location.")
            setDevDesc("I built the QuickRide UI with SwiftUI and UIKit, the map and all the path finding algorithms were implemented with MapKit and I implemented user auth with Firebase.")
            setProjectImg("quickmodal.png")
            setLink("https://github.com/HamsterStack/UberClone")
            setSide(true)
        }
        else if (projectName === "Adurite") {
            setStatStratModal(true)
            setProjectTitle("Adurite")
            setProjectDesc("Adurite is a web app with a marketplace where users can sell and purchase ROBLOX items. Adurite also has different minigames users can play with a virtual currency on the line such as opening cases, a crash minigame and more.")
            setDevDesc("I built the front-end with React, Framer Motion and Bootstrap. The back-end was built with Express and Firebase was used for storing user data and user authentication.")
            setProjectImg("sideadurite.png")
            setSide(false)
        }

    }
    return (
        <div id="projects" className="w-full  p-2 flex items-center py-16">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <div className="col-span-2">
                    <p className="uppercase text-2xl tracking-widest text-[#5651e5] ">Projects</p>
                    <p className="py-2 text-gray-600">Here are some of my favorite projects and some information about what they do, how I built them and more!
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 ">

                        
                        {/* <img className="rounded-xl shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-200" src="laptop.png"></img> */}
                        <img
                            onClick={() => {
                                setupModal("Adurite")

                            }}
                            className="rounded-xl shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-200" src="aduritelaptop.png"></img>

                        <img
                            onClick={() => {
                                setupModal("StatStrat")

                            }}
                            className="rounded-xl shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-200" src="sstest.png"></img>
                            <img onClick={() => {
                            setupModal("QuickRide")

                        }} className="rounded-xl shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-200" src="sstest2.png"></img>




                    </div>

                </div>
                <div></div>
            </div>
            <Modal modal={statStratModal} setModal={setStatStratModal} title={projectTitle} appDesc={projectDesc} devDesc={devDesc} image={projectImg} side={side} link={link}/>


        </div>
    )
}
export default Projects