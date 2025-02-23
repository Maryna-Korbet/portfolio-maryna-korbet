// Node modules //
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";


const Navbar = ({ openModal }) => {
    const lastActiveLink = useRef();
    const activeLink = useRef(null);

    const initActiveLink = () => {
    if (!lastActiveLink.current || !activeLink.current) return;

    activeLink.current.style.top = `${lastActiveLink.current.offsetTop}px`;
    activeLink.current.style.left = `${lastActiveLink.current.offsetLeft}px`;
    activeLink.current.style.width = `${lastActiveLink.current.offsetWidth}px`;
    activeLink.current.style.height = `${lastActiveLink.current.offsetHeight}px`;
};

useEffect(() => {
    initActiveLink();
}, []);

    const navItems = [
        {
            label: "Home",
            link: "#home",
            className: 'nav-link active',
            ref: lastActiveLink,
            key: 1,
        },
        {
            label: "About",
            link: "#about",
            className: 'nav-link',
            key: 2,
        },
        {
            label: "Experience",
            link: "#experience",
            className: 'nav-link',
            key: 3,
        },
        {
            label: "Projects",
            link: "#projects",
            className: 'nav-link',
            key: 4,
        },
        {
            label: "Contact",
            link: "#contact",
            className: 'nav-link md:hidden',
            key: 5,
        },
    ];

    return (
        <nav className={"navbar" + (openModal ? " active" : "")}>
            {navItems.map(({ label, link, className, ref: lastActiveLink, key }) => (
                <a
                    key={key}
                    href={link}
                    className={`${className} ${className === "nav-link active" ? "active-box" : ""}`}
                    ref={className === "nav-link active" ? lastActiveLink : null}
                    onClick={null}
                >
                    {className === 'nav-link active' ? <span className="mr-2">[</span> : null}
                    {label}
                    {className === 'nav-link active' ? <span className="ml-2">]</span> : null}
                </a>
            ))}
        </nav>
    )
};

Navbar.propTypes = {
    openModal: PropTypes.bool.isRequired,
};

export default Navbar;