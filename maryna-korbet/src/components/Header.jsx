// Node modules //
import { useState } from "react";

// Components //
import Navbar from "./Navbar";


const Header = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <header className="fixed top-0 left-0 z-40 flex items-center w-full h-20 space-center bg-neutral-500 bg-gradient-to-b">
            <div className="flex items-center justify-between w-full px-4 mx-auto max-w-screen-2xl">

                <a href="/" className="logo">
                    <div className="flex items-center">
                        <div className="mr-2 ">[</div>
                        <div className="text-zinc-900">Maryna Korbet</div>
                        <div className="ml-2">]</div>
                    </div>
                </a>

                <div className="relative flex md:justify-self-center">
                    <button
                        type="button"
                        className="menu-btn md:hidden"
                        onClick={null}
                    >
                        <span className="material-symbols-rounded">menu</span>
                    </button>

                    <Navbar openModal={openModal} />
                </div>
                
                <a href="#contact" className="contact">
                    <div className="flex items-center">
                        <div className="mr-2 ">[</div>
                        <div className="text-zinc-900">Contact Me</div>
                        <div className="ml-2">]</div>
                    </div>
                </a>

            </div>
        </header>
    )
};


export default Header;