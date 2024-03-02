import "./IntroSection.scss";
import logo from '../../../../assets/images/pbr-logo-xl.png';
import GetStarted from "../../../Common/GetStarted/GetStarted";
function IntroSection(): JSX.Element {
    return (
        <div className="IntroSection">
            <div className="left">
                <img src={logo} alt="PBR-logo" />
            </div>
            <div className="right">
                <h1>Who are we?</h1>
                <p><span className="italic bold">PBR Analytics©</span> is a project by Alexander Vasilenko designed to help business owners looking to expand
                    theirs operations in new locations and assist aspiring entrepreneurs when before launching.</p>
                <GetStarted />
            </div>
        </div>
    );
}

export default IntroSection;
