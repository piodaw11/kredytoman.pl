import { useRef, useState } from "react";

const NewListingItem = (props) => {
    const [type, setType] = useState("");

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const rrsoInputRef = useRef();
    const oprocentowanieInputRef = useRef();
    const prowizjaInputRef = useRef();
    const affilateLinkInputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredRrso = rrsoInputRef.current.value;
        const enteredOprocentowanie = oprocentowanieInputRef.current.value;
        const enteredProwizja = prowizjaInputRef.current.value;
        const enteredAffilateLink = affilateLinkInputRef.current.value;

        const offerData = {
            title: enteredTitle,
            image: enteredImage,
            rrso: enteredRrso,
            oprocentowanie: enteredOprocentowanie,
            prowizja: enteredProwizja,
            affilate_link: enteredAffilateLink,
            collection: type
        };

        props.onAddOffer(offerData);

        titleInputRef.current.value = '';
        imageInputRef.current.value = '';
        rrsoInputRef.current.value = '';
        oprocentowanieInputRef.current.value = '';
        prowizjaInputRef.current.value = '';
        affilateLinkInputRef.current.value = '';
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="title">Nazwa</label>
                <input id="title" ref={titleInputRef} />
            </div>
            <div>
                <label htmlFor="image">Zdjęcie</label>
                <input id='image' ref={imageInputRef} />
            </div>
            <div>
                <label htmlFor="RRSO">RRSO</label>
                <input id='RRSO' ref={rrsoInputRef} />
            </div>
            <div>
                <label htmlFor="oprocentowanie">Oprocentowanie</label>
                <input id='oprocentowanie' ref={oprocentowanieInputRef} />
            </div>
            <div>
                <label htmlFor="prowizja">Prowizja</label>
                <input id='prowizja' ref={prowizjaInputRef} />
            </div>
            <div>
                <label htmlFor="link">Link</label>
                <input id='link' ref={affilateLinkInputRef} />
            </div>
            <div>
                <select required onChange={e => { setType(e.target.value) }}>
                    <option value='loans'>Kredyt Gotówkowy</option>
                    <option value='loans-konsolidacja'>Kredyt konsolidacyjny</option>
                    <option value='loans-hipoteka'>Kredyt hipoteczny</option>
                    <option value='pozyczki' >Pożyczki</option>
                    <option value='pozyczki-bik'>Pożyczki bez bik</option>
                    <option value='chwilowki'>Chwilówki</option>
                    <option value='chwilowki-bik'>Chwilówki bez bik</option>
                </select>
            </div>
            <div>
                <button>Dodaj nową ofertę</button>
            </div>
        </form>
    )
};

export default NewListingItem;