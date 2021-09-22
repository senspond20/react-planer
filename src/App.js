// import logo from './logo.svg';
// import './App.css';
import { Route } from "react-router";
import { Home, Plan } from "./pages";

function App() {
  return (
    <div>
          <Route exact path="/" component={Plan}/>
          {/* <Route path="/plan" component={Plan}/> */}
     </div>
  );
}

export default App;
