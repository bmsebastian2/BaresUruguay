import React from "react";
import { Outlet } from "react-router-dom";
import TextShadown from "../../elements/groupTextBarUy/TextShadown";
import styles from "./layoutcomponents.module.css";
import UserProvider from "../../context/UserProvider";

const LayoutComponents = () => {
  return (
    <div className={styles.containerMain}>
      <div className={styles.containerMenu}>
        <TextShadown />
        <UserProvider>
          <Outlet />
        </UserProvider>
      </div>
    </div>
  );
};

export default LayoutComponents;
