import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

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
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 3600,
  };
}

// export async function getServerSideProps(context) {
//   const { res, req } = context;

//   return {
//     props: { meetups: DUMMY_MEETUPS },
//   };
// }

export default HomePage;
