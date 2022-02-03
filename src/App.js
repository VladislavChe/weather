import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App(props) {
  return (
    <div className="App">
      <Header />
      <Main mainBranch={props.state.mainBranch} dispatch={props.dispatch} />
    </div>
  );
}

export default App;
