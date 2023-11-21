import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

//new-meetup/
export default function NewMeetupPage() {
  const router = useRouter();
  const addMeetupHandler = async (enteredMeetupData) => {
    const res = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    router.push("/");
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
