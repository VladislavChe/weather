import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { BrowserRouter } from 'react-router-dom';

function App(props) {
  return (
    <div className="App">
      <Header />
      <Main cards={props.cards} />
    </div>
  );
}

export default App;
