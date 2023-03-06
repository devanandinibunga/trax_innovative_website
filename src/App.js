// import logo from './logo.svg';
import './App.css';
import { Body } from './components/Body/Body';
import { TraxFooter } from './components/TraxFooter/TraxFooter';

import { TraxHeader } from './components/TraxHeader/TraxHeader';

function App() {
  return (
    <div className="App">
      <TraxHeader/>
      <Body/>
      <TraxFooter/>
    </div>
  );
}

export default App;


// https://trax.acrothemes.com/bootstrap-v5/index-innovative.html