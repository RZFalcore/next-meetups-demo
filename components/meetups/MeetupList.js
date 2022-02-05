import MeetupItem from "./MeetupItem";
import styles from "./MeetupList.module.css";

const MeetupList = ({ meetups }) => {
  return (
    <ul className={styles.list}>
      {meetups.map(({ id, image, title, address }) => (
        <MeetupItem
          key={id}
          id={id}
          image={image}
          title={title}
          address={address}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
