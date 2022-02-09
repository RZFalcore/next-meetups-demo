import Image from "next/image";
import { detail } from "./MeetupDetail.module.css";

const MeetupDetail = ({ image, title, address, description }) => {
  return (
    <section className={detail}>
      <Image src={image} alt={title || "Can`t load image..."} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
};

export default MeetupDetail;
