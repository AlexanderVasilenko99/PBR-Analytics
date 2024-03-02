import "./WhoIsItForSection.scss";
import image from '../../../../assets/images/background.png';
function WhoIsItForSection(): JSX.Element {
    return (
        <div className="WhoIsItForSection">
            <div className="left">
                <h1>Who Is This Service For?</h1>
                <p>

                </p>
            </div>
            <div className="right">
                <img src={image} alt="PBR-logo" />
            </div>
        </div>
    );
}

export default WhoIsItForSection;
