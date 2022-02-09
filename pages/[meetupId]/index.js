import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = ({ meetupData }) => {
  return <MeetupDetail {...meetupData} />;
};

export async function getStaticPaths() {
  const uri = `mongodb+srv://${process.env.NAME}:${process.env.DB_PASS}@cluster0.tqc39.mongodb.net/meetups?retryWrites=true&w=majority`;

  const client = await MongoClient.connect(uri);

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: "1" }).toArray();

  client.close();
  return {
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const uri = `mongodb+srv://${process.env.NAME}:${process.env.DB_PASS}@cluster0.tqc39.mongodb.net/meetups?retryWrites=true&w=majority`;

  const client = await MongoClient.connect(uri);

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;
