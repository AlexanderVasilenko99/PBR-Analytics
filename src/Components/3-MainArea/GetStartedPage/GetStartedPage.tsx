import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { ArcElement, BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import { useEffect, useState } from "react";
import { Bar, Pie } from 'react-chartjs-2';
import SettlementModel from "../../../Models/SettlementModel";
import settlementServices from "../../../Services/SettlementServices";
import batyamImage from '../../../assets/images/batyam.jpg';
import haifaImage from '../../../assets/images/haifa.png';
import herzliyaImage from '../../../assets/images/herzlia.jpg';
import jerusalemImage from '../../../assets/images/jerusalem.jpg';
import natanyaImage from '../../../assets/images/natanya.jpg';
import petahtikvaImage from '../../../assets/images/petahtikva.jpg';
import rehovotImage from '../../../assets/images/rehovot.jpg';
import tlvImage from '../../../assets/images/tlv.jpg';
import "./GetStartedPage.scss";
import Table from "./Table/Table";

function GetStartedPage(): JSX.Element {
    const [settlements, setSettlements] = useState<SettlementModel[]>([]);
    const [chosenSettlement, setChosenSettlement] = useState<SettlementModel>(new SettlementModel());
    // const [collapse, setCollapse] = useState<boolean>(false);
    const [residents, setResidents] = useState<string[]>([]);
    // const [cityTitle, setCityTitle] = useState<string>();
    const labels = ['0-5', '6-18', '19-45', '46-55', '56-64', '65+'];

    const pieData = {
        labels: labels,
        datasets: [
            {
                label: 'Residents',
                data: residents,
                backgroundColor: [
                    '#FF7F50',
                    '#FFD700',
                    '#483D8B',
                    '#20B2AA',
                    '#FFA07A',
                    '#5F9EA0',
                ],
                borderColor: [
                    '#FF7F50',
                    '#FFD700',
                    '#483D8B',
                    '#20B2AA',
                    '#FFA07A',
                    '#8B8D9D',
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
            <section className="intro-section" id="intro-section">
                <h1>Search Location:</h1>
                <div className="autocompletes-container">
                    {/* mui autocomplete by settlement id */}
                    <div>
                        <Autocomplete
                            disablePortal
                            id=""
                            options={settlements.map(s => s.סמל_ישוב.toString())}
                            sx={{ width: 250 }}
                            renderInput={(params) => <TextField {...params} label="קוד ישוב" />}
                            onChange={(event, value) => {
                                console.log(event);
                                if (!value) {
                                    setResidents(['0', '0', '0', '0', '0', '0']);
                                    setChosenSettlement(new SettlementModel());
                                    return
                                };
                                const userChosenSettlement = settlements.find(s => s.סמל_ישוב.toString() === value.toString());
                                setResidents([
                                    userChosenSettlement.גיל_0_5.toString(),
                                    userChosenSettlement.גיל_6_18.toString(),
                                    userChosenSettlement.גיל_19_45.toString(),
                                    userChosenSettlement.גיל_46_55.toString(),
                                    userChosenSettlement.גיל_56_64.toString(),
                                    userChosenSettlement.גיל_65_פלוס.toString(),
                                ]);
                                setChosenSettlement(userChosenSettlement);
                                setTimeout(() => {
                                    const resultcontainer = document.getElementById("result");
                                    resultcontainer.scrollIntoView({ behavior: "smooth" })
                                }, 0);
                            }}
                        />
                        {/* mui autocomplete by settlement name */}
                        <Autocomplete
                            disablePortal
                            id=""
                            options={settlements.map(s => s.שם_ישוב)}
                            sx={{ width: 250 }}
                            renderInput={(params) => <TextField {...params} label="שם ישוב" />}
                            onChange={(event, value) => {
                                console.log(event);
                                const userChosenSettlement = settlements.find(s => s.שם_ישוב === value);
                                if (!value) {
                                    setResidents(['0', '0', '0', '0', '0', '0']);
                                    setChosenSettlement(new SettlementModel());
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
                                setChosenSettlement(userChosenSettlement);
                                setTimeout(() => {
                                    const resultcontainer = document.getElementById("result");
                                    resultcontainer.scrollIntoView({ behavior: "smooth" })
                                }, 0);
                            }}
                        />
                    </div>
                    <p>Compare 2 or more locations <span to={'#'}>Here</span></p>
                </div>
            </section>

            {settlements && <section className="most-popular">
                <h1>Most Searched Locations:</h1>
                <div className="display-most-popular">
                    {/* tlv */}
                    <div onClick={() => {
                        const city = settlements.find(s => s.סמל_ישוב === 5000);
                        setResidents([
                            city.גיל_0_5.toString(),
                            city.גיל_6_18.toString(),
                            city.גיל_19_45.toString(),
                            city.גיל_46_55.toString(),
                            city.גיל_56_64.toString(),
                            city.גיל_65_פלוס.toString(),
                        ]);
                        setChosenSettlement(city);
                        setTimeout(() => {
                            const resultcontainer = document.getElementById("result");
                            resultcontainer.scrollIntoView({ behavior: "smooth" })
                        }, 0);
                    }}>
                        <img src={tlvImage} />
                        <div className="spans">
                            <span>Tel Aviv</span>
                            <span>תל אביב -יפו</span>
                        </div>
                        <hr />
                    </div>
                    {/* bat yam */}
                    <div onClick={() => {
                        const city = settlements.find(s => s.סמל_ישוב === 6200);
                        setResidents([
                            city.גיל_0_5.toString(),
                            city.גיל_6_18.toString(),
                            city.גיל_19_45.toString(),
                            city.גיל_46_55.toString(),
                            city.גיל_56_64.toString(),
                            city.גיל_65_פלוס.toString(),
                        ]);
                        setChosenSettlement(city);
                        setTimeout(() => {
                            const resultcontainer = document.getElementById("result");
                            resultcontainer.scrollIntoView({ behavior: "smooth" })
                        }, 0);
                    }}>
                        <img src={batyamImage} />
                        <div className="spans">
                            <span>Bat Yam</span>
                            <span>בת ים</span>
                        </div>
                        <hr />
                    </div>
                    {/* jerusalem */}
                    <div onClick={() => {
                        const city = settlements.find(s => s.סמל_ישוב === 3000);
                        setResidents([
                            city.גיל_0_5.toString(),
                            city.גיל_6_18.toString(),
                            city.גיל_19_45.toString(),
                            city.גיל_46_55.toString(),
                            city.גיל_56_64.toString(),
                            city.גיל_65_פלוס.toString(),
                        ]);
                        setChosenSettlement(city);
                        setTimeout(() => {
                            const resultcontainer = document.getElementById("result");
                            resultcontainer.scrollIntoView({ behavior: "smooth" })
                        }, 0);
                    }}>
                        <img src={jerusalemImage} />
                        <div className="spans">
                            <span>Jerusalem</span>
                            <span>ירושלים</span>
                        </div>
                        <hr />
                    </div>
                    {/* haifa */}
                    <div onClick={() => {
                        const city = settlements.find(s => s.סמל_ישוב === 4000);
                        setResidents([
                            city.גיל_0_5.toString(),
                            city.גיל_6_18.toString(),
                            city.גיל_19_45.toString(),
                            city.גיל_46_55.toString(),
                            city.גיל_56_64.toString(),
                            city.גיל_65_פלוס.toString(),
                        ]);
                        setChosenSettlement(city);
                        setTimeout(() => {
                            const resultcontainer = document.getElementById("result");
                            resultcontainer.scrollIntoView({ behavior: "smooth" })
                        }, 0);
                    }}>
                        <img src={haifaImage} />
                        <div className="spans">
                            <span>Haifa</span>
                            <span>חיפה</span>
                        </div>
                        <hr />
                    </div>
                    {/* Herzliya */}
                    <div onClick={() => {
                        const city = settlements.find(s => s.סמל_ישוב === 6400);
                        setResidents([
                            city.גיל_0_5.toString(),
                            city.גיל_6_18.toString(),
                            city.גיל_19_45.toString(),
                            city.גיל_46_55.toString(),
                            city.גיל_56_64.toString(),
                            city.גיל_65_פלוס.toString(),
                        ]);
                        setChosenSettlement(city);
                        setTimeout(() => {
                            const resultcontainer = document.getElementById("result");
                            resultcontainer.scrollIntoView({ behavior: "smooth" })
                        }, 0);
                    }}>
                        <img src={herzliyaImage} />
                        <div className="spans">
                            <span>Herzliya</span>
                            <span>הרצליה</span>
                        </div>
                        <hr />
                    </div>
                    {/* natanya */}
                    <div onClick={() => {
                        const city = settlements.find(s => s.סמל_ישוב === 7400);
                        setResidents([
                            city.גיל_0_5.toString(),
                            city.גיל_6_18.toString(),
                            city.גיל_19_45.toString(),
                            city.גיל_46_55.toString(),
                            city.גיל_56_64.toString(),
                            city.גיל_65_פלוס.toString(),
                        ]);
                        setChosenSettlement(city);
                        setTimeout(() => {
                            const resultcontainer = document.getElementById("result");
                            resultcontainer.scrollIntoView({ behavior: "smooth" })
                        }, 0);
                    }}>
                        <img src={natanyaImage} />
                        <div className="spans">
                            <span>Natanya</span>
                            <span>נתניה</span>
                        </div>
                        <hr />
                    </div>
                    {/* rehovot */}
                    <div onClick={() => {
                        const city = settlements.find(s => s.סמל_ישוב === 8400);
                        setResidents([
                            city.גיל_0_5.toString(),
                            city.גיל_6_18.toString(),
                            city.גיל_19_45.toString(),
                            city.גיל_46_55.toString(),
                            city.גיל_56_64.toString(),
                            city.גיל_65_פלוס.toString(),
                        ]);
                        setChosenSettlement(city);
                        setTimeout(() => {
                            const resultcontainer = document.getElementById("result");
                            resultcontainer.scrollIntoView({ behavior: "smooth" })
                        }, 0);
                    }}>
                        <img src={rehovotImage} />
                        <div className="spans">
                            <span>Rehovot</span>
                            <span>רחובות</span>
                        </div>
                        <hr />
                    </div>
                    {/* petah tikva */}
                    <div onClick={() => {
                        const city = settlements.find(s => s.סמל_ישוב === 7900);
                        setResidents([
                            city.גיל_0_5.toString(),
                            city.גיל_6_18.toString(),
                            city.גיל_19_45.toString(),
                            city.גיל_46_55.toString(),
                            city.גיל_56_64.toString(),
                            city.גיל_65_פלוס.toString(),
                        ]);
                        setChosenSettlement(city);
                        setTimeout(() => {
                            const resultcontainer = document.getElementById("result");
                            resultcontainer.scrollIntoView({ behavior: "smooth" })
                        }, 0);
                    }}>
                        <img src={petahtikvaImage} />
                        <div className="spans">
                            <span>Petah Tikva</span>
                            <span>פתח תקווה</span>
                        </div>
                        <hr />
                    </div>
                </div>
            </section>}

            <section className="spacer" />

            <section id="result" className="result-sections">
                <div className="title" id="">
                    <h1>Viewing <span title="change" onClick={() => {
                        document.getElementById("intro-section").scrollIntoView({ behavior: "smooth" })
                    }}>{chosenSettlement?.שם_ישוב}</span>
                    </h1>
                    <h2>Total residents: {chosenSettlement?.סהכ}</h2>
                </div>

                <div className="table-container">
                    <Table {...chosenSettlement} />
                </div>

                <div className="bar-container">
                    <Bar options={{
                        responsive: true,
                        plugins: {
                            legend: { position: 'top' as const },
                            title: {
                                display: true,
                                text: chosenSettlement.שם_ישוב,
                            }
                        }
                    }
                    } data={{
                        labels,
                        datasets: [{
                            label: 'Residents',
                            data: residents,
                            backgroundColor: [
                                '#FF7F50',
                                '#FFD700',
                                '#483D8B',
                                '#20B2AA',
                                '#FFA07A',
                                '#5F9EA0'
                            ],
                        }],
                    }} />
                </div>

                <div className="pie-container">
                    <Pie data={pieData} />
                </div>

            </section >
        </div >
    );
}

export default GetStartedPage;
