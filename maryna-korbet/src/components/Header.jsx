// Node modules //
import { useState } from "react";

// Components //
import Navbar from "./Navbar";


const Header = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <header className="fixed top-0 left-0 z-40 flex items-center justify-between w-full md:items-center h-14 md:h-20 bg-neutral-500 bg-gradient-to-b">
            <div className="flex items-center justify-between w-full px-4 mx-auto md:w-auto max-w-screen-2xl">
                
                {/* Logo */}
                <a href="/" className="flex-1 logo md:flex-start">
                    <div className="flex items-center">
                        <div className="mr-2 ">[</div>
                        <div className="transition-all duration-150 text-zinc-900 hover:text-amber-400">Maryna Korbet</div>
                        <div className="ml-2">]</div>
                    </div>
                </a>

                {/* Menu-button for the mobile version */}
                <div className="relative flex md:justify-self-center">
                    <button
                        type="button"
                        className="menu-btn md:hidden"
                        onClick={() => setOpenModal((prev) => !prev)}
                    >
                        <span className="material-symbols-rounded">{openModal ? "close" : "menu"}</span>
                    </button>
                </div>

                {/* Navigation */}
                <Navbar openModal={openModal} />

                {/* Contact-me button (only visible on large screens)*/}
                <a href="#contact" className="hidden contactme md:flex md:flex-end">
                    <div className="flex items-center">
                        <div className="mr-2 ">[</div>
                        <div className="text-zinc-900 hover:text-amber-400">Contact Me</div>
                        <div className="ml-2">]</div>
                    </div>
                </a>

            </div>
        </header>
    )
};


export default Header;