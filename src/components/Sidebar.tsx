import React, { useState, useEffect } from "react";
import { Playlist, Song, playlistData } from "../playlist";
import "../styles/sidebar.css";

const SidebarRight: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlaylist, setSelectedPlaylist] = useState('');
  const [actualPlaylist, setActualPlaylist] = useState<Playlist | undefined>(undefined)

  const [counterSongs, setCounterSongs] = useState(1)

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("sidebar-open");
      const finded = searchByTitle(selectedPlaylist)?.clon()
      setActualPlaylist(finded)

    } else {
      document.body.classList.remove("sidebar-open");
    }
  }, [isOpen, selectedPlaylist]);

  const handlePlaylistChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPlaylist(event.target.value);
    const finded = searchByTitle(selectedPlaylist)?.clon()
    setActualPlaylist(finded)
  };

  const searchByTitle = (title: string): Playlist | undefined => {
    return playlistData.find(item => item.getTitle() === title)
  }

  const handleAddToQueue = () => {
    const songToAdd = new Song()
    songToAdd.setName(`The song ${counterSongs}`)
    setCounterSongs(counterSongs + 1)
    actualPlaylist?.getSongs().push(songToAdd)
  }

  return (
    <>
      <div className={`sidebar-right ${isOpen ? "open" : ""}`}>
        <button className="toggle-button" onClick={toggleSidebar}>
          {isOpen ? "Close player" : "Open player"}
        </button>
        <div className="sidebar-content">
          <h2>Select a playlist</h2>
          <select id="songList" value={selectedPlaylist} onChange={handlePlaylistChange}>
            <option value="">Select a option</option>
            {playlistData.map(item => {
              return(
                <option value={item.getTitle()}>{item.getTitle()}</option>
              )
            })}
          </select>
          {actualPlaylist && (
            <div>
              <h1>{actualPlaylist.getTitle()}</h1>
              <ol>
                {actualPlaylist.getSongs().map(item => {
                  return (
                    <li>{item.getName()}</li>
                  )
                })}
              </ol>
              <button onClick={handleAddToQueue}>Add song to queue</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SidebarRight;