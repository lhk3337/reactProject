import Head from "next/head";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import CustomHead from "../components/layout/CustomHead";

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
function HomePage(props) {
  return (
    <>
      <CustomHead title="React Meetups" content="Browse a huge list of highlt active React meetup!" />
      <MeetupList meetups={props.meetups} />
    </>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect("mongodb://localhost:27017/meetupdb");
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

// export async function getServerSideProps(context) {
//   const { res, req } = context;

//   return {
//     props: { meetups: DUMMY_MEETUPS },
//   };
// }

export default HomePage;
