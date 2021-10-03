
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>

        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
