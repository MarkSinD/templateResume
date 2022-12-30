import * as React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {SnackbarProvider} from "notistack";
import './i18n/index';
import {snackbarProviderProps} from "./pages/harness/snackbar";
import {store} from "./redux/store";
import {App} from "./App";
import CssBaseline from "@mui/material/CssBaseline";


ReactDOM.render(
  <Provider store={store}>
    <SnackbarProvider {...snackbarProviderProps}>
      <CssBaseline/>
      <App/>
    </SnackbarProvider>
  </Provider>,
  document.getElementById('root'),
)
