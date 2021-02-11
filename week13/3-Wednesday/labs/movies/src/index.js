
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom'
import App from "./App";
const App2 = () => <h1>Home Page</h1>
const About = () => <h1>About us</h1>
const ContactUs = () => <h1>Contact Us</h1>
const Blog = () => <h1>Our Blog</h1>
const Comment = () => <h1>Comments</h1>

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={App2} />
          <Route path="/about" component={About} />
          <Route path="/contactUs" component={ContactUs} />
          <Route path="/blog" component={Blog} />
          <Route path="/comment" component={Comment} />
        </Switch>
      </BaseLayout>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
