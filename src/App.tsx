import React, { FC } from 'react';
import { Provider } from 'react-redux';

import './App.css';
import store from './store';

const App: FC = () => (
  <Provider store={store}>
    <div className="App">
      <h1>Hello World</h1>
    </div>
  </Provider>
);
export default App;
