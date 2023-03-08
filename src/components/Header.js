import logo from "../assets/WincLogoNew.png"
import "../styles/home.css"

function Header() {
    return (
        <div className="header-container">
            <a href="https://www.wincacademy.com" >
                <img src={logo} alt="WincLogo" />
            </a>
            <h2>Winc Student Dashboard</h2>
        </div>
    )
}

export default Header