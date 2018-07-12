import React from 'react';
import './App.css';

import Layout from '../../hoc/Layout';
import Explorer from '../Explorer';

const App = () => (
  <div className="App">
    <Layout>
      <Explorer />
    </Layout>
  </div>
);

export default App;
