import Link from "next/link";
import styles from "./MainNav.module.css";

const MainNav = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>ReactingMeetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
