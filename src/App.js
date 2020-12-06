import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import {Route} from 'react-router-dom'
import StarshipPage from './components/StarshipPage';



function App() {
  return (
    <div className="App">
        <Route exact path="/" component={Home}/>
        <Route path="/starship" component={StarshipPage}/>
    </div>
  );
}

export default App;
