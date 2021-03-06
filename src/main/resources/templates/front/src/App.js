import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import ListEmployee from './components/ListEmployee';
import Header from './components/Header';
import Footer from './components/Footer';
import NewEmployee from './components/NewEmployee';
import Update from './components/Update';
import Details from './components/Details';

function App() {
  return (
    
    <div>
      <Router>
        
          <Header/>
            <div className="container">
              <Switch>
                <Route path='/' exact component={ListEmployee}></Route>
                <Route path='/employees' component={ListEmployee}></Route>
                <Route path='/add-employee' component={NewEmployee}></Route>
                <Route path='/update-employee/:id' component={Update}></Route>
                <Route path='/details-employee/:id' component={Details}></Route>

               
              </Switch>
            </div>
          <Footer/>
       
      </Router>
    </div>
    
    
  );
}

export default App;
