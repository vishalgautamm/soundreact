import React, { PropTypes } from 'react';
import './SearchBar.css';

const SearchBar = (props) => (
  <div className="SearchBar">
    <input className="input" onChange={(evt) => props.updateText(evt.target.value)} onKeyPress={props.handleKeyPress} placeholder="SEARCH" />
    <button className="button" onClick={props.fetchSongs} > Get Songs </button>
  </div>
);

SearchBar.propTypes = {
  updateText: PropTypes.func,
  fetchSongs: PropTypes.func,
};

export default SearchBar;
