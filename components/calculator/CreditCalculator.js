import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";

import classes from "./styles/CreditCalculator.module.css";

const CreditCalculator = (props) => {
    const [amount, setAmount] = useState(0);
    const [period, setPeriod] = useState(0);

    const enteredValue = useRef();
    const enteredPeriod = useRef();


    const router = useRouter();

    const currentRoute = router.pathname;

    const month = new Date().toLocaleString('default', { month: 'long' });
    const today = new Date().getDate();
    const year = new Date().getFullYear();

    const minusHandler = () => {
        if (currentRoute === '/') {
            if (amount >= 6000 && amount <= 200000) {
                setAmount(parseInt(amount) - 5000);
            } else {
                setAmount(1000);
            }
        } else if (currentRoute === '/kredyty-konsolidacyjne') {
            if (amount >= 11000 && amount <= 200000) {
                setAmount(parseInt(amount) - 10000);
            } else {
                setAmount(1000);
            }
        } else if (currentRoute === '/pozyczki' || currentRoute === '/pozyczki-bik') {
            if (amount >= 1500 && amount <= 15000) {
                setAmount(parseInt(amount) - 500);
            } else {
                setAmount(1000);
            }
        } else if (currentRoute === '/chwilowki' || currentRoute === '/chwilowki-bik') {
            if (amount >= 300 && amount <= 10000) {
                setAmount(parseInt(amount) - 100);
            } else {
                setAmount(200);
            }
        } else {
            if (amount >= 60000 && amount <= 1000000) {
                setAmount(parseInt(amount) - 50000);
            } else {
                setAmount(10000);
            }
        }
    }

    const plusHandler = () => {
        if (currentRoute === '/') {
            if (amount <= 195000 && amount >= 1000) {
                setAmount(parseInt(amount) + 5000);
            } else {
                setAmount(200000);
            }
        } else if (currentRoute === '/kredyty-konsolidacyjne') {
            if (amount <= 190000 && amount >= 1000) {
                setAmount(parseInt(amount) + 10000);
            } else {
                setAmount(200000);
            }
        } else if (currentRoute === '/pozyczki' || currentRoute === '/pozyczki-bik') {
            if (amount <= 14500 && amount >= 1000) {
                setAmount(parseInt(amount) + 500);
            } else {
                setAmount(15000);
            }
        } else if (currentRoute === '/chwilowki' || currentRoute === '/chwilowki-bik') {
            if (amount <= 9900 && amount >= 200) {
                setAmount(parseInt(amount) + 100);
            } else {
                setAmount(10000);
            }
        } else {
            if (amount <= 950000 && amount >= 10000) {
                setAmount(parseInt(amount) + 50000);
            } else {
                setAmount(1000000);
            }
        }
    }

    // onChange for credit value input

    const onClickValueHandler = () => {
        enteredValue.current.value = '';
    };

    const onChangeHandler = () => {
        let x = enteredValue.current.value;
        setAmount(x);
    };

    const onBlurValueHandler = () => {
        let x = enteredValue.current.value;
        if (currentRoute === '/') {
            if (x < 1000) {
                setAmount(1000);
            } else if (x > 200000) {
                setAmount(200000);
            }
        } else if (currentRoute === '/kredyty-konsolidacyjne') {
            if (x < 1000) {
                setAmount(1000);
            } else if (x > 200000) {
                setAmount(200000);
            }
        } else if (currentRoute === '/pozyczki' || currentRoute === '/pozyczki-bik') {
            if (x < 1000) {
                setAmount(1000);
            } else if (x > 15000) {
                setAmount(15000);
            }
        } else if (currentRoute === '/chwilowki' || currentRoute === '/chwilowki-bik') {
            if (x < 200) {
                setAmount(200);
            } else if (x > 10000) {
                setAmount(10000);
            }
        } else {
            if (x < 10000) {
                setAmount(10000);
            } else if (x >= 1000000) {
                setAmount(1000000);
            }
        }
    };

    const onClickPeriod = () => {
        enteredPeriod.current.value = '';
    }
    const onChangePeriod = () => {
        let periodValue = enteredPeriod.current.value;
        setPeriod(periodValue);
    };

    const minusPeriodHandler = () => {
        if (currentRoute === '/') {
            if (period >= 15 && period <= 120) {
                setPeriod(parseInt(period) - 12);
            } else {
                setPeriod(3);
            }
        } else if (currentRoute === '/kredyty-konsolidacyjne') {
            if (period >= 15 && period <= 120) {
                setPeriod(parseInt(period) - 12);
            } else {
                setPeriod(3);
            }
        } else if (currentRoute === '/pozyczki' || currentRoute === '/pozyczki-bik') {
            if (period >= 4 && period <= 36) {
                setPeriod(parseInt(period) - 3);
            } else {
                setPeriod(1);
            }
        } else {
            if (period >= 10 && period <= 35) {
                setPeriod(parseInt(period) - 5);
            } else {
                setPeriod(5);
            }
        }
    };

    const addPeriodHandler = () => {
        if (currentRoute === '/') {
            if (period <= 108 && period >= 3) {
                setPeriod(parseInt(period) + 12);
            } else {
                setPeriod(120);
            }
        } else if (currentRoute === '/kredyty-konsolidacyjne') {
            if (period <= 108 && period >= 3) {
                setPeriod(parseInt(period) + 12);
            } else {
                setPeriod(120);
            }
        } else if (currentRoute === '/pozyczki' || currentRoute === '/pozyczki-bik') {
            if (period <= 33 && period >= 1) {
                setPeriod(parseInt(period) + 3);
            } else {
                setPeriod(36);
            }

        } else {
            if (period <= 30 && period >= 5) {
                setPeriod(parseInt(period) + 5);
            } else {
                setPeriod(35);
            }
        }
    };

    const onBlurPeriodHandler = () => {
        let periodValue = enteredPeriod.current.value;
        if (currentRoute === '/') {
            if (periodValue < 3) {
                setPeriod(3);
            } else if (periodValue > 120) {
                setPeriod(120);
            }
        } else if (currentRoute === '/kredyty-konsolidacyjne') {
            if (periodValue < 3) {
                setPeriod(3);
            } else if (periodValue > 120) {
                setPeriod(120);
            }
        } else if (currentRoute === '/pozyczki' || currentRoute === '/pozyczki-bik') {
            if (periodValue < 1) {
                setPeriod(1);
            } else if (periodValue > 36) {
                setPeriod(36);
            }
        } else {
            if (periodValue < 5) {
                setPeriod(5);
            } else if (periodValue > 35) {
                setPeriod(35);
            }
        }
    };

    const date = `${today} ${month} ${year}`;

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

    const submitHandler = (e) => {
        e.preventDefault();
        props.onSubmit({
            amount,
            period,
        })
    };

    return (
        <>
            <header className={`${classes.header} ${classes.sticky}`}>
                <div className={classes.container}>
                    <div className={classes.title}>
                        <h1 className={classes.tittleh1}>
                            {currentRoute === '/' && 'Kalkulator kredytów'}
                            {currentRoute === '/kredyty-konsolidacyjne' && 'Kalkulator kredytów'}
                            {currentRoute === '/kredyty-hipoteczne' && 'Kalkulator kredytów'}
                            {currentRoute === '/pozyczki' && 'Kalkulator pożyczek'}
                        </h1>
                        <p className={classes.titlep1}>Zaktualizowano {date}</p>
                    </div>
                    <form className={classes.creditForm} onSubmit={submitHandler}>
                        {currentRoute === "/" &&
                            <>
                                <div>
                                    <label htmlFor="amount">Kwota</label>
                                    <div className={classes.input}>
                                        <button type="button" aria-label="Mniej" onClick={minusHandler}><span>-</span></button>
                                        <input className={classes.inputs} type="text" id="amount" onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()} onChange={onChangeHandler} onBlur={onBlurValueHandler} onClick={onClickValueHandler} value={amount} ref={enteredValue} aria-label="Kwota kredytu 20000" />
                                        <button type="button" aria-label="Więcej" onClick={plusHandler}><span>+</span></button>
                                    </div>
                                    <span className={classes.inputDesc}>od 1 000 do 200 000</span>
                                </div>
                                <div>
                                    <label htmlFor="period">Okres spłaty</label>
                                    <div className={classes.input}>
                                        <button type="button" aria-label="Mniej" onClick={minusPeriodHandler}><span>-</span></button>
                                        <input className={classes.inputs} id="period" type="text" onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()} onChange={onChangePeriod} onBlur={onBlurPeriodHandler} onClick={onClickPeriod} value={period} ref={enteredPeriod} aria-label="Okres spłaty 48 mies" />
                                        <button type="button" aria-label="Więcej" onClick={addPeriodHandler}><span>+</span></button>
                                    </div>
                                    <span className={classes.inputDesc}>od 3 do 120 mies.</span>
                                </div>
                            </>

                        }
                        {currentRoute === "/kredyty-konsolidacyjne" &&
                            <>
                                <div>
                                    <label htmlFor="amount">Kwota</label>
                                    <div className={classes.input}>
                                        <button type="button" aria-label="Mniej" onClick={minusHandler}><span>-</span></button>
                                        <input className={classes.inputs} type="text" id="amount" onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()} onChange={onChangeHandler} onBlur={onBlurValueHandler} onClick={onClickValueHandler} value={amount} ref={enteredValue} aria-label="Kwota kredytu 100000" />
                                        <button type="button" aria-label="Więcej" onClick={plusHandler}><span>+</span></button>
                                    </div>
                                    <span className={classes.inputDesc}>od 1 000 do 200 000</span>
                                </div>
                                <div>
                                    <label htmlFor="period">Okres spłaty</label>
                                    <div className={classes.input}>
                                        <button type="button" aria-label="Mniej" onClick={minusPeriodHandler}><span>-</span></button>
                                        <input className={classes.inputs} id="period" type="text" onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()} onChange={onChangePeriod} onBlur={onBlurPeriodHandler} onClick={onClickPeriod} value={period} ref={enteredPeriod} aria-label="Okres spłaty 48 mies" />
                                        <button type="button" aria-label="Więcej" onClick={addPeriodHandler}><span>+</span></button>
                                    </div>
                                    <span className={classes.inputDesc}>od 3 do 120 mies.</span>
                                </div>
                            </>
                        }
                        {currentRoute === "/kredyty-hipoteczne" &&
                            <>
                                <div>
                                    <label htmlFor="amount">Kwota</label>
                                    <div className={classes.input}>
                                        <button type="button" aria-label="Mniej" onClick={minusHandler}><span>-</span></button>
                                        <input className={classes.inputs} type="text" id="amount" onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()} onChange={onChangeHandler} onBlur={onBlurValueHandler} onClick={onClickValueHandler} value={amount} ref={enteredValue} aria-label="Kwota kredytu 100000" />
                                        <button type="button" aria-label="Więcej" onClick={plusHandler}><span>+</span></button>
                                    </div>
                                    <span className={classes.inputDesc}>od 10 000 do 1 000 000</span>
                                </div>
                                <div>
                                    <label htmlFor="period">Okres spłaty</label>
                                    <div className={classes.input}>
                                        <button type="button" aria-label="Mniej" onClick={minusPeriodHandler}><span>-</span></button>
                                        <input className={classes.inputs} id="period" type="text" onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()} onChange={onChangePeriod} onBlur={onBlurPeriodHandler} onClick={onClickPeriod} value={period} ref={enteredPeriod} aria-label="Okres spłaty 48 mies" />
                                        <button type="button" aria-label="Więcej" onClick={addPeriodHandler}><span>+</span></button>
                                    </div>
                                    <span className={classes.inputDesc}>od 5 do 35 lat</span>
                                </div>
                            </>
                        }
                        {currentRoute === "/pozyczki" &&
                            <>
                                <div>
                                    <label htmlFor="amount">Kwota</label>
                                    <div className={classes.input}>
                                        <button type="button" aria-label="Mniej" onClick={minusHandler}><span>-</span></button>
                                        <input className={classes.inputs} type="text" id="amount" onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()} onChange={onChangeHandler} onBlur={onBlurValueHandler} onClick={onClickValueHandler} value={amount} ref={enteredValue} aria-label="Kwota kredytu 100000" />
                                        <button type="button" aria-label="Więcej" onClick={plusHandler}><span>+</span></button>
                                    </div>
                                    <span className={classes.inputDesc}>od 1 000 do 15 000</span>
                                </div>
                                <div>
                                    <label htmlFor="period">Okres spłaty</label>
                                    <div className={classes.input}>
                                        <button type="button" aria-label="Mniej" onClick={minusPeriodHandler}><span>-</span></button>
                                        <input className={classes.inputs} id="period" type="text" onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()} onChange={onChangePeriod} onBlur={onBlurPeriodHandler} onClick={onClickPeriod} value={period} ref={enteredPeriod} aria-label="Okres spłaty 48 mies" />
                                        <button type="button" aria-label="Więcej" onClick={addPeriodHandler}><span>+</span></button>
                                    </div>
                                    <span className={classes.inputDesc}>od 1 do 36 mies</span>
                                </div>
                            </>
                        }
                        {currentRoute === "/pozyczki-bik" &&
                            <>
                                <div>
                                    <label htmlFor="amount">Kwota</label>
                                    <div className={classes.input}>
                                        <button type="button" aria-label="Mniej" onClick={minusHandler}><span>-</span></button>
                                        <input className={classes.inputs} type="text" id="amount" onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()} onChange={onChangeHandler} onBlur={onBlurValueHandler} onClick={onClickValueHandler} value={amount} ref={enteredValue} aria-label="Kwota kredytu 100000" />
                                        <button type="button" aria-label="Więcej" onClick={plusHandler}><span>+</span></button>
                                    </div>
                                    <span className={classes.inputDesc}>od 1 000 do 15 000</span>
                                </div>
                                <div>
                                    <label htmlFor="period">Okres spłaty</label>
                                    <div className={classes.input}>
                                        <button type="button" aria-label="Mniej" onClick={minusPeriodHandler}><span>-</span></button>
                                        <input className={classes.inputs} id="period" type="text" onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()} onChange={onChangePeriod} onBlur={onBlurPeriodHandler} onClick={onClickPeriod} value={period} ref={enteredPeriod} aria-label="Okres spłaty 48 mies" />
                                        <button type="button" aria-label="Więcej" onClick={addPeriodHandler}><span>+</span></button>
                                    </div>
                                    <span className={classes.inputDesc}>od 1 do 36 mies</span>
                                </div>
                            </>
                        }
                        {currentRoute === "/chwilowki" || currentRoute === "/chwilowki-bik" ? (
                            <>
                                <div>
                                    <label htmlFor="amount">Kwota</label>
                                    <div className={classes.input}>
                                        <button type="button" aria-label="Mniej" onClick={minusHandler}><span>-</span></button>
                                        <input className={classes.inputs} type="text" id="amount" onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()} onChange={onChangeHandler} onBlur={onBlurValueHandler} onClick={onClickValueHandler} value={amount} ref={enteredValue} aria-label="Kwota kredytu 100000" />
                                        <button type="button" aria-label="Więcej" onClick={plusHandler}><span>+</span></button>
                                    </div>
                                    <span className={classes.inputDesc}>od 200 do 5 000</span>
                                </div>
                            </>
                        ) : ''}
                        <button type="submit">SPRAWDŹ <span className={classes.arrow}>&#8594;</span></button>
                    </form>
                </div>
            </header>
        </>
    )
};

export default CreditCalculator;