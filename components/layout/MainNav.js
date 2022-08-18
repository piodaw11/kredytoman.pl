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
                            <li><Link href="/">Kredyty gotówkowe</Link></li>
                            <li><Link href="/kredyty-konsolidacyjne">Kredyty konsolidacyjne</Link></li>
                            <li><Link href="/kredyty-hipoteczne">Kredyty hipoteczne</Link></li>
                            <hr />
                            <li><Link href="/pozyczki">Pożyczki</Link></li>
                            <li><Link href='/pozyczki-bik'>Pożyczki bez bik</Link></li>
                            <hr />
                            <li><Link href="/chwilowki">Chwilówki</Link></li>
                            <li><Link href="/chwilowki-bik">Chwilówki bez bik</Link></li>
                            {/* <li><Link href="/kontakt">Kontakt</Link></li> */}
                        </ul>
                    }
                </div>
            </nav>
            <HeaderLinks />
        </>
    )
};

export default MainNav;