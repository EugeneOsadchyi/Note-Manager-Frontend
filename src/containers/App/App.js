import React from 'react';

import './App.css';

import Layout from '../../hoc/Layout';
import Explorer from '../Explorer';

import Modal from '../../components/UI/Modal';
import Input from '../../components/UI/Input';
import Button from '../../components/UI/Button';

const App = () => (
  <div className="App">
    <Layout>
      <Explorer />
      <Modal show>
        <h2>
          New Directory
        </h2>
        <Input placeholder="Name" />
        <Button clicked={() => alert('Test')}>
          Cancel
        </Button>
        <Button btnType="Success" clicked={() => alert('Test')}>
          Save
        </Button>
      </Modal>
    </Layout>
  </div>
);

export default App;
