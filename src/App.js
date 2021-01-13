import logo from './logo.svg';
import React from "react";
import './App.scss';
import HeaderTop from "./components/mainHeader";
import SideMenu from "./components/sideMenu";
import MainView from "./components/mainView";
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import CompletedTasksView from "./components/completedTasksView";
import CategoriesView from "./components/categoriesView";
import AddTodo from "./components/addTodo";

const App = () => {
  return (
    <div className="App">
      <div className="sideMenu">
          <SideMenu user={{email: "test@abv.bg"}} signOut={()=> console.log("signed out")} />
      </div>      
      <div className="mainBody">
      <div className="App-header">
        <HeaderTop />
      </div>
        <div className="mainView">
        <Switch>
              <Route exact path="/">
                <MainView />
              </Route>
              <Route path="/tasks">
                <CompletedTasksView />
              </Route>
              <Route path="/categories">
                <CategoriesView />
              </Route>
              <Route path="/add">
                <AddTodo />
              </Route>
        </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
