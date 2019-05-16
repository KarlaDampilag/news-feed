import React, {Component} from 'react';
import Article from './Article';

export default class Home extends Component {
  state = {
    articles: []
  }
  componentDidMount() {
    fetch("https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=8f135b713f1a4487b7bbb9de394a1308")
      .then(response => response.json())
      .then((response) => {
        this.setState({articles: response.articles});
      });
  }
  render() {
    return (
      <div className="feed">
        <h1>Welcome to News Feed!</h1>
        <div className="home-div">
          <p>News Feed shows the top ten headlines of the day from the News API which indexes articles from over 30,000 worldwide sources.</p>
          <p>You're currently browsing the <strong>GENERAL category</strong>. You can also choose a different category from the menu.</p>
        </div>
        <Article articles={this.state.articles} />
      </div>
    );
  }
}
