import { useRouter } from "next/router";
import Head from "next/head";
import NewMeetUpForm from "../../components/meetups/NewMeetupForm";
import CustomHead from "../../components/layout/CustomHead";
function NewMeetUpPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    router.push("/");
  }
  return (
    <>
      <CustomHead
        title="Add a New Meetup"
        content="Add your own meetups and create amazing networking opportunities."
      />
      <NewMeetUpForm onAddMeetup={addMeetupHandler} />;
    </>
  );
}

export default NewMeetUpPage;
