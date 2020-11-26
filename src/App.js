import IndexBody from './Components/IndexBody'
import {Internship, Courses, Header} from './Components/layout/Header'
import Footer from './Components/layout/Footer'
import {Java, Javascript, Python, Html, Css} from "./Components/Courses";

import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Switch>
            <Route exact path="/" component={IndexBody} />
            <Route exact path="/internship" component={Internship} />
            <Route exact path="/courses" component={Courses} />
            <Route exact path="/java" component={Java} />
            <Route exact path="/Html" component={Html} />
            <Route exact path="/css" component={Css} />
            <Route exact path="/python" component={Python} />
            <Route exact path="/javascript" component={Javascript} />
          </Switch>
        <Footer />
    </Router>
    </div>
  );
}

export default App;
