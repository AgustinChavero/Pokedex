import {Switch, Route, useLocation} from "react-router-dom";

import HomeScreen from "./pages/HomeScreen/HomeScreen";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Detail from "./pages/Detail/Detail";
import CreatePokemon from "./pages/CreatePokemon/CreatePokemon"
import NotFound from "./pages/404/NotFound"

import './App.css';
import NavBar from "./components/Nav/Nav";


function App() {
  const { pathname } = useLocation();
  const homeScreen = "/"

  return (
    <div className={`${pathname === homeScreen ? "homeScreen" : "home"}`}>
      {pathname !== homeScreen ? <NavBar/> : null}
      <Switch>
        <Route exact path="/" component={HomeScreen}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/aboutus" component={AboutUs}/>
        <Route exact path="/detail/:id" component={Detail}/>
        <Route exact path="/createPokemon" component={CreatePokemon}/>
        <Route exact path="*" component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
