import "./WhoIsItForSection.scss";
import image from '../../../../assets/images/background.png';
function WhoIsItForSection(): JSX.Element {
    return (
        <div className="WhoIsItForSection">
            <div className="left">
                <h1>Who Is This For?</h1>
                <p>
                    This services is designed mainly for the use of business owners and managers who wish to start or expand
                    their operations and require knowledge regarding the demographic population surrounding their desired new
                    location.
                </p>
                <p>
                    Albeit, the service is free for use, so if you are a statistics geek,  
                </p>
            </div>
            <div className="right">
                <img src={image} alt="PBR-logo" />
            </div>
        </div>
    );
}

export default WhoIsItForSection;
