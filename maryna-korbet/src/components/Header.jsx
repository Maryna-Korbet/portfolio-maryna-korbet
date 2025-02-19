
const Header = () => {
    return (
        <header className="fixed top-0 left-0 z-40 flex items-center w-full h-20 space-center bg-neutral-500">
            <div className="flex items-center justify-between w-full px-4 mx-auto max-w-screen-2 max-w-screen-2xl md:px-6 md:grid md:grid-cols-[1fr, 3fr, 1fr]">

                <h1>
                    <a href="/" className="logo">
                        <div className="flex items-center">
                            <div className="mr-2 ">[</div>
                            <div className="text-zinc-900">Maryna Korbet</div>
                            <div className="ml-2">]</div>
                        </div>
                    </a>
                </h1>

                <div className="relative flex md:justify-self-center">
                    <button
                        type="button"
                        className="menu-btn md:hidden"
                        onClick={null}
                    >
                        <span className="material-symbols-rounded">menu</span>
                    </button>
                </div>

                <a href="#contact" className="">
                    Contact Me 
                </a>
                
            </div>
        </header>
    )
};


export default Header;