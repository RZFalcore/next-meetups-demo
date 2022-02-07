import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "1",
    title: "Team place",
    image:
      "http://cdn.cnn.com/cnnnext/dam/assets/170123102557-beautiful-india-valley-of-flowers-flickr-alosh-bennett-4951216953.jpg",
    address: "India, Some mountains :)",
    description: "Our new place!",
  },
  {
    id: "2",
    title: "New open space",
    image: "https://media.timeout.com/images/105184577/750/562/image.jpg",
    address: "Some city, top flour :)",
    description: "Our new place!",
  },
];

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
  return { props: { meetups: DUMMY_MEETUPS }, revalidate: 60 };
}

export default HomePage;
