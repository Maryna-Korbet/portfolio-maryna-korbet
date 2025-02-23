// Node modules //
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";


const Navbar = ({ openModal }) => {
    const lastActiveLink = useRef();
    const activeLink = useRef(null);

    const initActiveLink = (event) => {
        if (lastActiveLink.current) {
            lastActiveLink.current.classList.remove("active");
        }
        event.target.classList.add("active");
        lastActiveLink.current = event.target;
        
        if (activeLink.current) {
            activeLink.current.style.top = `${event.target.offsetTop}px`;
            activeLink.current.style.left = `${event.target.offsetLeft}px`;
            activeLink.current.style.width = `${event.target.offsetWidth}px`;
            activeLink.current.style.height = `${event.target.offsetHeight}px`;
        }
    };

    useEffect(() => {
        const defaultActive = document.querySelector(".nav-link.active");
        if (defaultActive) {
            initActiveLink({ target: defaultActive });
        }
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
                    onClick={initActiveLink}
                >
                    {label}
                </a>
            ))}
            <span ref={activeLink} className="active-box"></span>
        </nav>
    )
};

Navbar.propTypes = {
    openModal: PropTypes.bool.isRequired,
};

export default Navbar;