import { NavLink } from "react-router-dom";
import appConfig from "../../AppConfig";
import logo from '../../assets/images/pbr-logo.png';
import "./NavbarArea.scss";
function NavbarArea(): JSX.Element {
    return (
        <ul className="NavbarArea">
            <li className="logo"><NavLink to={appConfig.homeRoute}><img src={logo} alt="pbr-logo" /></NavLink></li>
            <li><NavLink to={appConfig.getStartedRoute}>Get Started!</NavLink></li>
            <li><NavLink to={appConfig.contactRoute}>Contact</NavLink></li>
            <li><NavLink to={appConfig.aboutRoute}>About</NavLink></li>
            {/* <li><NavLink to={'#'}>Language</NavLink></li> */}
        </ul>
    );
}

export default NavbarArea;
