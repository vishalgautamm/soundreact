import React, { Component } from 'react';
import axios from 'axios';
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

  componentDidMount() {
    axios.get('https://api.spotify.com/v1/search?q=maitre&type=track')
      .then(response => this.setState({ tracks: response.data.tracks }))
      .catch(error => console.log('Error when fetching and parsing data', error));
  }

  fetchSongs = () => {
    searchSpotify(this.state.song)
      .then(({ tracks }) => this.setState({ tracks }));
  };

  handleKeyPress = (e) =>{
    var key = e.keyCode || e.which;
    if (key === 13){
      this.fetchSongs();
    }
  }

  render() {
    const { tracks, songPosition } = this.state;
    return (
      <div className="Application">
        <div className="searchBar">
          <SearchBar updateText={(song) => this.setState({ song })} fetchSongs={this.fetchSongs} handleKeyPress={this.handleKeyPress} />
        </div>
        <div className="content">
          {tracks.items && <SongItem songData={tracks.items[songPosition]} />}
        </div>
        {tracks.items && <SongList listOfSongs={tracks.items} selectSong={(songPosition) => this.setState({ songPosition })} />}
      </div>
    );
  }
}
