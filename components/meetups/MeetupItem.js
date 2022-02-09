import Image from "next/image";
import { useRouter } from "next/router";
import Card from "../ui/Card";
import styles from "./MeetupItem.module.css";

const MeetupItem = ({ id, image, title, address }) => {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push(`/${id}`);
  };

  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <Image
            unoptimized
            src={image}
            alt={title}
            width="1600"
            height="900"
          />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className={styles.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
