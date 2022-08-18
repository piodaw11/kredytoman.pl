import { useState } from 'react';

import classes from './styles/Faq.module.css';

const Faq = () => {
    const [active0, setActive0] = useState(false);
    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);

    return (
        <div className={classes.faq}>
            <div className={`${classes.items} ${active0 ? classes.active : ''}`} onClick={() => { setActive0(!active0); setActive1(false); setActive2(false); setActive3(false) }}>
                <p className={classes.faq_p}>Czy Kredytoman.pl udziela kretytów?</p>
                {active0 &&
                    <p className={classes.faq_text}>
                        Nie, nasza platforma służy jedynie do porównania oferty różnych banków.
                        Nie udzielamy kredytu ale za to pomagamy w znalezieniu jak najlepszej oferty dla naszych klientów.
                        Naszym celem jest porównanie najważniejszych parametrów kredytu, aby zapewnić klientom jak najniższą ratę.
                    </p>
                }
            </div>
            <div className={`${classes.items} ${active1 ? classes.active : ''}`} onClick={() => { setActive1(!active1); setActive0(false); setActive2(false); setActive3(false) }}>
                <p className={classes.faq_p}>Co dalej po wysłaniu formularza</p>
                {active1 &&
                    <p className={classes.faq_text}>
                        Konsultant banku, który wybraleś skontaktuje się z Tobą w celu sprawdzenia zdolności kredytowej.
                        Konsultant będzie pytać o niezbędne dane takie jak - wysokość dochodu, inne zobowiązania oraz wymagane dokumenty.
                        Po sprawdzeniu zdolności kredytowej banku wyśle Ci ofertę kredytu.
                    </p>
                }
            </div>
            <div className={`${classes.items} ${active2 ? classes.active : ''}`} onClick={() => { setActive2(!active2); setActive0(false); setActive1(false); setActive3(false) }}>
                <p className={classes.faq_p}>Czy moje dane są bezpieczne?</p>
                {active2 &&
                    <p className={classes.faq_text}>
                        Dbamy o bezpieczeństwo danych na każdym kroku.
                        Kredytoman.pl zbiera jedyne dane, na które wyrazisz zgodę takie jak - adres e-mail, numer telefonu oraz imię.
                        Po wyborze oferty o bezpieczeństwo Państwa danych dba wybrany z naszej oferty bank.
                    </p>
                }
            </div>
            <div className={`${classes.items} ${active3 ? classes.active : ''}`} onClick={() => { setActive3(!active3); setActive0(false); setActive1(false); setActive2(false) }}>
                <p className={classes.faq_p}>Który bank daje najlepsze warunki?</p>
                {active3 &&
                    <p className={classes.faq_text}>
                        Kredytoman.pl jedynie porównuje oferty różnych banków.
                        Zalecamy wysłać kilka formularzy i wybrać najbardziej dogodną ofertę.
                        Nasza platforma jedynie pokazuje ile można zaoszczędzić na kredycie.
                    </p>
                }
            </div>
            <div></div>
        </div>
    )
};

export default Faq;