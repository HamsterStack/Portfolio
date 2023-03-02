import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Link from 'next/link'

export default function MyModal({ modal, setModal, title, appDesc, devDesc, image, side, link }) {
    let [isOpen, setIsOpen] = useState(true)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>


            <Transition appear show={modal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => { setModal(false) }}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className={side ? "w-[50rem]  transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all" : "w-[60rem]  transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"}>

                                    <div className="mt-2 flex sm:items-center">
                                        <img src={image} className={title === "StatStrat" || title==="Adurite" ? " w-[50%] h-[50%] p-8" : " w-[20%] h-[50%] p-4 mx-8"}></img>
                                        <div className="flex flex-col">
                                            <div className="pb-8">
                                                <h2 className="text-sm md:text-3xl pb-2">{title}</h2>
                                                <div className="bg-gray-200 w-[100%] h-[2px] rounded-xl"></div>
                                                <p className="pt-4">{appDesc}</p>
                                            </div>

                                            <div>
                                                <h2 className=" text-sm md:text-3xl pb-2">Development</h2>
                                                <div className="bg-gray-200 w-[100%] h-[2px] rounded-xl"></div>
                                                <p className="pt-4">{devDesc}</p>

                                            </div>
                                            <div className="flex justify-evenly pt-10">

                                                <Link href={link} passHref={true}>
                                                    <button
                                                        type="button"
                                                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2  text-lg font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"

                                                    >
                                                        Link
                                                    </button>
                                                </Link>
                                                <button
                                                    type="button"
                                                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-lg font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                    onClick={() => { setModal(false) }}
                                                >
                                                    Close
                                                </button>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="mt-4">

                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}