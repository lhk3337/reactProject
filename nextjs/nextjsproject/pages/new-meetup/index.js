import NewMeetUpForm from "../../components/meetups/NewMeetupForm";
function NewMeetUpPage() {
  function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }
  return <NewMeetUpForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetUpPage;
