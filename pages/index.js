import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA4MTlfMTI4%2FMDAxNjkyNDMxODY0NDM2.0jBcFTPx99FFN9GC1MZ8PdFc2L9we3i8ponFSRi0z-4g.T54iqIDXTWmtLIayhNb_fCvAIuldGj431z2ORXNRdzwg.JPEG.senser111%2F1000005147.jpg&type=a340",
  },
  {
    id: "m2",
    title: "A sec Meetup",
    address: "Some address 5, 12345 Some City",
    description: "This is a sec meetup!",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA4MTlfMTI4%2FMDAxNjkyNDMxODY0NDM2.0jBcFTPx99FFN9GC1MZ8PdFc2L9we3i8ponFSRi0z-4g.T54iqIDXTWmtLIayhNb_fCvAIuldGj431z2ORXNRdzwg.JPEG.senser111%2F1000005147.jpg&type=a340",
  },
];

export default function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}
