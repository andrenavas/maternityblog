import { slide as Menu } from "react-burger-menu";
// import "./Sidebar.css";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Nav = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
    const location = useLocation();
    const isLinkActive = (path) => {
        return location.pathname === path;
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    return (
        <>
        
            <div
                className={isMobile ? "container-mobile" : "container-desktop"}
            >
                <figure className="container-logo">
                    <img
                        className="logo"
                        src="./src/assets/img/logo.png"
                        alt="logoJsMotos"
                    />
                </figure>

                {isMobile ? (
                    <Menu width={"100%"} isOpen={false}>
                        <Link
                            to="/"
                            className={`link ${
                                isLinkActive("/") ? "active-link" : ""
                            }`}
                        >
                            Inicio
                        </Link>
                        <Link
                            to="/about"
                            className={`link ${
                                isLinkActive("/about") ? "active-link" : ""
                            }`}
                        >
                            Nosotros
                        </Link>
                        <Link
                            to="/products"
                            className={`link ${
                                isLinkActive("/products") ? "active-link" : ""
                            }`}
                        >
                            Blog
                        </Link>
                        <Link
                            to="/contact"
                            className={`link ${
                                isLinkActive("/contact") ? "active-link" : ""
                            }`}
                        >
                            Contacto
                        </Link>
                    </Menu>
                ) : (
                    <div className="desktop-menu">
                        <Link
                            to="/"
                            className={`link ${
                                isLinkActive("/") ? "active-link" : ""
                            }`}
                        >
                            Inicio
                        </Link>
                        <Link
                            to="/about"
                            className={`link ${
                                isLinkActive("/about") ? "active-link" : ""
                            }`}
                        >
                            Nosotros
                        </Link>
                        <Link
                            to="/products"
                            className={`link ${
                                isLinkActive("/products") ? "active-link" : ""
                            }`}
                        >
                            Blog
                        </Link>
                        <Link
                            to="/contact"
                            className={`link ${
                                isLinkActive("/contact") ? "active-link" : ""
                            }`}
                        >
                            Contacto
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
};
export default Nav;