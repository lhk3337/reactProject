import { useRouter } from "next/router";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function meetupDetails() {
  const router = useRouter();
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg"
      title="A First Meetup"
      address="Some Street 5, Some City"
      description="The meetup description"
    />
  );
}
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: { meetupId: "m1" },
      },
      {
        params: { meetupId: "m2" },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
        id: meetupId,
        title: "A First Meetup",
        address: "Some Street 5, Some City",
        description: "The meetup description",
      },
    },
  };
}

export default meetupDetails;
