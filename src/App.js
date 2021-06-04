import './App.css';
import {Sidebar} from "./Component/Sidebar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import dashboard from "./Component/dashboard";
function App() {
  return (
    <>
    <Router>
    <Switch>
      <Route path ="/" exact component= {dashboard}/>
    </Switch>
    </Router>
    </>
  );
}

export default App;
