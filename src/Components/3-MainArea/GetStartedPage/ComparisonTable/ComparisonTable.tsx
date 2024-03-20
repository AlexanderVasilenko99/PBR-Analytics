import SettlementModel from "../../../../Models/SettlementModel";
import "./ComparisonTable.scss";

function ComparisonTable(props: { settlements: SettlementModel[] }): JSX.Element {
    const x = props.settlements;

    return (
        <table className="ComparisonTable">

            {props && <><thead>
                <tr>
                    <th>שם ישוב</th>
                    {x && x.map(s => <th key={"comparison" + s?.שם_ישוב}>{s?.שם_ישוב}</th>)}
                    <th>סה"כ</th>
                </tr>
            </thead>
                <tbody>
                    <tr>
                        <th>מזהה ישוב (id)</th>
                        {x && x.map(s => <td key={"comparison" + s?.סמל_ישוב}>{s?.סמל_ישוב}</td>)}
                    </tr>
                    <tr>
                        <th>לשכת מנ"א ומזהה</th>
                        {x && x.map(s => <td key={"comparison" + s?.לשכת_מנא}>{s?.לשכת_מנא} {s?.קוד_לשכת_מנא}</td>)}
                    </tr>
                    <tr>
                        <th>מועצה אזורית ומזהה</th>
                        {x && x.map(s => <td key={"comparison" + s?.מועצה_אזורית}>{s?.מועצה_אזורית} {s?.קוד_מועצה_אזורית}</td>)}
                    </tr>
                    <tr>
                        <th>סה"כ תושבים</th>
                        {x && x.map(s => <td key={"comparison" + s?.סהכ}>{s?.סהכ}</td>)}
                        <td>{x.reduce((accumulator, s) => accumulator + s.סהכ, 0)}</td>
                    </tr>
                    <tr>
                        <th>גילאי 0-5</th>
                        {x && x.map(s => <td key={"comparison" + s?.גיל_0_5}>{s?.גיל_0_5}</td>)}
                        <td>{x.reduce((accumulator, s) => accumulator + s.גיל_0_5, 0)}</td>
                    </tr>
                    <tr>
                        <th>גילאי 6-18</th>
                        {x && x.map(s => <td key={"comparison" + s?.גיל_6_18}>{s?.גיל_6_18}</td>)}
                        <td>{x.reduce((accumulator, s) => accumulator + s.גיל_6_18, 0)}</td>
                    </tr>
                    <tr>
                        <th>גילאי 19-45</th>
                        {x && x.map(s => <td key={"comparison" + s?.גיל_19_45}>{s?.גיל_19_45}</td>)}
                        <td>{x.reduce((accumulator, s) => accumulator + s.גיל_19_45, 0)}</td>
                    </tr>
                    <tr>
                        <th>גילאי 46-55</th>
                        {x && x.map(s => <td key={"comparison" + s?.גיל_46_55}>{s?.גיל_46_55}</td>)}
                        <td>{x.reduce((accumulator, s) => accumulator + s.גיל_46_55, 0)}</td>
                    </tr>
                    <tr>
                        <th>גילאי 56-64</th>
                        {x && x.map(s => <td key={"comparison" + s?.גיל_56_64}>{s?.גיל_56_64}</td>)}
                        <td>{x.reduce((accumulator, s) => accumulator + s.גיל_56_64, 0)}</td>
                    </tr>
                    <tr>
                        <th>גילאי 65+</th>
                        {x && x.map(s => <td key={"comparison" + s?.גיל_65_פלוס}>{s?.גיל_65_פלוס}</td>)}
                        <td>{x.reduce((accumulator, s) => accumulator + s.גיל_65_פלוס, 0)}</td>
                    </tr>
                    <tr>
                        <th>אחוז גילאי 0-5</th>
                        {x[0] && x.map(s => <td key={"comparison" + s?.גיל_0_5 + '%'}>{(s?.גיל_0_5 * 100 / s?.סהכ).toFixed(1)}%</td>)}
                    </tr>
                    <tr>
                        <th>אחוז גילאי 6-18</th>
                        {x[0] && x.map(s => <td key={"comparison" + s?.גיל_6_18 + '%'}>{(s?.גיל_6_18 * 100 / s?.סהכ).toFixed(1)}%</td>)}
                    </tr>
                    <tr>
                        <th>אחוז גילאי 19-45</th>
                        {x[0] && x.map(s => <td key={"comparison" + s?.גיל_19_45 + '%'}>{(s?.גיל_19_45 * 100 / s?.סהכ).toFixed(1)}%</td>)}
                    </tr>
                    <tr>
                        <th>אחוז גילאי 46-55</th>
                        {x[0] && x.map(s => <td key={"comparison" + s?.גיל_46_55 + '%'}>{(s?.גיל_46_55 * 100 / s?.סהכ).toFixed(1)}%</td>)}
                    </tr>
                    <tr>
                        <th>אחוז גילאי 56-64</th>
                        {x[0] && x.map(s => <td key={"comparison" + s?.גיל_56_64 + '%'}>{(s?.גיל_56_64 * 100 / s?.סהכ).toFixed(1)}%</td>)}
                    </tr>
                    <tr>
                        <th>אחוז גילאי 65+</th>
                        {x[0] && x.map(s => <td key={"comparison" + s?.גיל_65_פלוס + '%'}>{(s?.גיל_65_פלוס * 100 / s?.סהכ).toFixed(1)}%</td>)}
                    </tr>
                </tbody>
            </>
            }

            {/*
            <thead>
                <tr>
                    <th></th>
                    
                    
                    
                    
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
            </tbody> */}
        </table>
    );
}

export default ComparisonTable;
