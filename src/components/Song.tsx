import React from "react";
import { Song } from "../playlist";
import '../styles/index.css'

interface Props {
  song: Song
}

const SongComponent: React.FC<Props> = ({song}) => {
  return (
    <div className="song-item">
      <div className="song-info">
        <p className="song-title">{song.getName()}</p>
        <p className="song-artist">{song.getArtist()}</p>
      </div>
      <p className="song-duration">{song.getGenre()}</p>
    </div>
  )
}

export default SongComponent