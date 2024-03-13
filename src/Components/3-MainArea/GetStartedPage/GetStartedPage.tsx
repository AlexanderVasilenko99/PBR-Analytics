import { useEffect, useState } from "react";
import "./GetStartedPage.scss";
import settlementServices from "../../../Services/SettlementServices";
import SettlementModel from "../../../Models/SettlementModel";
import { HashLink } from 'react-router-hash-link';
import { Collapse } from 'react-collapse';
import { Bar, Pie } from 'react-chartjs-2';
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip, ArcElement } from 'chart.js';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
// export const data = {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [
//         {
//             label: 'Residents',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)',
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)',
//             ],
//             borderWidth: 1,
//         },
//     ],
// };
function GetStartedPage(): JSX.Element {
    const [settlements, setSettlements] = useState<SettlementModel[]>([]);
    const [singleSettlement, setSingleSettlement] = useState<SettlementModel>();
    const [collapse, setCollapse] = useState<boolean>(false);
    const [residents, setResidents] = useState<string[]>([]);
    const [cityTitle, setCityTitle] = useState<string>();
    const labels = ['0-5', '6-18', '19-45', '46-55', '56-64', '65+'];

    const pieData = {
        labels: labels,
        datasets: [
            {
                label: 'Residents',
                data: residents,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ]
    }
    useEffect(() => {
        settlementServices.getAllSettlements()
            .then((s: SettlementModel[]) => { setSettlements(s) })
            .catch((err: any) => console.log(err));
    }, []);

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        ArcElement,
        Title,
        Tooltip,
        Legend
    );

    return (
        <div className="GetStartedPage">
            <section className="intro-section">
                <h1>Search Location:</h1>
                <Autocomplete
                    disablePortal
                    id=""
                    options={settlements.map(s => s.שם_ישוב)}
                    sx={{ width: 250 }}
                    renderInput={(params) => <TextField {...params} label="Location" />}
                    onChange={(event, value) => {
                        const userChosenSettlement = settlements.find(s => s.שם_ישוב === value);
                        if (!value) {
                            setResidents(['0', '0', '0', '0', '0', '0']);
                            return
                        };
                        setResidents([
                            userChosenSettlement.גיל_0_5.toString(),
                            userChosenSettlement.גיל_6_18.toString(),
                            userChosenSettlement.גיל_19_45.toString(),
                            userChosenSettlement.גיל_46_55.toString(),
                            userChosenSettlement.גיל_56_64.toString(),
                            userChosenSettlement.גיל_65_פלוס.toString(),
                        ]);
                    }}
                />
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

            <section id="result" className="result-sections">
                {/* <ul>
                    {settlements.length > 1 && settlements?.map(s => <li key={s._id}>{s.שם_ישוב}</li>)}
                </ul> */}
                {/* <Collapse isOpened={collapse} > */}

                <div className="bar-container">
                    <Bar options={{
                        responsive: true,
                        plugins: {
                            legend: { position: 'top' as const },
                            title: {
                                display: true,
                                text: cityTitle,
                            }
                        }
                    }
                    } data={{
                        labels,
                        datasets: [{
                            label: 'Residents',
                            data: residents,
                            backgroundColor: 'red',
                        }],
                    }} />
                </div>

                <div className="pie-container">
                    <Pie data={pieData} />
                </div>
                {/* </Collapse> */}

            </section>
        </div>
    );
}

export default GetStartedPage;
