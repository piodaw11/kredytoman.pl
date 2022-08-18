import Newsletter from "./Newsletter";

import classes from "./styles/addons.module.css";
import HowToGet from "./HowToGet";
import Faq from "./Faq";

const Addons = () => {

    return (
        <div className={classes.container}>
            <section className={classes.steps}>
                <h3>Jak otrzymać kredyt z <strong>Kredytomanem</strong>?</h3>
                <HowToGet />
            </section>
            <section className={classes.faq}>
                <h3>Chcesz być na bierząco?</h3>
                <Newsletter />
            </section>
            <section id='faqing' className={classes.faq}>
                <h3>FAQ - Najczęsciej zadawane pytania</h3>
                <Faq />
            </section>
        </div>
    )
};

export default Addons;