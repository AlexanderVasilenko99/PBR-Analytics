import { Navigate, Route, Routes } from "react-router-dom";
import appConfig from "../../AppConfig";
import AboutPage from "../3-MainArea/AboutPage/AboutPage";
import ContactPage from "../3-MainArea/ContactPage/ContactPage";
import GetStartedPage from "../3-MainArea/GetStartedPage/GetStartedPage";
import HomePage from "../3-MainArea/HomePage/HomePage";
import "./Router.scss";

function Router(): JSX.Element {
    return (
        <div className="Router">
            <Routes>
                <Route path={appConfig.homeRoute} element={<HomePage />}></Route>
                <Route path={appConfig.aboutRoute} element={<AboutPage />}></Route>
                <Route path={appConfig.contactRoute} element={<ContactPage />}></Route>
                <Route path={appConfig.getStartedRoute} element={<GetStartedPage />}></Route>

                {/* Default Routes */}
                <Route path="" element={<Navigate to={appConfig.homeRoute} />} />
                <Route path="/PBR-Analytics/" element={<Navigate to={appConfig.homeRoute} />} />
                <Route path="/" element={<Navigate to={appConfig.homeRoute} />} />
                <Route path="*" element={<Navigate to={appConfig.homeRoute} />} />
            </Routes>
        </div>
    );
}

export default Router;
