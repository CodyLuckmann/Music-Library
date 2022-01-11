import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';

function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs()
  }, []);

  async function getAllSongs(){
    let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music');
    setSongs(response.data);
  } 
  return(
    <div>
      <DisplayMusic songs={songs}/>
    </div>
  )
}
  
export default App;
