import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed top-0 right-0 bg-transparent text-white px-4 py-3 w-full">
            <div className="flex justify-end items-center">
                {/* hamburger */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
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
                <div className="flex flex-col space-y-1 md:hidden items-end">
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