import React from "react";
import Signup from "./Signup";
import { AuthProvider } from "../contexts/AutchContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Dashbord from "./user/Dashbord";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import BarInventory from "./user/BarInventory";
import Status from "./user/Status";

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/dashbord" component={Dashbord} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
            <Route exact path="/bar-inventory" component={BarInventory} />
            <Route exact path="/status" component={Status} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
