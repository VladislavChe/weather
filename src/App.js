import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App(props) {
  return (
    <div className="App">
      <Header />
      <Main
        card={props.card}
        cards={props.cards}
        choosedTower={props.choosedTower}
        choosedCity={props.choosedCity}
      />
    </div>
  );
}

export default App;
