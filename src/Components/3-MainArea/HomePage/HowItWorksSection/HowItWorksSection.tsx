import "./HowItWorksSection.scss";
import image from '../../../../assets/images/background.png';
function HowItWorksSection(): JSX.Element {
    return (
        <div className="HowItWorksSection">
            <div className="left">
                <img src={image} alt="PBR-logo" />
            </div>
            <div className="right">
                <h1>How Do We Achieve that goal?</h1>
                <p>When a business is looking to expand by opening a new branch, choosing the right location is crucial to guarantee
                    maximizing profit margins.
                </p>
                <p>At<span className="italic bold"> PBR Analytics©</span> we provide demographic segmentation by age groups and geographic
                    location according to data provided by <span className="italic">Israel's Central Bureau of Statistics </span>
                    <span className="bold">completely for free!</span>
                </p>
            </div>
        </div>
    );
}

export default HowItWorksSection;
