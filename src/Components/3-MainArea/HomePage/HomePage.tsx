import "./HomePage.scss";
import HowItWorksSection from "./HowItWorksSection/HowItWorksSection";
import IntroSection from "./IntroSection/IntroSection";
import WhoIsItForSection from "./WhoIsItForSection/WhoIsItForSection";

function HomePage(): JSX.Element {
    return (
        <div className="HomePage">
            <section>
                <IntroSection />
            </section>
            <section>
                <HowItWorksSection />
            </section>
            <section>
                <WhoIsItForSection />
            </section>
        </div>
    );
}

export default HomePage;
