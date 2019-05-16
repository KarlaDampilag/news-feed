import React, {Component} from 'react';

class Article extends Component {
  render() {
    return (
      <div>
      {this.props.articles.map((article, key) => (
        <div key={key} className="article">
          <a href={article.url} target="_blank" rel="noopener noreferrer nofollow">
            <h2 className="article-title">{article.title}</h2>
          </a>
          {article.urlToImage === null ? <p>No image provided.</p> : <img className="article-img" src={article.urlToImage} alt="article featured image" />}
          <p className="article-source">Source: {article.source.name}</p>
          <p className="article-description">{article.description}</p>
          <p className="articleURL">
            <a href={article.url} target="_blank" rel="noopener noreferrer nofollow">
              {article.source.name === "Youtube.com" ? <span>Watch video...</span> : <span>Read full article...</span>}
            </a>
          </p>
        </div>
      ))}
      </div>
    );
  }
}

export default Article;
