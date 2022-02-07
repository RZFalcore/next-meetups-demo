import { useState, useEffect } from "react";
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

const HomePage = () => {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    setMeetups(DUMMY_MEETUPS);
  }, []);

  return <MeetupList meetups={meetups} />;
};

export default HomePage;
