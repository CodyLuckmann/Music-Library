import { useState } from "react";
import UpdateSong from "../UpdateSong/UpdateSong";
import axios from "axios";


const DisplayMusic = (props) => {
    const [edit,setEdit] = useState(false)
    const [song,setSong] = useState('')

    const showEdit =(songToUpdate)=>{
        setSong(songToUpdate)
        setEdit(true)
    }

    return(
        <>
       
        <table className="table">
            <thead>
            <tr>
                <th>Title</th>
                <th>Album</th>
                <th>Artist</th>
                <th>Genre</th>
                <th>Release Date</th>
            </tr>
            </thead>
            <tbody>
            {props.songs.map((song) =>{
                return(
                <tr>
                    <td>{song.title}</td>
                    <td>{song.album}</td>
                    <td>{song.artist}</td>
                    <td>{song.genre}</td>
                    <td>{song.release_date}</td>
                    <button onClick={()=>showEdit(song)}>Edit</button>
                    <button onClick={() =>props.deleteSong(song.id)}>Delete</button>
                </tr>
                );
                })}
            </tbody>
        </table>
        
        {/* if "edit" is true, render UpdateSong */}
        {edit && <UpdateSong updateSong={props.updateSong} song = {song}/>}
        </>
    );
}

export default DisplayMusic;