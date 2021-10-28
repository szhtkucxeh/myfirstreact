import logo from './logo.svg';
import './App.css';
import Myprops from './myprops'
import Lojin from './lojin'
import Count from './Count'
// import 'bootstrap/dist/css';
import { Route, Link ,Switch } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
// import Notfound from './Notfound'


function App() {
  
  return (
    <Switch>
            {/* <Route exact path="/" component={App} /> */}
            <Route exact path="/" component={Lojin} />
            <Route path="/home" component={Myprops} exact />
            <Route path="/count" component={Count} />
            {/* <Route  component={Notfound} /> */}

    </Switch>
    // <div className="App">
    //   {/* <h1><Myprops text="רשימת משימות"/></h1> */}
      
    //  <div id="b"> <Lojin text="log in"/></div>
    //  {/* <h3 id = "a" > <Myprops text="string"/></h3> */}

    // </div>
    
  );
}

export default App;
