import React from 'react'
import logo from "../../assets/icons/Logo.svg"
import icn1 from "../../assets/icons/register_icon1.png"
import icn2 from "../../assets/icons/register_icon2.png"
import icn3 from "../../assets/icons/register_icon3.png"
const AuthLayout = ({ children }) => {

    const ModalShowCase = [

        {
            heading: "Quick and easy to use",
            description: "You configure everything in just a few clicks and technical expertise thanks to the ease of use and intuitiveness of the platform. Real-time updates.",
            icon: icn1
        },
        {
            heading: "A world of links and content",
            description: "Insert menu or item catalog easily, you can connect your social and online channels for reviews. Add photos, image gallery, custom forms and much more.",
            icon: icn2
        },
        {
            heading: "Create a community of loyal customers",
            description: "Connect your customers via the digital room and communicate with them by sending notifications and promotions without worrying about the GDPR.",
            icon: icn3
        },
    ]
    return (
        <div className='  md:p-3 p-2 lg:p-4 bg-gradient-to-tr to-[#fff] from-pink-300  '>
            <div className='flex justify-center '>
                <img className=' sm:w-auto w-5/12' src={logo} alt="logo" />
                Uni Share
            </div>

            <div className=" lg:my-10 md:mx-3 mx-2 mt-2 md:mt-4 md:my-8 sm:my-6 my-4 lg:mx-4 lg:mt-5 gap-x-10  md:grid grid-cols-[2fr_1fr]">
                <div className=''>
                    <h2 className=" md:text-2xl text-lg sm:text-xl lg:text-3xl font-[550] text-gray-800 font-primary ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit,
                        dolore, sequi! corem ipsum
                        &nbsp;
                        <span className='font-[400] md:inline hidden'>
                            sequi! corem ipsum dolor sit amet.
                        </span>
                        <span className='font-[400] inline md:hidden'>
                            dolor sit amet.
                        </span>
                    </h2>
                    <p className='font-bold  md:text-xl text-lg lg:text-2xl my-2'>
                        Get started now for free, no card required.
                    </p>
                    <div className='p-4 md:p-0 md:hidden'>
                        {children}
                    </div>
                    <div className=' md:mt-8 flex flex-col sm:space-y-6 space-y-4 md:space-y-8  sm:mt-6 mt-4 lg:mt-10'>
                        {ModalShowCase.map((item) => {
                            return <div key={item.heading}>
                                <div className="flex items-center">
                                    <div>
                                        <div className='flex md:space-x-3 sm:space-x-2 space-x-1  items-center'>
                                            <div >
                                                <img className='w-auto md:w-[100px] ' src={item.icon} alt={item.heading} />
                                            </div>
                                            <div className='flex flex-col  space-y-2'>
                                                <h2 className=' sm:text-xl   text-lg md:text-2xl font-bold'>
                                                    {item.heading}
                                                </h2>
                                                <p>
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
                <div className='md:block hidden'>
                    {children}
                </div>
            </div>

        </div>
    )
}

export default AuthLayout