import './App.css';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
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
