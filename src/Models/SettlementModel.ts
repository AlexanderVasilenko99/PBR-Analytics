class SettlementModel {
    public _id: number; // api id
    public סמל_ישוב: number; // bereau's id
    public שם_ישוב: string;
    public מועצה_אזורית: string;
    public קוד_מועצה_אזורית: number;
    public סהכ: number;
    public לשכת_מנא: string;
    public קוד_לשכת_מנא: number;

    // ages:
    public גיל_0_5: number;
    public גיל_6_18: number;
    public גיל_19_45: number;
    public גיל_46_55: number;
    public גיל_56_64: number;
    public גיל_65_פלוס: number;
}
export default SettlementModel;