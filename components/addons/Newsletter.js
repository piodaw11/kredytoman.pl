import { useRef, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime, faPiggyBank, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import classes from './styles/Newsletter.module.css';

const Newsletter = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const enteredEmail = useRef(null);

    const submitHandler = async (e) => {
        e.preventDefault();

        const data = {
            email: enteredEmail.current.value
        }

        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            setResponse(await response.json());

            enteredEmail.current.value = '';

        } catch {
            setError('Coś poszło nie tak');
        }
    };

    const res = response ? response.message : '';

    return (
        <>
            <div className={classes.newsletter}>
                <div>
                    <h3 className={classes.h3}>Korzyści wynikające z dołączenia</h3>
                    <ul className={classes.ul}>
                        <li className={classes.li}>
                            <FontAwesomeIcon icon={faBusinessTime} />
                            <div>
                                <span className={classes.number}>1</span>
                                <p>Promocje</p>
                                <p>Będąc na bierząco dowiesz się o wszystkich promocjach jako pierwszy</p>
                            </div>
                        </li>
                        <li className={classes.li}>
                            <FontAwesomeIcon icon={faPiggyBank} />
                            <div>
                                <span className={classes.number}>2</span>
                                <p>RRSO</p>
                                <p>Gdy RRSO w danym banku spadnie do niskiego poziomu powiadomimy Cię najszybciej jak to możliwe</p>
                            </div>
                        </li>
                        <li className={classes.li}>
                            <FontAwesomeIcon icon={faCirclePlus} />
                            <div>
                                <span className={classes.number}>3</span>
                                <p>Nowe okazje</p>
                                <p>Powiadomimy Cię gdy w naszej porównywarce pojawią się nowe oferty</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={classes.form}>
                    {res &&
                        <div className={classes.alert}>
                            <p>{res}</p>
                            <span onClick={() => { setResponse(!response) }}>&times;</span>
                        </div>
                    }
                    <h3 className={classes.h3}>Dołącz już dziś!</h3>
                    <div className={classes.newsletter_form}>
                        <form className={classes.form_inputs} onSubmit={submitHandler}>
                            <div>
                                <p className={classes.label}>Poniżej wprowadź adres email aby zapisać się do newslettera i nie ominąć żadnych nowości</p>
                                <div className={classes.inputs}>
                                    <input className={classes.input} type='email' placeholder='Twój adres e-mail' ref={enteredEmail} />
                                </div>
                                <div className={classes.submit}>
                                    <button className={classes.button}>DOŁĄCZ</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    {error && <div className={classes.error}>{error}</div>}
                </div>
            </div>
        </>
    )
};

export default Newsletter;