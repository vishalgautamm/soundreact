import React, { PropTypes } from 'react';
import './SongList.css';

const eachSong = (props) => {
  const { album, name } = props;
  const albumImage = album.images[0];
  return (
    <div className="SongList-eachSong">
      <img role="presentation" src={albumImage.url} className="SongList-image" />
      <span className="SongList-songDescription">{name}</span>
    </div>
  );
};

eachSong.propTypes = {
  album: PropTypes.object,
  name: PropTypes.string,
};

const SongList = (props) => (
  <div className="SongList-root">
    {props.listOfSongs.map((songData, index) => <div
      key={songData.uri}
      onClick={() => props.selectSong(index)}
    >
      {eachSong(songData)}
    </div>)}
  </div>
);

export default SongList;

SongList.propTypes = {
  listOfSongs: PropTypes.array,
  selectSong: PropTypes.function,
};
