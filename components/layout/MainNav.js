import Link from "next/link";
import HeaderLinks from "../header/HeaderLinks";
import { useRouter } from "next/router";
import { useState } from "react";

import classes from "./styles/MainNav.module.css";
const MainNav = (props) => {
    const [sideMenu, setSideMenu] = useState(false);

    const router = useRouter();
    const currentRoute = router.pathname;

    return (
        <>
            <nav className={classes.navbar}>
                <div className={classes.logo}>
                    <Link href="/">KREDYTOMAN</Link>
                    <span>Największy niezależny ranking {currentRoute === '/' && 'kredytów'} {currentRoute === '/pozyczki' && 'pożyczek'} {currentRoute === '/chwilowki' && 'chwilówek'}</span>
                </div>
                <div className={classes.menu} onClick={() => { setSideMenu(!sideMenu) }}>
                    <span className={classes.bar}></span>
                    <span className={classes.bar}></span>
                    <span className={classes.bar}></span>
                    {sideMenu &&
                        <ul>
                            <li><a href="https://kredytomat.pl/">Kredyty gotówkowe</a></li>
                            <li><a href="https://kredytomat.pl/kredyty-konsolidacyjne">Kredyty konsolidacyjne</a></li>
                            <li><a href="https://kredytomat.pl/kredyty-hipoteczne">Kredyty hipoteczne</a></li>
                            <li><a href="https://kredytomat.pl/kontakt">Kontakt</a></li>
                            <li><a href="https://kredytomat.pl/regulamin">Regulamin</a></li>
                            <li><a href="https://kredytomat.pl/polityka-prywatnosci">Polityka prywatności</a></li>
                        </ul>
                    }
                </div>
            </nav>
            <HeaderLinks />
        </>
    )
};

export default MainNav;