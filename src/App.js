import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import MomentUtils from '@date-io/moment';
import { Provider as StoreProvider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { renderRoutes } from 'react-router-config';
import { ToastContainer } from 'react-toastify';
import theme from './theme';
import { configureStore } from './store';
import routes from './routes';
import {
  ScrollReset,
  GoogleAnalytics,
  CookiesNotification,
} from './components';
import moment from 'moment';
import 'moment/locale/vi'; //
import './mixins/chartjs';
import './mixins/moment';
import './mixins/validate';
import './mixins/prismjs';
import './mock';
import './assets/scss/index.scss';

const history = createBrowserHistory();
const store = configureStore();

const App = () => {
  moment.locale('vi');
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Router history={history}>
            <ToastContainer
              autoClose={3000}
              hideProgressBar={false}
              closeOnClick
              pauseOnHover
              draggable
            />
            <ScrollReset />
            <GoogleAnalytics />
            <CookiesNotification />
            {renderRoutes(routes)}
          </Router>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
