import { useRef } from "react";

import Card from "../ui/Card";
import styles from "./NewMeetupForm.module.css";

const NewMeetupForm = ({ onAddMeetup }) => {
  const titelInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptiomInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const title = titelInputRef.current.value;
    const image = imageInputRef.current.value;
    const address = addressInputRef.current.value;
    const description = descriptiomInputRef.current.value;

    onAddMeetup({ title, image, address, description });
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titelInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            required
            id="description"
            rows="5"
            ref={descriptiomInputRef}
          ></textarea>
        </div>
        <div className={styles.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
