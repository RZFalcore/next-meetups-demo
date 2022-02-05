import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <h1>Home page</h1>
      <ul>
        <li>
          <Link href="/news/react_course">New React Course is HERE!</Link>
        </li>
        <li>
          <Link href="/news/nodeUpdate">Look at new Node version.</Link>
        </li>
      </ul>
    </>
  );
};

export default HomePage;
