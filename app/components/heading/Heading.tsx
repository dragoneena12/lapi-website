import React from "react";

import classes from "./Heading.module.scss";

const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h1 className={classes.Heading}>{children}</h1>
    </>
  );
};

export default Heading;
