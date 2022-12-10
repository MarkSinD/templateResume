import * as React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {SnackbarProvider} from "notistack";
import './i18n/index';
import {snackbarProviderProps} from "./pages/harness/snackbar";
import {store} from "./redux/store";
import {App} from "./App";

ReactDOM.render(
  <Provider store={store}>
    <SnackbarProvider {...snackbarProviderProps}>
      <App/>
    </SnackbarProvider>
  </Provider>,
  document.getElementById('root'),
)
