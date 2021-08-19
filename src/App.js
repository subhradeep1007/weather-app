
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home"
import Next from "./Components/Next"
function App() {
  return (


<Router>
<Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/next" component={Next} />
  
</Switch>
</Router>
  );
}

export default App;
