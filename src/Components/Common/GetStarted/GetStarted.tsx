import { NavLink } from "react-router-dom";
import appConfig from "../../../AppConfig";
import "./GetStarted.scss";

function GetStarted(): JSX.Element {
    return (
        <NavLink to={appConfig.getStartedRoute} className="GetStarted">
            Get Started!
        </NavLink>
    );
}

export default GetStarted;
