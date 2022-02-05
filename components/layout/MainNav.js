import Link from "next/link";
import styles from "./MainNav.module.css";

const MainNav = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>ReactingMeetups</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Meetups</Link>
          </li>
          <li>
            <Link href="/new-meetup">Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
