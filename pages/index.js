import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const HomePage = ({ meetups }) => {
  return <MeetupList meetups={meetups} />;
};

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   // Fetch data
//   return { props: { meetups: DUMMY_MEETUPS } };
// }

export async function getStaticProps() {
  // Fetch data

  const uri =
    "mongodb+srv://rzfalcore:a7hA4GtutCPtmhR@cluster0.tqc39.mongodb.net/meetups?retryWrites=true&w=majority";

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

export default HomePage;
