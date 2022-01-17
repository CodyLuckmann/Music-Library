import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import SearchBar from './Components/SearchBar/SearchBar';
import NavBar from './Components/NavBar/NavBar';
import SongForm from './Components/CreateSong/CreateSong';
import UpdateForm from './Components/UpdateSong/UpdateSong';

function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs()
  }, []);
  //TODO: Write a filterSongs function and pass it down to the SearchBar component
  // HINT: look at Most Wanted filtering!
  // use searchTerm (from the SearchBar) to filter songs
  function filterSongs(searchTerm){
    let foundSongs = songs.filter(function(element){
      if(searchTerm ==''){
        return songs
      }
      else if (element.title.toLowerCase().includes(searchTerm.toLowerCase()) || element.artist.toLowerCase().includes(searchTerm.toLowerCase()) || element.album.toLowerCase().includes(searchTerm.toLowerCase()) || element.genre.toLowerCase().includes(searchTerm.toLowerCase()) || element.release_date.toLowerCase().includes(searchTerm.toLowerCase())){
        return true
      }
      
    })
    setSongs(foundSongs)
  }

  async function createSong(newSong){

    let response = await axios.post('http://127.0.0.1:8000/music/', newSong);
    if(response.status === 201){
      await getAllSongs();
    }
  }

  async function updateSong(pk,updatedSong){
  
    let response = await axios.put(`http://127.0.0.1:8000/music/${pk}/`, updatedSong)
    if(response.status ===200){
      getAllSongs();
    }
  }

  async function deleteSong(pk){
  
    let response = await axios.delete(`http://127.0.0.1:8000/music/${pk}/`)
    if(response.status ===204){
      getAllSongs();
    }
  }

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/music/');
    console.log(response)
    setSongs(response.data);
  } 
  return(
    <div className='style' >
      <div>
    
    
        <NavBar />
      </div>
      <h1 className='center'>Music Library</h1>
      <div className='border-box' className='table-font'>
        <SearchBar filterSongs={filterSongs}/>
        <DisplayMusic songs={songs} getAllSong={getAllSongs} updateSong={updateSong} deleteSong={deleteSong} />
        <h3 className='center'>Add Song</h3>
        <SongForm createSong={createSong}/>
      </div>
      
    </div>
  )
}
  
export default App;
