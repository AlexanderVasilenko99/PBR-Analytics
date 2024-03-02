import "./FooterArea.scss";
import logo from '../../assets/images/pbr-logo2.png'
function FooterArea(): JSX.Element {
    return (
        <div className="FooterArea">
            <img src={logo} alt="PBR-logo" />
            ©All rights reserved Alexander Vasilenko & PBR Analytics 2024.
        </div>
    );
}

export default FooterArea;
