import { useCallback, useEffect, useState } from "react";

import { useRouter } from "next/router";
import CreditCalculator from "../calculator/CreditCalculator";
import ListingItems from "./ListingItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownShortWide, faArrowDownWideShort } from "@fortawesome/free-solid-svg-icons";

import classes from "./styles/Listing.module.css";

const Listing = (props) => {
    const [amount, setAmount] = useState(20000);
    const [period, setPeriod] = useState(36);
    const [newArray, setNewArray] = useState([]);
    const [sort, setSort] = useState("lowToHigh");
    const [highestRrso, setHighestRrso] = useState(0);
    const [increment, setIncrement] = useState(1);

    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const currentDay = today.getDate();
    const currentDate = `${currentDay}.${currentMonth + 1}.${currentYear}`;

    const router = useRouter();
    const currentRoute = router.pathname;

    let counter = 0;

    useEffect(() => {
        if (currentRoute === '/') {
            setAmount(20000);
            setPeriod(36);
        } else if (currentRoute === '/kredyty-konsolidacyjne') {
            setAmount(100000);
            setPeriod(60);
        } else if (currentRoute === '/pozyczki' || currentRoute === '/pozyczki-bik') {
            setAmount(5000);
            setPeriod(12);
        } else if (currentRoute === '/chwilowki' || currentRoute === '/chwilowki-bik') {
            setAmount(3000);
            setPeriod(30);
        } else {
            setAmount(250000);
            setPeriod(20);
        }
    }, [currentRoute]);

    const calculatorSubmitHandler = (data) => {
        setAmount(data.amount);
        setPeriod(data.period);
        setSort(sort);
    };

    useEffect(() => {
        const array = [];
        if (currentRoute === '/kredyty-hipoteczne') {
            props.offers.forEach(offer => {
                array.push({
                    title: offer.title,
                    image: offer.image,
                    id: offer.id,
                    oprocentowanie: offer.oprocentowanie,
                    rrso: offer.rrso,
                    prowizja: offer.prowizja,
                    affilate_link: offer.affilate_link,
                    amount: amount,
                    period: period,
                    value: (((amount + parseFloat(offer.prowizja)) * ((parseFloat(offer.rrso) / 100) / 12) * (1 + (parseFloat(offer.rrso) / 100 / 12)) ** (period * 12)) / ((1 + (parseFloat(offer.rrso) / 100 / 12)) ** (period * 12) - 1) * period * 12).toFixed(2),
                    monthlyValue: ((((amount + parseFloat(offer.prowizja)) * ((parseFloat(offer.rrso) / 100) / 12) * (1 + (parseFloat(offer.rrso) / 100 / 12)) ** (period * 12)) / ((1 + (parseFloat(offer.rrso) / 100 / 12)) ** (period * 12) - 1) * period * 12) / (period * 12)).toFixed(2),
                });
            })
        } else if (currentRoute === '/chwilowki' || currentRoute === '/chwilowki-bik') {
            props.offers.forEach(offer => {
                if (offer.rrso === '0') {
                    array.push({
                        title: offer.title,
                        image: offer.image,
                        id: offer.id,
                        oprocentowanie: offer.oprocentowanie,
                        rrso: offer.rrso,
                        prowizja: offer.prowizja,
                        affilate_link: offer.affilate_link,
                        amount: amount,
                        period: period,
                        value: amount.toFixed(2),
                        monthlyValue: amount.toFixed(2),
                    });
                } else {
                    array.push({
                        title: offer.title,
                        image: offer.image,
                        id: offer.id,
                        oprocentowanie: offer.oprocentowanie,
                        rrso: offer.rrso,
                        prowizja: offer.prowizja,
                        affilate_link: offer.affilate_link,
                        amount: amount,
                        period: period,
                        value: (amount + (((amount + parseFloat(offer.prowizja)) * ((parseFloat(offer.rrso) / (12 * 100)) * (1 + (parseFloat(offer.rrso) / (12 * 100))) ** (1)) / (parseFloat(offer.rrso) / (12 * 100)) ** (0)) / 12.16)).toFixed(2),
                        monthlyValue: (amount + (((amount + parseFloat(offer.prowizja)) * ((parseFloat(offer.rrso) / (12 * 100)) * (1 + (parseFloat(offer.rrso) / (12 * 100))) ** (1)) / (parseFloat(offer.rrso) / (12 * 100)) ** (0)) / 12.16)).toFixed(2),
                    });
                }
            })
        } else {
            props.offers.forEach(offer => {
                array.push({
                    title: offer.title,
                    image: offer.image,
                    id: offer.id,
                    oprocentowanie: offer.oprocentowanie,
                    rrso: offer.rrso,
                    prowizja: offer.prowizja,
                    affilate_link: offer.affilate_link,
                    amount: amount,
                    period: period,
                    value: (((amount + parseFloat(offer.prowizja)) * ((parseFloat(offer.rrso) / 100) / 12) * (1 + (parseFloat(offer.rrso) / 100 / 12)) ** period) / ((1 + (parseFloat(offer.rrso) / 100 / 12)) ** period - 1) * period).toFixed(2),
                    monthlyValue: ((((amount + parseFloat(offer.prowizja)) * ((parseFloat(offer.rrso) / 100) / 12) * (1 + (parseFloat(offer.rrso) / 100 / 12)) ** period) / ((1 + (parseFloat(offer.rrso) / 100 / 12)) ** period - 1) * period) / period).toFixed(2),
                });
            })
        }
        setHighestRrso(array.sort((a, b) => b.rrso - a.rrso)[0].rrso);

        const sortArrays = type => {
            const x = array.sort((a, b) => {
                if (type === 'lowToHigh') {
                    return a.monthlyValue - b.monthlyValue;
                } else if (type === 'highToLow') {
                    return b.monthlyValue - a.monthlyValue;
                } else if (type === "valLowToHigh") {
                    return a.value - b.value;
                } else if (type === "valHighToLow") {
                    return b.value - a.value;
                } else if (type === "rrsoLowToHigh") {
                    return a.rrso - b.rrso;
                } else if (type === "rrsoHighToLow") {
                    return b.rrso - a.rrso;
                }
            });
            setNewArray(x);
        };

        sortArrays(sort);

    }, [props.offers, amount, period, sort, currentRoute, counter]);
    return (
        <>
            <CreditCalculator onSubmit={calculatorSubmitHandler} />
            <section className={classes.section}>
                <div className={classes.container}>
                    <div className={classes.section_header}>
                        <p>Znaleziono: <strong>{props.offers.length} {props.offers.length === 1 && 'najlepszą ofetrę'} {props.offers.length > 1 && props.offers.length < 5 ? 'najlepsze oferty' : 'najlepszych ofert'}</strong> Porównaj i wybierz najlepszą dla siebie.</p>
                        <div className={classes.sorting}>
                            {sort === "lowToHigh" && <FontAwesomeIcon icon={faArrowDownShortWide} />}
                            {sort === "highToLow" && <FontAwesomeIcon icon={faArrowDownWideShort} />}
                            {sort === "valLowToHigh" && <FontAwesomeIcon icon={faArrowDownShortWide} />}
                            {sort === "valHighToLow" && <FontAwesomeIcon icon={faArrowDownWideShort} />}
                            {sort === "rrsoLowToHigh" && <FontAwesomeIcon icon={faArrowDownShortWide} />}
                            {sort === "rrsoHighToLow" && <FontAwesomeIcon icon={faArrowDownWideShort} />}
                            <select onChange={e => { setSort(e.target.value) }}>
                                <option value="lowToHigh">Rata rosnąco</option>
                                <option value="highToLow">Rata malejąco</option>
                                <option value="valLowToHigh">Kwota rosnąco</option>
                                <option value="valHighToLow">Kwota malejąco</option>
                                <option value="rrsoLowToHigh">RRSO rosnąco</option>
                                <option value="rrsoHighToLow">RRSO malejąco</option>
                            </select>
                        </div>
                    </div>
                    {newArray.map(item => (
                        <ListingItems
                            num={++counter}
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            oprocentowanie={item.oprocentowanie}
                            prowizja={item.prowizja}
                            RRSO={item.rrso}
                            affilate_link={item.affilate_link}
                            amount={amount}
                            period={period}
                            value={item.value}
                            monthlyValue={item.monthlyValue}
                        />
                    ))}
                    <div className={classes.rrso}>
                        {currentRoute === '/' || currentRoute === '/kredyty-konsolidacyjne' || currentRoute === '/kredyty-hipoteczne' ?
                            (
                                <>
                                    <strong>Przykład reprezentatywny:</strong>
                                    <p>
                                        Rzeczywista Roczna Stopa Oprocentowania (RRSO) dla oferty {currentRoute === '/' && 'kredytów gotówkowych '} {currentRoute === '/kredyty-konsolidacyjne' && 'kredytów konsolidacyjnych '} {currentRoute === '/kredyty-hipoteczne' && 'kredytów hipotecznych '}
                                        wynosi {highestRrso}%.
                                        {currentRoute === '/' &&
                                            `Okres obowiązywania umowy: 36 mies.,
                                    całkowita kwota pożyczki: 20 000,00 zł.
                                    Całkowity koszt zobowiązania spłacanego w równych ratach: 9 723,57 zł,
                                    całkowita kwota do zapłaty: 29 723,57 zł.
                                    Spłata następuje w 36 równych ratach.`
                                        }
                                        {currentRoute === '/kredyty-konsolidacyjne' &&
                                            `Okres obowiązywania umowy: 60 mies.,
                                    całkowita kwota pożyczki: 100 000,00 zł.
                                    Całkowity koszt zobowiązania spłacanego w równych ratach: 56 337,43 zł,
                                    całkowita kwota do zapłaty: 156 337,43 zł.
                                    Spłata następuje w 60 równych ratach.`
                                        }
                                        {currentRoute === '/kredyty-hipoteczne' &&
                                            `Okres obowiązywania umowy: 360 mies.,
                                    całkowita kwota pożyczki: 800 000,00 zł.
                                    Całkowity koszt zobowiązania spłacanego w równych ratach: 1 810 793,46 zł,
                                    całkowita kwota do zapłaty: 2 610 793,46 zł.
                                    Spłata następuje w 360 równych ratach.`
                                        }
                                        Kalkulacja została dokonana na dzień {currentDate} roku na reprezentatywnym przykładzie.
                                    </p>
                                </>
                            )
                            : ''}
                        <strong>Maksymalne RRSO: </strong>
                        <p>{highestRrso}%</p>
                    </div>
                    <section className={classes.disclimer}>
                        Przedstawione w porównywarce informacje pokazują jedynie informacje o produktach dostępnych w poszczególnych instytucjach finansowych; nie są więc ofertą w rozumieniu art. 66 kc. Nie jesteśmy kredytodawcami, więc nie mamy wpływu na to, czy dostaniesz kredyt i na jakich warunkach – może to zależeć od wielu czynników, w tym od oceny Twojej zdolności kredytowej.
                    </section>
                </div>
            </section>
        </>
    )
};

export default Listing;