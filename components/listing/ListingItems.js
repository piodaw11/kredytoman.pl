import Link from "next/link";
import Image from "next/image";

import classes from "./styles/ListingItems.module.css";

const ListingItems = (props) => {

    let counter = 0;

    return (
        <ul className={classes.ul}>
            <li className={classes.li}>
                <div className={classes.li_header}>
                    <span className={classes.rank}>{props.num}</span>
                </div>
                <div className={`${classes.content} ${classes.content__mortage}`}>
                    <Link className={classes.logo} href='/'><Image src={props.image} alt={props.title} height={'40px'} width={'112px'} /></Link>
                    <div className={classes.items}>
                        <div className={classes.items_slides}>
                            <div className={classes.item_slide}>
                                <div className={classes.listing__item}>
                                    <span>Kwota do spłaty</span>
                                    <p>{props.value} zł</p>
                                </div>
                                <div className={classes.listing__item}>
                                    <span>Rata</span>
                                    <p>{props.monthlyValue} zł</p>
                                </div>
                            </div>
                            <div className={classes.item_slide}>
                                <div className={classes.listing__item}>
                                    <span className={classes.small}>Oprocentowanie</span>
                                    <p className={classes.small}>{props.oprocentowanie}%</p>
                                </div>
                                <div className={classes.listing__item}>
                                    <span className={classes.small}>Prowizja</span>
                                    <p className={classes.small}>{props.prowizja} zł</p>
                                </div>
                                <div className={classes.listing__item}>
                                    <span className={classes.small}>RRSO</span>
                                    <p className={classes.small}>{props.RRSO}%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link href={props.affilate_link}>
                        <a className={classes.button} target='_blank'>Sprawdź ofertę</a>
                    </Link>
                </div>
                <div className={classes.footer}>
                    <div className={`${classes.broker} ${classes.broker__desktop}`}>Oferta z: </div>
                    <span className={classes.props}>Szczegóły</span>
                </div>
            </li>
        </ul>
    )
};

export default ListingItems;