import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRankingStar, faPaperPlane, faMobileScreen, faSignature, faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";

import classes from "./styles/HowToGet.module.css";

const HowToGet = () => {
    return (
        <div className={classes.HowToGet}>
            <div className={classes.items}>
                <FontAwesomeIcon icon={faRankingStar} />
                <div>
                    <span className={classes.number}>1</span>
                    <p className={classes.item_title}>Znajdź ofertę</p>
                    <p>Wybierz kwotę i okres trwania kredytu, porównaj oferty</p>
                </div>
            </div>
            <div className={classes.items}>
                <FontAwesomeIcon icon={faPaperPlane} />
                <div>
                    <span className={classes.number}>2</span>
                    <p className={classes.item_title}>Wybierz ofertę</p>
                    <p>Kliknij w najlepszą ofertę i wyślij zgłoszenie</p>
                </div>
            </div>
            <div className={classes.items}>
                <FontAwesomeIcon icon={faMobileScreen} />
                <div>
                    <span className={classes.number}>3</span>
                    <p className={classes.item_title}>Czekaj na kontakt</p>
                    <p>W przeciągu kilku minut zadzwoni do Ciebie doradca z banku i przedstawi szczegóły oferty</p>
                </div>
            </div>
            <div className={classes.items}>
                <FontAwesomeIcon icon={faSignature} />
                <div>
                    <span className={classes.number}>4</span>
                    <p className={classes.item_title}>Podpisz umowę</p>
                    <p>Po pozytywnym przyznaniu kredytu, umowę podpiszesz online, w placówce lub przy pomocy kuriera</p>
                </div>
            </div>
            <div className={classes.items}>
                <FontAwesomeIcon icon={faHandHoldingDollar} />
                <div>
                    <span className={classes.number}>5</span>
                    <p className={classes.item_title}>Odbierz pieniądze</p>
                    <p>Po podpisaniu umowy, pieniądze trafią na Twoje konto w przeciągu kilku minut</p>
                </div>
            </div>
        </div>
    )
};

export default HowToGet;