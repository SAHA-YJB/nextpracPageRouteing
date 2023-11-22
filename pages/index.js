import MeetupList from "@/components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>NextMeetups</title>
        <meta name="description" content="넥스트 연습하는 페이지!" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

//요청이 들어올 때 마다 실행되는 함수
//서버 사이드 렌더링에 사용
// 각 요청 시에 서버에서 실행되며, 페이지를 렌더링하는 데 필요한 데이터를 가져옴
// 차이점은 getServerSideProps는 빌드 시간이 아닌 각 요청 시마다 실행
// 사용자 별로 다르거나 매우 빈번하게 변경되는 데이터를 다룰 때 유용
// context
// params: 동적 라우트의 매개변수를 포함
// 페이지 경로가 pages/posts/[id].js인 경우, context.params.id를 통해 현재 페이지의 id를 추출

// req: IncomingMessage 객체로, HTTP 요청에 대한 정보를 포함
// res: ServerResponse 객체로, HTTP 응답에 대한 정보를 포함
// query: URL의 쿼리 문자열을 객체로 파싱한 값을 포함
// preview: 페이지가 미리 보기 모드에서 실행되는지에 대한 boolean 값을 포함
// previewData: 미리 보기 모드에서 설정된 데이터를 포함
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   //fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

//실제로 페이지에서 사용할 props를 정의하는 함수
//Next.js가 페이지를 빌드하는 시점에 데이터를 가져오는 함수
//비동기적 설정 가능
//서버에서만 돌아가는 어떤 코드든지 실행가능
//클라이언트 측에서 절대 실행되지 않음
//블로그 포스트, 문서 등 변경 빈도가 낮은 콘텐츠에 적합
//이 데이터에 최신 데이터는 없을 수 있다
export async function getStaticProps() {
  //몽고디비에서 데이터가져오기
  const client = await MongoClient.connect(process.env.MONGODB_URI);
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
    //점진적으로 정적 생성한다
    //revalidate는 빌드 후에도 페이지를 최신 상태로 유지하기 위해 재검증하는 빈도를 설정하는 역할
    revalidate: 10,
  };
}
