import React, { FC } from 'react';
import { Provider } from 'react-redux';

import { RouterWrapper } from './router/RouterWrapper';
import './App.css';
import store from './store';

const App: FC = () => (
  <Provider store={store}>
    <RouterWrapper />
  </Provider>
);
export default App;
