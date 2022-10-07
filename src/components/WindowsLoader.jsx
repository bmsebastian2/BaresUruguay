import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Spinner from "../elements/Spinner/Spinner";
import TextGroupBarUy from "../elements/groupTextBarUy/TextGroupBarUy";

const WindowsLoader = () => {
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div>
          <Spinner />
          <TextGroupBarUy />
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default WindowsLoader;
