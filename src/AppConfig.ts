class AppConfig {
    public readonly homeRoute = '/PBR-Analytics';
    public readonly contactRoute = this.homeRoute + '/contact';
    public readonly aboutRoute = this.homeRoute + '/about';
}
const appConfig = new AppConfig();
export default appConfig;