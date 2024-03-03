import { useEffect, useState } from "react";
import "./GetStartedPage.scss";
import settlementServices from "../../../Services/SettlementServices";
import SettlementModel from "../../../Models/SettlementModel";

function GetStartedPage(): JSX.Element {
    const [settlements, setSettlements] = useState<SettlementModel[]>([]);
    useEffect(() => {
        settlementServices.getAllSettlements()
            .then((s: SettlementModel[]) => {
                console.log(s)
                setSettlements(s)
            })
            .catch((err: any) => console.log(err));
    }, []);
    return (
        <div className="GetStartedPage">
            GetStartedPage
            <ul>
                {settlements.length > 1 && settlements?.map(s => <li key={s._id}>{s.שם_ישוב}</li>)}
            </ul>
            <hr />
        </div>
    );
}

export default GetStartedPage;
