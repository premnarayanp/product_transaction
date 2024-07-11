import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastProvider } from 'react-toast-notifications';
import { Provider } from 'react-redux';
import store from './redux/store/configureStore';
import App from './components/App';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ToastProvider autoDismiss autoDismissTimeout={5000} placement="top-left">
    <Provider store={store}>
      <App />
    </Provider>,
  </ToastProvider>
);

