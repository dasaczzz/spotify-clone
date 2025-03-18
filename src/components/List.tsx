import React, { useState } from "react";
import { Playlist } from "../playlist";
import SongComponent from "./Song";

interface Props {
  playlist: Playlist
}

const List: React.FC<Props> = ({playlist}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="playlist-card" onClick={toggleModal}>
        <div className="playlist-info">
          <h1 className="playlist-title">{playlist.getTitle()}</h1>
          <p className="playlist-description">{playlist.getDescription()}</p>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{playlist.getTitle()}</h2>
            {playlist.getSongs().map(item => { return(
              <SongComponent song={item}/>
            )
            })}
            <button className="close-button" onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </>
  )
}

export default List