import './App.css';
import HomePage from './Pages/HomePage';
import ProjectPage from './Pages/ProjectPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutPage from './Pages/AboutPage';
import BlogPage from './Pages/BlogPage';
import ContactPage from './Pages/ContactPage';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
      <div className="App-header">
        
        <Router>
          {/* <Navbar/> */}
          <Switch>
            <Route exact path="/">
              <HomePage/>
            </Route>
            <Route path="/home">
              <HomePage></HomePage>
            </Route>
            <Route path="/project">
              <ProjectPage />
            </Route>
            <Route path="/about">
              <AboutPage/>
            </Route>
            <Route path="/blog">
              <BlogPage/>
            </Route>
            <Route path="/contact">
              <ContactPage/>
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
