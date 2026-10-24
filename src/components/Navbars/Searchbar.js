import React from 'react';
import "./Searchbar.css"

const Searchbar = ({ search , onQueryChange}) => {
  return (
      <div className="search-area">
        <div className="tooltip">
            <span className="material-symbols-outlined hover">search</span>
            <span className="tooltip-text">Search</span>
        </div>
        <input type="text"
        placeholder="Search"
        value={search}
        onChange={(event) => onQueryChange(event.target.value)}/>
      </div>
  )
}

export default Searchbar
