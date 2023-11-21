import MeetupDetail from "@/components/meetups/MeetupDetail";

export default function MeetupDetails(props) {
  return (
    <MeetupDetail
      image="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA4MTlfMTI4%2FMDAxNjkyNDMxODY0NDM2.0jBcFTPx99FFN9GC1MZ8PdFc2L9we3i8ponFSRi0z-4g.T54iqIDXTWmtLIayhNb_fCvAIuldGj431z2ORXNRdzwg.JPEG.senser111%2F1000005147.jpg&type=a340"
      title="first"
      address="123"
      description="this is first"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  //동적인 페이지니까 아이디 추출
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        image:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA4MTlfMTI4%2FMDAxNjkyNDMxODY0NDM2.0jBcFTPx99FFN9GC1MZ8PdFc2L9we3i8ponFSRi0z-4g.T54iqIDXTWmtLIayhNb_fCvAIuldGj431z2ORXNRdzwg.JPEG.senser111%2F1000005147.jpg&type=a340",
        id: meetupId,
        title: "A First Meetup",
        address: "Some address 5, 12345 Some City",
        description: "This is a first meetup!",
      },
    },
  };
}
