import logo from './logo.svg';
import React, {useState} from "react";
import './App.scss';
import HeaderTop from "./components/mainHeader";
import SideMenu from "./components/sideMenu";
import MainView from "./components/mainView";
import { Switch,  Route,  useLocation,  Redirect} from "react-router-dom";
import CompletedTasksView from "./components/completedTasksView";
import CategoriesView from "./components/categoriesView";
import AddTodo from "./components/addTodo";
import Join from "./views/join";
import useAuth from "./services/firebase/useAuth";
import firebase from "firebase/app"; // the firbase core lib
import "firebase/auth"; // specific products
import "firebase/firestore";
import firebaseConfig from "./config/firebase"; // the firebase config we set up ealier
import LoginForm from './components/logInForm';
import Login from "./views/login";

function Protected({ authenticated, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        authenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

let initAttemptedRoute = "/"

function RedirectToHome({ authenticated, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !authenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: initAttemptedRoute,
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function App () {

  const [items, setItems] = useState([]);

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const {
    isAuthenticated,
    signInWithProvider,
    signOut,
    user,
    loading
  } = useAuth(firebase.auth);

  return (
    <div className="App">
      <div className="sideMenu">
          <SideMenu user={user} signOut={signOut} />
      </div>      
      <div className="mainBody">
        <div className="App-header">
          <HeaderTop />
        </div>
        <div className="mainView">
          <Switch>
                <Protected authenticated={isAuthenticated } exact path="/">
                  <MainView items={items} onDelete={setItems} />
                </Protected>
                <Protected authenticated={isAuthenticated } path="/tasks">
                  <CompletedTasksView />
                </Protected>
                <Protected authenticated={isAuthenticated } path="/categories">
                  <CategoriesView />
                </Protected>
                <Protected authenticated={isAuthenticated } path="/add">
                  <AddTodo onSubmit={setItems} />
                </Protected>
          </Switch>
        </div>
      </div>
      <div className="loginMain">
      <Switch>
        <RedirectToHome authenticated={isAuthenticated} path="/login">
          <Login signInWithProvider={signInWithProvider} />
        </RedirectToHome>
      </Switch>
      </div>      
    </div>
  );
}

export default App;