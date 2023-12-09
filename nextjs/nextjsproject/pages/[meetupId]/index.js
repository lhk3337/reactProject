import { MongoClient, ObjectId } from "mongodb";

import MeetupDetail from "../../components/meetups/MeetupDetail";
import CustomHead from "../../components/layout/CustomHead";

function meetupDetails({ meetupData }) {
  return (
    <>
      <CustomHead title={meetupData.title} content={meetupData.description} />
      <MeetupDetail {...meetupData} />
    </>
  );
}
export async function getStaticPaths() {
  const client = await MongoClient.connect("mongodb://localhost:27017/meetupdb");
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    fallback: "blocking",
    paths: meetups.map((meetup) => ({ params: { meetupId: meetup._id.toString() } })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect("mongodb://localhost:27017/meetupdb");
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({ _id: new ObjectId(meetupId) });

  const { _id, ...rest } = selectedMeetup;

  client.close();

  return {
    props: {
      meetupData: { id: selectedMeetup._id.toString(), ...rest },
    },
  };
}

export default meetupDetails;
