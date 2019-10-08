import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import UpdateProfile from "./pages/UpdateProfile"
import NoMatch from "./pages/NoMatch";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";
import { Container } from 'reactstrap';
import TabBar from './components/tabBar';

function App() {


  
  return (
      <Router>
        <>
          <TopNav />
          
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/signup" render={(props) => <Auth {...props} action="signup" />} />
              <Route exact path="/login" render={(props) => <Auth {...props} action="login" />} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path = "/updateprofile" render = {(props) => <UpdateProfile {...props}/>}/>
              <Route component={NoMatch} />
            </Switch>
          
          <Footer  className= "footer"/>
        </>
      </Router>
  );
}

export default App;
