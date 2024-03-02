import NavbarArea from "../2-NavbarArea/NavbarArea";
import FooterArea from "../4-FooterArea/FooterArea";
import Router from "../Router/Router";
import "./Layout.scss";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <nav>
                <NavbarArea />
            </nav>
            <main>
                <Router />
            </main>
            <footer>
                <FooterArea />
            </footer>
        </div>
    );
}

export default Layout;
