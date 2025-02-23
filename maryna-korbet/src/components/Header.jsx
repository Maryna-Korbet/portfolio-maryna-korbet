// Node modules //
import { useState } from "react";

// Components //
import Navbar from "./Navbar";


const Header = () => {
    const [openModal, setOpenModal] = useState(true);

    return (
        <header className="fixed top-0 left-0 z-40 flex items-center justify-center w-full h-14 md:h-20 space-center bg-neutral-500 bg-gradient-to-b">
            <div className="flex items-center w-full px-4 mx-auto md:justify-center max-w-screen-2xl">

                <a href="/" className="flex-1 logo">
                    <div className="flex items-center">
                        <div className="mr-2 ">[</div>
                        <div className="transition-all duration-150 text-zinc-900 hover:text-amber-400">Maryna Korbet</div>
                        <div className="ml-2">]</div>
                    </div>
                </a>

                <div className="relative flex md:justify-self-center">
                    <button
                        type="button"
                        className="menu-btn md:hidden"
                        onClick={() => setOpenModal((prev) => !prev)}
                    >
                        <span className="material-symbols-rounded">{openModal ? "close" : "menu"}</span>
                    </button>
                    
                    <Navbar openModal={openModal} />
                    
                </div>
                
                <a href="#contact" className="hidden contactme md:flex">
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