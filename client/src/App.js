import {Switch, Route, useLocation} from "react-router-dom";

import HomeScreen from "./pages/HomeScreen/HomeScreen";
import Home from "./pages/Home/Home";
import Types from "./pages/Types/Types";
import Detail from "./pages/Detail/Detail";
import CreatePokemon from "./components/Nav/Bar/CreatePokemon/CreatePokemon";

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
        <Route exact path="/types" component={Types}/>
        <Route exact path="/detail/:id" component={Detail}/>
        <Route exact path="/createPokemon" component={CreatePokemon}/>
      </Switch>
    </div>
  );
}

export default App;
