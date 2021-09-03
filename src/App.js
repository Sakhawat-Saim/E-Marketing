import { ExpansionPanelDetails } from "@material-ui/core";
import { createContext, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Admin from "./components/Admin/Admin";
import Contact from "./components/Contact/Contact";
import Customer from "./components/Customer/Customer";
import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import NotFound from "./components/NOTFOUND/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import NavBar from "./components/Shared/NavBar/NavBar";

export const UserContext = createContext();
export const paymentContext = createContext();
export const titleContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    name: "",
    isLoggedIn: false,
    imageUrl: "",
    email: "",
    isAdmin: false,
    isUser: true,
  });
  const [paymentPaid, setPaymentPaid] = useState({ isPaid: false });
  const [titleText, setTitleText] = useState({ title: "", price: null });
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <paymentContext.Provider value={[paymentPaid, setPaymentPaid]}>
        <titleContext.Provider value={[titleText, setTitleText]}>
          <Router>
            <NavBar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/about-us">
                <AboutUs />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <PrivateRoute path="/admin">
                <Admin />
              </PrivateRoute>
              <PrivateRoute path="/customer">
                <Customer />
              </PrivateRoute>
              <Route path="/logIn">
                <LogIn />
              </Route>
              <Route to="*">
                <NotFound/>
              </Route>
            </Switch>
          </Router>
        </titleContext.Provider>
      </paymentContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
