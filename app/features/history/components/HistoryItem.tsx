import React, { useState, useEffect } from "react";

import Button from "@/components/button/Button";
import { Image } from "@/components/image/Image";
import Badge from "./Badge";
import classes from "./HistoryItem.module.scss";

type Props = {
  startDate: Date;
  endDate: Date;
  name: string;
  eventURL: string;
  imageURL: string[];
  tags: string[];
  description: JSX.Element;
};

const HistoryItem: React.FC<Props> = (props) => {
  const eventDate =
    props.startDate.getTime() === props.endDate.getTime()
      ? props.startDate.toLocaleDateString()
      : props.startDate.toLocaleDateString() +
        " 〜 " +
        props.endDate.toLocaleDateString();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (show) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [show]);

  const eventURL = props.eventURL ? (
    <Button href={props.eventURL} external>
      イベントページへ
    </Button>
  ) : null;

  if (props.imageURL.length === 0) {
    props.imageURL.push("history/no_image.jpg");
  }

  return (
    <>
      <tr onClick={handleShow}>
        <td>{eventDate}</td>
        <td>{props.name}</td>
        <td>
          <div className={classes.BadgeContainer}>
            {props.tags.map((tag) => (
              <Badge key={tag} value={tag} />
            ))}
          </div>
        </td>
      </tr>

      <div
        className={show ? classes.BackDropActive : classes.BackDrop}
        onClick={handleClose}
        onKeyPress={handleClose}
        role="button"
        tabIndex={0}
      />
      {show && (
        <div className={classes.Modal}>
          <h2>{props.name}</h2>
          {props.imageURL.map((URL) => (
            <Image key={URL} src={URL} alt={URL} width={800} className={classes.Image} />
          ))}
          <p className={classes.Description}>{props.description}</p>
          {eventURL}
          <Button onClick={handleClose}>Close</Button>
        </div>
      )}
    </>
  );
};
export default HistoryItem;
