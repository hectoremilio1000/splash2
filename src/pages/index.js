import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { dividerClasses } from "@mui/material";
import Modal from "../components/Modal";

const delay = 5;

const IndexPage = () => {
  const [show, setShow] = useState(false);

  useEffect(
    () => {
      setTimeout(() => {
        window.location.replace(`/inicio`);
      }, 3000);
      // let timer1 = setTimeout(() => setShow(true), delay * 1000);

      // this will clear Timeout
      // when component unmount like in willComponentUnmount
      // and show will not change to true
      return () => {
        clearTimeout();
      };
    },
    // useEffect will run only one time with empty []
    // if you pass a value to array,
    // like this - [data]
    // than clearTimeout will run every time
    // this value changes (useEffect re-run)
    []
  );

  return show ? <div>hola</div> : <div>show is false, wait {delay}seconds</div>;
};

export default IndexPage;
