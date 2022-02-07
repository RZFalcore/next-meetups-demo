import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  return <MeetupDetail {...props} />;
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { meetupId: "1" } }, { params: { meetupId: "2" } }],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      id: meetupId,
      image:
        "http://cdn.cnn.com/cnnnext/dam/assets/170123102557-beautiful-india-valley-of-flowers-flickr-alosh-bennett-4951216953.jpg",
      title: "Team place",
      address: "India, Some mountains :)",
      description: "Our new place!",
    },
  };
}

export default MeetupDetails;
