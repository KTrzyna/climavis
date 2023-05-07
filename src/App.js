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
  const tabs = [
    {
      id: 1,
      image: 'https://picsum.photos/200/300',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      slider: [1, 2, 3, 4, 5],
      tab: "1",
    },
    {
      id: 2,
      image: 'https://picsum.photos/200/300',
      text: 'Praesent nec felis sit amet ligula bibendum malesuada.',
      slider: [1, 2, 3, 4, 5],
      tab: "2",
    },
    {
      id: 3,
      image: 'https://picsum.photos/200/300',
      text: 'Maecenas a dolor sed eros dapibus pretium sit amet id leo.',
      slider: [1, 2, 3, 4, 5],
      tab: "3",
    },
  ];

  return (
    <div>
      <Nav />
    </div>
  );
}

export default App;
