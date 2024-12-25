import { useState } from "react";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle function for opening and closing the menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="navbar bg-base-100">
            <div className="flex justify-between items-center w-full px-4 py-2">
                {/* Brand Section */}
                <div className="text-2xl font-bold text-primary">
                    <a href="#">Developer Avik</a>
                </div>

                {/* Hamburger Icon (Mobile/Tablet) */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-3xl">
                        <i className={`fa ${isMenuOpen ? "fa-times" : "fa-bars"}`} />
                    </button>
                </div>

                {/* Navbar Menu */}
                <div 
                    className={`lg:flex space-x-6 ${isMenuOpen ? "block" : "hidden"} lg:block`}
                >
                    <ul className="menu menu-horizontal px-1 font-semibold text-xl space-x-6">
                        <li>
                            <a href="#" className="hover:text-primary">About Me</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-primary">Skills</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-primary">Projects</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-primary">Blogs</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-primary">Certifications</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-primary">Resume</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-primary">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
