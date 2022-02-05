import { useRouter } from "next/router";

const DetailsPage = () => {
  const router = useRouter();

  return <h1>Details {router.query.newsId} page</h1>;
};

export default DetailsPage;
