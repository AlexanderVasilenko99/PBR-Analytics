import SettlementModel from "../../../../Models/SettlementModel";
import "./Table.scss";
// import pbrLogo from '../../../../assets/images/pbr-logo2.png';
function Table(s: SettlementModel): JSX.Element {
    return (
        <table className="Table">
            <thead>
                <tr>
                    <th>מזהה ישוב (id)</th>
                    <th>שם ישוב</th>
                    <th>לשכת מנ"א</th>
                    <th>מזהה לשכת מנ"א</th>
                    <th>מועצה אזורית</th>
                    <th>מזהה מועצה אזורית</th>
                    <th></th>
                    {/* <th className="image-container-cell"><img src={pbrLogo} /></th> */}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{s._id}</td>
                    <td>{s.שם_ישוב}</td>
                    <td>{s.לשכת_מנא}</td>
                    <td>{s.קוד_לשכת_מנא}</td>
                    <td>{s.מועצה_אזורית}</td>
                    <td>{s.קוד_מועצה_אזורית ? s.קוד_מועצה_אזורית : ''}</td>
                    <td></td>
                </tr>
            </tbody>
            <thead>
                <tr>
                    <th>סה"כ תושבים</th>
                    <th>גילאי 0-5</th>
                    <th>גילאי 6-18</th>
                    <th>גילאי 19-45</th>
                    <th>גילאי 46-55</th>
                    <th>גילאי 56-64</th>
                    <th>גילאי 65+</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{s.סהכ}</td>
                    <td>{s.גיל_0_5}</td>
                    <td>{s.גיל_6_18}</td>
                    <td>{s.גיל_19_45}</td>
                    <td>{s.גיל_46_55}</td>
                    <td>{s.גיל_56_64}</td>
                    <td>{s.גיל_65_פלוס}</td>
                </tr>
            </tbody>
            <thead>
                <tr>
                    <th></th>
                    <th>אחוז גילאי 0-5</th>
                    <th>אחוז גילאי 6-18</th>
                    <th>אחוז גילאי 19-45</th>
                    <th>אחוז גילאי 46-55</th>
                    <th>אחוז גילאי 56-64</th>
                    <th>אחוז גילאי 65+</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td>{s.סהכ && (s.גיל_0_5 * 100 / s.סהכ).toFixed(1)}{s.סהכ && '%'}</td>
                    <td>{s.סהכ && (s.גיל_6_18 * 100 / s.סהכ).toFixed(1)}{s.סהכ && '%'}</td>
                    <td>{s.סהכ && (s.גיל_19_45 * 100 / s.סהכ).toFixed(1)}{s.סהכ && '%'}</td>
                    <td>{s.סהכ && (s.גיל_46_55 * 100 / s.סהכ).toFixed(1)}{s.סהכ && '%'}</td>
                    <td>{s.סהכ && (s.גיל_56_64 * 100 / s.סהכ).toFixed(1)}{s.סהכ && '%'}</td>
                    <td>{s.סהכ && (s.גיל_65_פלוס * 100 / s.סהכ).toFixed(1)}{s.סהכ && '%'}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Table;
