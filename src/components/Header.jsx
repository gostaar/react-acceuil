import React, {useState} from "react";
import "../nav.css";
import projet from "../assets/projet.json";

const Header = () => {
    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }
    const handleNavLinkClick = () => {
        setShowLinks(false); // Masquer les liens de navigation lorsque l'un des liens est cliqué
    };

    return(
        <header>
            <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"} `}>
                <div className="navbar__logo">Logo</div>
                <ul className="navbar__links"> 
                {projet.map((projet) => (
                    <li className="navbar__item">
                        <a 
                        className="navbar__link" 
                        href={`#${projet.name}`}
                        onClick={handleNavLinkClick} // Appeler la fonction lorsqu'un lien est cliqué
                        >
                            {projet.name}
                        </a>
                    </li>
                ))}
                </ul>
                <button className="navbar__burger" onClick={handleShowLinks}>
                    <span className="burger-bar"></span>
                </button>
            </nav> 
        </header>
    )
}

export default Header;