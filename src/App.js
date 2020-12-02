import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Curriculum from './components/Curriculum/Curriculum';
import Header from './components/Header/Header';
import Upload from './components/Upload/Upload';
import Visual from './components/Visual/Visual';
import Layout from './hoc/Layout/Layout';

const App = () => {
  const routes = (
    <Switch>
      <Route path='/files'></Route>
      <Route path='/file-form'>
        <Upload />
      </Route>
      <Route path='/curriculum'>
        <Curriculum />
      </Route>
      <Route path='/visual'>
        <Visual />
      </Route>
    </Switch>
  );

  return (
    <Fragment>
      <Header />

      <Router>
        <Layout>{routes}</Layout>
      </Router>
    </Fragment>
  );
};

export default App;
