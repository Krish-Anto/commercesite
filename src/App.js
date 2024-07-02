import './App.css';
import {ContextProvider} from './components/contextProvider';
import { Card } from './components/Card';

function App() {


  return (
    <ContextProvider>
      <Card/>
    </ContextProvider>
  );
}

export default App;
