import axios from "axios";
import SettlementModel from "../Models/SettlementModel";
import appConfig from "../AppConfig";

class SettlementServices {
    public async getAllSettlements(): Promise<SettlementModel[]> {
        const response = await axios.get(appConfig.populationURL);
        const data = response.data;
        const result = data.result;
        const records = result.records
        return records;
        // save to redux here...
    }
}
const settlementServices = new SettlementServices;
export default settlementServices;