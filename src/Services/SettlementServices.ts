import axios from "axios";
import SettlementModel from "../Models/SettlementModel";

class SettlementServices {
    public async getAllSettlements(): Promise<SettlementModel[]> {
        const response = await axios.get('https://data.gov.il/api/3/action/datastore_search?resource_id=64edd0ee-3d5d-43ce-8562-c336c24dbc1f');
        const data = response.data;
        const result = data.result;
        const records = result.records
        return records;
        // save to redux here...
    }
}
const settlementServices = new SettlementServices;
export default settlementServices;