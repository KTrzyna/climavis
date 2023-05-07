import './App.css';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import TabContent from './components/TabContent';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import HelloWorld from './components/HelloWorld';
import Nav from './components/Nav';

Amplify.configure(awsconfig);

function App() {

  return (
    <div>
      <Nav />
    </div>
  );
}

export default App;
