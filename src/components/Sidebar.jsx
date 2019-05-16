import React from 'react';
import {Link} from 'react-router-dom';

function Sidebar() {
  return(
    <div className="sidebar">
      <div className="sidebar-inner">

        <ul className="sidebar-menu">
          <p className="sidebar-title">Categories</p>
          <li><Link to="/newsfeed" className="nav-link">Home</Link></li>
          <li><Link to="/newsfeed/business" className="nav-link">Business</Link></li>
          <li><Link to="/newsfeed/entertainment" className="nav-link">Entertainment</Link></li>
          <li><Link to="/newsfeed/health" className="nav-link">Health</Link></li>
          <li><Link to="/newsfeed/science" className="nav-link">Science</Link></li>
          <li><Link to="/newsfeed/sports" className="nav-link">Sports</Link></li>
          <li><Link to="/newsfeed/technology" className="nav-link">Technology</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
