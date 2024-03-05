import { useEffect, useState } from "react";
import "./GetStartedPage.scss";
// import settlementServices from "../../../Services/SettlementServices";
import SettlementModel from "../../../Models/SettlementModel";
import { HashLink } from 'react-router-hash-link';
import { Collapse } from 'react-collapse';

function GetStartedPage(): JSX.Element {
    const [settlements, setSettlements] = useState<SettlementModel[]>([]);
    const [collapse, setCollapse] = useState<boolean>(false);
    useEffect(() => {
        // settlementServices.getAllSettlements()
        //     .then((s: SettlementModel[]) => {
        //         console.log(s)
        //         setSettlements(s)
        //     })
        //     .catch((err: any) => console.log(err));
    }, []);
    return (
        <div className="GetStartedPage">
            <section className="intro-section">
                <h1>Search Location:</h1>
                <form>
                    this is form
                    <HashLink to={"#result"} smooth>any</HashLink>
                    <button type="button" onClick={() => setCollapse(!collapse)}>{collapse ? "close" : "open"}</button>
                </form>
            </section>

            <section className="most-popular">
                <h1>Most Searched Locations:</h1>
                <div className="display-most-popular">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                </div>
            </section>

            <section id="result" className="result-sections">here will we displayed content
                <ul>
                    {settlements.length > 1 && settlements?.map(s => <li key={s._id}>{s.שם_ישוב}</li>)}
                </ul>
                <Collapse isOpened={collapse} >
                    display chart here!
                </Collapse>
            </section>
        </div>
    );
}

export default GetStartedPage;
