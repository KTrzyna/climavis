import './App.css';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import { TextField } from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello!</h1>
        <TextField />
      </header>
    </div>
  );
}

export default App;
