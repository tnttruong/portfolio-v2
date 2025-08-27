import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bg-transparent text-white px-4 py-3">
            <div className="flex justify-end items-center ml-75 ">
                {/* hamburger */}
                <button className="md:hidden absolute top-4 right-4 " onClick={() => setIsOpen(!isOpen)}>
                    <span className="block w-6 h-0.5 bg-bone my-1" />
                    <span className="block w-6 h-0.5 bg-bone my-1" />
                    <span className="block w-6 h-0.5 bg-bone my-1" />
                </button>

                {/* Desktop view */}
                <div className="hidden md:flex space-x-4">
                    <a href="/">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>

            {/* Mobile */}
            {isOpen && (
                <div className="flex flex-col mt-10 space-y-2 md:hidden ml-60">
                    <a href="/">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            )}
        </div>
    )
}

export default Navbar;