import NewMeetupForm from "@/components/meetups/NewMeetupForm";

//new-meetup/
export default function NewMeetupPage() {
  const addMeetupHandler = (enteredMeetupData) => {
    console.log(enteredMeetupData);
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
