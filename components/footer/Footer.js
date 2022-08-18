import Link from "next/link";

import classes from "./styles/Footer.module.css";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <>
            <hr className={classes.hr} />
            <footer className={classes.footer}>
                <div className={`${classes.container} ${classes.container_footer}`}>
                    <ul className={classes.footers}>
                        <li>
                            <p className={classes.title}>Kredyty</p>
                        </li>
                        <li>
                            <Link href='/'>Kredyt gotówkowy</Link>
                        </li>
                        <li>
                            <Link href='/kredyty-konsolidacyjne'>Kredyt konsolidacyjny</Link>
                        </li>
                        <li>
                            <Link href='/kredyty-hipoteczne'>Kredyt hipoteczny</Link>
                        </li>
                    </ul>
                    <ul className={classes.footerlogo}>
                        <ul>
                            <li>
                                <p className={classes.title}>Pożyczki</p>
                            </li>
                            <li>
                                <Link href='/pozyczki'>Pożyczka gotówkowa</Link>
                            </li>
                            <li>
                                <Link href='/pozyczki-bik'>Pożyczki bez BIK</Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <p className={classes.title}>Chwilówki</p>
                            </li>
                            <li>
                                <Link href='/chwilowki'>Chwilówki</Link>
                            </li>
                            <li>
                                <Link href='/chwilowki-bik'>Chwilówki bez BIK</Link>
                            </li>
                        </ul>
                        <ul>
                            <li className={classes.title}>KREDYTOMAN.PL</li>
                        </ul>
                    </ul>
                    <ul>
                        <li>
                            <p className={classes.title}>Kredytoman</p>
                        </li>
                        <li>
                            <Link href='/kontakt'>Kontakt</Link>
                        </li>
                        <li>
                            <Link href='/regulamin'>Regulamin</Link>
                        </li>
                        <li>
                            <Link href='/polityka-prywatności'>Polityka prywatności</Link>
                        </li>
                    </ul>
                </div>
                <hr className={`${classes.container} ${classes.hr_bottom}`} />
                <div className={`${classes.container} ${classes.copyright}`}>
                    <p>{year} Kredytoman.pl</p>
                </div>
            </footer>
        </>
    )
};

export default Footer;