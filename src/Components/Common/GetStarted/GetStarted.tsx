import { NavLink } from "react-router-dom";
import "./GetStarted.scss";
import appConfig from "../../../AppConfig";

function GetStarted(): JSX.Element {
    return (
        <NavLink to={appConfig.homeRoute} className="GetStarted">
            Get Started!
        </NavLink>
    );
}

export default GetStarted;
