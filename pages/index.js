import { MongoClient } from "mongodb";
import Head from "next/head";
import Addons from "../components/addons/addons";
import Footer from "../components/footer/Footer";

import MainNav from "../components/layout/MainNav";
import Listing from "../components/listing/Listing";

const Home = (props) => {
  return (
    <>
      <Head>
        <title>Kredytoman.pl - Ranking kredytów gotówkowych</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Niezależny ranking najlepszych ofert na kredyty gotówkowe" />
        <link rel='icon' href='/images/favicon.ico' />
      </Head>
      <MainNav />
      <Listing offers={props.offers} />
      <Addons />
      <Footer />
    </>
  )
};

export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://admin:admin@cluster0.5lfaf.mongodb.net/loans?retryWrites=true&w=majority'
  );
  const db = client.db();

  const collection = db.collection('loans');

  const offers = await collection.find().toArray();

  client.close();

  return {
    props: {
      offers: offers.map(offer => ({
        title: offer.title,
        image: offer.image,
        rrso: offer.rrso,
        oprocentowanie: offer.oprocentowanie,
        prowizja: offer.prowizja,
        affilate_link: offer.affilate_link,
        id: offer._id.toString(),
      }))
    }
  }
};

export default Home;