import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet, faCoins, faHouse } from "@fortawesome/free-solid-svg-icons";

import classes from "./styles/HeaderLinks.module.css";

const HeaderLinks = () => {
    const router = useRouter();
    const currentRoute = router.pathname;

    return (
        <section className={classes.section}>
            <div>
                {currentRoute === "/" || currentRoute === "/kredyty-konsolidacyjne" || currentRoute === '/kredyty-hipoteczne' ? (
                    <>
                        <ul>
                            <li className={`${classes.left_menu} ${currentRoute === '/' ? classes.active : ''}`}>
                                <Link href="/">
                                    <a className={currentRoute === '/' ? classes.active : ''}>
                                        <FontAwesomeIcon icon={faWallet} style={{ marginRight: '5px' }} />
                                        Kredyty gotówkowe
                                    </a>
                                </Link>
                            </li>
                            <li className={`${classes.left_menu} ${currentRoute === '/kredyty-konsolidacyjne' ? classes.active : ''}`}>
                                <Link href="/kredyty-konsolidacyjne">
                                    <a className={currentRoute === '/kredyty-konsolidacyjne' ? classes.active : ''}>
                                        <FontAwesomeIcon icon={faCoins} style={{ marginRight: '5px' }} />
                                        Kredyty konsolidacyjne
                                    </a>
                                </Link>
                            </li>
                            <li className={`${classes.left_menu} ${currentRoute === '/kredyty-hipoteczne' ? classes.active : ''}`}>
                                <Link href="/kredyty-hipoteczne">
                                    <a className={currentRoute === '/kredyty-hipoteczne' ? classes.active : ''}>
                                        <FontAwesomeIcon icon={faHouse} style={{ marginRight: '5px' }} />
                                        Kredyty hipoteczne
                                    </a>
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li className={classes.right_menu}>
                                <Link href="/pozyczki">
                                    <a>Pożyczki</a>
                                </Link>
                            </li>
                            <li className={classes.right_menu}>
                                <Link href="/chwilowki">
                                    <a>Chwilówki</a>
                                </Link>
                            </li>
                        </ul>
                    </>
                ) : ''}
                {currentRoute === "/pozyczki" || currentRoute === '/pozyczki-bik' ? (
                    <>
                        <ul>
                            <li className={`${classes.left_menu} ${currentRoute === '/pozyczki' ? classes.active : ''}`}>
                                <Link href="/pozyczki">
                                    <a className={currentRoute === '/pozyczki' ? classes.active : ''}>Pożyczki pozabankowe</a>
                                </Link>
                            </li>
                            <li className={`${classes.left_menu} ${currentRoute === '/pozyczki-bik' ? classes.active : ''}`}>
                                <Link href="/pozyczki-bik">
                                    <a className={currentRoute === '/pozyczki-bik' ? classes.active : ''}>Pożyczki bez BIK</a>
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li className={classes.right_menu}>
                                <Link href="/chwilowki">
                                    <a>Chwilówki</a>
                                </Link>
                            </li>
                            <li className={classes.right_menu}>
                                <Link href="/">
                                    <a>Kredyty</a>
                                </Link>
                            </li>
                        </ul>
                    </>
                ) : ''}
                {currentRoute === "/chwilowki" || currentRoute === '/chwilowki-bik' ? (
                    <>
                        <ul>
                            <li className={`${classes.left_menu} ${currentRoute === '/chwilowki' ? classes.active : ''}`}>
                                <Link href='/chwilowki'>
                                    <a className={currentRoute === '/chwilowki' ? classes.active : ''}>Chwilówki</a>
                                </Link>
                            </li>
                            <li className={`${classes.left_menu} ${currentRoute === '/chwilowki-bik' ? classes.active : ''}`}>
                                <Link href="/chwilowki-bik">
                                    <a className={currentRoute === '/chwilowki-bik' ? classes.active : ''}>Chwilówki bez BIK</a>
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li className={classes.right_menu}>
                                <Link href="/pozyczki">
                                    <a>Pożyczki</a>
                                </Link>
                            </li>
                            <li className={classes.right_menu}>
                                <Link href="/">
                                    <a>Kredyty</a>
                                </Link>
                            </li>
                        </ul>
                    </>
                ) : ''}
            </div>
        </section>
    )
};

export default HeaderLinks;