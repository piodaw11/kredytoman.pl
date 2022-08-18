import NewListingItem from "../../components/listing/NewListingItem";

const NewOffer = () => {
    const addNewOffer = async (offer) => {
        const res = await fetch('/api/new-offer', {
            method: 'POST',
            body: JSON.stringify(offer),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    };

    return (
        <>
            <h1>Nowa oferta</h1>
            <NewListingItem onAddOffer={addNewOffer} />
        </>
    )
};

export default NewOffer;