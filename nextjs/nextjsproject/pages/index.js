import MeetupList from "../components/meetups/MeetupList";

function HomePage() {
  const DUMMY_MEETUPS = [
    {
      id: "m1",
      title: "First MeetUp",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
      address: "Some Address 1, 1234",
      description: "This is a first meetup",
    },
    {
      id: "m2",
      title: "Second MeetUp",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
      address: "Some Address 1, 1234",
      description: "This is a second meetup",
    },
  ];
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
