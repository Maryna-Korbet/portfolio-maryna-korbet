import { useRef } from "react";

const Navbar = () => {
    const lastActiveLink = useRef();
    const activeLink = useRef(null);

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
        <nav className="navBar">
            {navItems.map(({ label, link, className, ref, key }) => (
                <a
                    key={key}
                    href={link}
                    className={className}
                    ref={ref}
                    onClick={null}
                >
                    {label}
                </a>
            ))}

            <div
                className="active-box"
                ref={activeLink}
            ></div>
        </nav>
    )
};

export default Navbar;