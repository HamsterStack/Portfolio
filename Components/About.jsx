const About = () => {
    return (
        <div id="about" className="w-full  p-2 flex items-center py-32">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="uppercase text-2xl tracking-widest text-[#5651e5]">About</p>
                    <h2 className="py-4">Who I Am</h2>
                    <p className="py-2 text-gray-600">I am a computer science student very interested in mainly iOS and web development. I first started programming for iOS in 2019 and became interested in web development a few months later as well.
                        I have a lot of experience building iOS apps with Swift, SwiftUI, UIKit, Vision and more. I also have lots of experience building web apps using JavaScript, React, Next and Tailwind.
                    </p>

                </div>
                <div></div>
            </div>
        </div>
    )
}
export default About