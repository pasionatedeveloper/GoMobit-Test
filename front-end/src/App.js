import RegisterUser from './components/RegisterUser';
import {Switch,BrowserRouter as Router, Route} from "react-router-dom";
import GetAllUsers from './components/GetAllUsers';
import DrawerMenu from './components/DrawerMenu';
import WelcomePage from './components/WelcomePage';
import Dashbooard from './components/Dashboard';

function App() {
  return (
    <div className="container">
        <Router>
            <DrawerMenu/>
            <Switch>
                <Route exact path="/">
                    <WelcomePage/>
                </Route>
                <Route exact path="/register">
                        <RegisterUser/>
                </Route>
                <Route exact path="/get-all-users">
                        <GetAllUsers/>
                </Route>
                <Route exact path="/dashboard">
                       <Dashbooard/> 
                </Route>
            </Switch>      
        </Router>
    </div>
  );
}
export default App;
