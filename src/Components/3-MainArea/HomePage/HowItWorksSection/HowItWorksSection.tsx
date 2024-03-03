import "./HowItWorksSection.scss";
import image from '../../../../assets/images/b7.png';
import GetStarted from "../../../Common/GetStarted/GetStarted";
function HowItWorksSection(): JSX.Element {
    return (
        <div className="HowItWorksSection">
            <div className="left">
                <img src={image} alt="PBR-logo" />
            </div>
            <div className="right">
                <h1>What Exactly We Do</h1>
                <p>When a business is looking to expand by opening a new branch, choosing the right location is crucial to guarantee
                    maximum profit margins.
                </p>
                <p>At<span className="italic bold"> PBR Analytics©</span> we provide demographic information by age groups and
                    geographic location according to data provided by <span className="italic">Israel's Central Bureau of
                        Statistics </span>
                    <span className="bold">completely for free!</span>
                </p>
                <div className="button-container">
                    <GetStarted />
                </div>
            </div>
        </div>
    );
}

export default HowItWorksSection;
