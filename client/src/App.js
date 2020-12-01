import { Route, Switch, Link } from "react-router-dom";
import "./App.css";
import { Add } from "./Components/Add";
import ContactList from "./Components/ContactList";
import { toggleFalse } from "./JS/actions/edit";
import { useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      MERN APPLICATION <br />
      <Button basic color="orange" onClick={dispatch(toggleFalse())}>
        <Link to="/add">ADD CONTACT</Link>
      </Button>
      <Button basic color="orange" color="blue">
        <Link to="/"> ContactList</Link>
      </Button>
      <Switch>
        <Route exact path="/" component={ContactList} />
        <Route path={["/add", "/edit/:id"]} component={Add} />
      </Switch>
    </div>
  );
}

export default App;
