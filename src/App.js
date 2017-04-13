import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import searchSpotify from './utils/searchSpotify.js';
import SongItem from './components/SongItem/SongItem.js';
import SongList from './components/SongList/SongList.js';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialMessage: 'greeting',
      song: '',
      tracks: {},
      songPosition: 0,
    };
  }

  fetchSongs = () => {
    searchSpotify(this.state.song)
      .then(({ tracks }) => this.setState({ tracks }));
  };

  render() {
    const { tracks, songPosition } = this.state;
    return (
      <div className="Application">
        <div className="searchBar">
          <SearchBar updateText={(song) => this.setState({ song })} fetchSongs={this.fetchSongs} />
        </div>
        <div className="content">
          {tracks.items && <SongItem songData={tracks.items[songPosition]} />}
        </div>
        {tracks.items && <SongList listOfSongs={tracks.items} selectSong={(songPosition) => this.setState({ songPosition })} />}
      </div>
    );
  }
}
