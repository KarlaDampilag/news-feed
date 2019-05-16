import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Home from './components/Home';
import Business from './components/Business';
import Entertainment from './components/Entertainment';
import Health from './components/Health';
import Science from './components/Science';
import Sports from './components/Sports';
import Technology from './components/Technology';
import Sidebar from './components/Sidebar';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=8f135b713f1a4487b7bbb9de394a1308")
      .then(response => response.json())
      .then((response) => {
        this.setState({articles: response.articles});
      });
  }
/*
TODO

- make home page to display the top headline in US
- when a category is clicked, use route to render
- on mobile, make sidebar into hamburger and make the
  feed flow vertically not horizontally
- uninstall all dependencies you're not using
- apply scss
*/
  render() {
    return (
      <div className="container">
        <Sidebar />
        <Route exact path="/newsfeed" component={Home} />
        <Route path="/newsfeed/business" component={Business} />
        <Route path="/newsfeed/entertainment" component={Entertainment} />
        <Route path="/newsfeed/health" component={Health} />
        <Route path="/newsfeed/science" component={Science} />
        <Route path="/newsfeed/sports" component={Sports} />
        <Route path="/newsfeed/technology" component={Technology} />
      </div>
    );
  }
}
export default App;
