import { useRouter } from "next/router";
export default function DetailPage() {
  const router = useRouter();
  const { newsId } = router.query;
  return (
    <>
      <h1>The Detail Page</h1>
      <p>News ID : {newsId}</p>
    </>
  );
}
