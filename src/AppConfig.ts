class AppConfig {
    public readonly homeRoute = 'PBR-Analytics/';
    public readonly contactRoute = this.homeRoute + 'contact';
    public readonly aboutRoute = this.homeRoute + 'about';
    public readonly getStartedRoute = this.homeRoute + 'get-started';

    public readonly populationURL = 'https://data.gov.il/api/3/action/datastore_search?resource_id=64edd0ee-3d5d-43ce-8562-c336c24dbc1f';
}
const appConfig = new AppConfig();
export default appConfig;