import { TopBar } from "./components/TopBar"
import { Home } from "./pages/Home";
import { Logaut } from "./pages/Home/Logaut";
import { Login } from "./pages/Login";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import { Servico } from "./components/Servico";

const App = () =>{
  return(
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/register'>
          <Logaut/>
          </Route>
        <Route path='/servico'>
          <Servico/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
