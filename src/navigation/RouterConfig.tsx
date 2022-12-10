import * as React from 'react'
import {useCallback} from 'react'
import {AuthRoute} from "./AuthRoute";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {FirstPage} from "../pages/firstPage/FirstPage";
import {SecondPage} from "../pages/secondPage/SecondPage";
import {Header} from "../pages/harness/Header";
import {Container, CssBaseline} from "@mui/material";

export const RouterConfig = () => {
  const getElement = useCallback((Element) => {
    return (
      <AuthRoute>
        {Element}
      </AuthRoute>
    )
  }, []);

  return (
    <BrowserRouter basename="/">
      <CssBaseline/>
      <Header/>
      <Container>
        <Routes>
          <Route path="/" element={<FirstPage/>}/>
          <Route path="second" element={getElement(<SecondPage/>)}/>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}