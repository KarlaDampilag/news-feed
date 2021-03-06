import React, {Component} from 'react';
import Article from './Article';

export default class Science extends Component {
  state = {
    articles: []
  }
  componentDidMount() {
    fetch("https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=8f135b713f1a4487b7bbb9de394a1308")
      .then(response => response.json())
      .then((response) => {
        this.setState({articles: response.articles});
      });
  }

  render() {
    return (
      <div className="feed">
        <h1>Science News</h1>
        <Article articles={this.state.articles} />
      </div>
    );
  }
}
