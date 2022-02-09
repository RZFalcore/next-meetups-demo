import { MongoClient } from "mongodb";
import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";

const HomePage = ({ meetups }) => {
  return (<>
    <Head>
      <title>Meetups App</title>
      <meta name="description" content="Try new meetups app based on React JS!"/>
    </Head>
   <MeetupList meetups={meetups} />
  </>)
};


export async function getStaticProps() {
  const uri = `mongodb+srv://${process.env.NAME}:${process.env.DB_PASS}@cluster0.tqc39.mongodb.net/meetups?retryWrites=true&w=majority`;

  const client = await MongoClient.connect(uri);

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map(({ _id, title, image, address, description }) => {
        return { id: _id.toString(), title, image, address, description };
      }),
    },
    revalidate: 60,
  };
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   // Fetch data
//   return { props: { meetups: DUMMY_MEETUPS } };
// }


export default HomePage;
