import React, { PropTypes } from 'react';
import './SongItem.css';
import formatSeconds from '../../utils/formatSeconds';

const SongItem = (props) => {
  const { songData } = props;
  const album = songData.album;
  const albumName = album.name;
  const albumImage = album.images[1];

  const duration = Math.floor(songData.duration_ms / 1000);
  const mins = formatSeconds(duration);
  return (
    <div className="SongItem">
      <div className="SongItem-album">
        <img className="SongItem-image" role="presentation" src={albumImage.url} />
      </div>
      <div className="songAndDescription">
        <span className="songDescription"> {songData.name} </span>
        <span className="albumName"> {albumName} </span>
        <span className="songDescriptionMin"> {mins} </span>
        <audio controls duration autoPlay src={songData.preview_url} />
      </div>
    </div>
  );
};

SongItem.propTypes = {
  songData: PropTypes.object,
};

export default SongItem;
