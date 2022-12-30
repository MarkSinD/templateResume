import * as React from 'react'
import {ReactElement, useCallback} from 'react'
import {AuthRoute} from "./AuthRoute";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {FirstPage} from "../pages/firstPage/FirstPage";
import {SecondPage} from "../pages/secondPage/SecondPage";
import {ThirdPage} from "../pages/thirdPage/ThirdPage";
import {CssBaseline} from "@mui/material";

export const RouterConfig = () => {
  const getElement = useCallback((Element: ReactElement) => {
    return (
      <AuthRoute>
        {Element}
      </AuthRoute>
    )
  }, []);

  return (
    <BrowserRouter basename="/">
      <CssBaseline/>
      <Routes>
        <Route path="/" element={<FirstPage/>}/>
        <Route path="second" element={getElement(<SecondPage/>)}/>
        <Route path="third" element={getElement(<ThirdPage/>)}/>
      </Routes>
    </BrowserRouter>
  )
}