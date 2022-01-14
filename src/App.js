import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import SearchBar from './Components/SearchBar/SearchBar';
import NavBar from './Components/NavBar/NavBar';

function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs()
  }, []);
  //TODO: Write a filterSongs function and pass it down to the SearchBar component
  // HINT: look at Most Wanted filtering!
  // use searchTerm (from the SearchBar) to filter songs
  function filterSongs(song){
    let foundSongs = songs.filter(function(searchTerm){
      if(searchTerm ==''){
        return foundSongs
      }
      else if (song.title.toLowerCase().includes(searchTerm.toLowerCase())){
        return true
      }
    })
    return foundSongs
  }

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/music/');
    console.log(response)
    setSongs(response.data);
  } 
  return(
    <div className='background'>
      <div>
        <NavBar />
      </div>
      <div className='border-box' className='table-font'>
        <SearchBar filterSongs={filterSongs}/>
        <DisplayMusic songs={songs}/>
      </div>
      
    </div>
  )
}
  
export default App;
