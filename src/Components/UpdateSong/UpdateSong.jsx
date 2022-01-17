import React, {useState} from "react";

const UpdateSong = (props) => {

    const [title, setTitle] = useState(props.song.title);
    const [album, setAlbum] = useState(props.song.album);
    const [artist, setArtist] = useState(props.song.artist);
    const [genre, setGenre] = useState(props.song.genre);
    const [releaseDate, setReleaseDate] = useState(props.song.release_date);

    function handleSubmit(formEvent){
        formEvent.preventDefault();
        let updatedSong = {
            title: title,
            album: album,
            artist: artist,
            genre: genre,
            release_date: releaseDate,
        }
        props.updateSong(props.song.id ,updatedSong);
    }

    return (
        <>
       
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type='text' onChange={(event) => setTitle(event.target.value)} defaultValue={title}/>
            <label>Album</label>
            <input type='text' onChange={(event) => setAlbum(event.target.value)} defaultValue={album}/>
            <label>Artist</label>
            <input type='text' onChange={(event) => setArtist(event.target.value)} defaultValue={artist}/>
            <label>Genre</label>
            <input type='text' onChange={(event) => setGenre(event.target.value)} defaultValue={genre}/>
            <label>Release Date</label>
            <input type='date' onChange={(event) => setReleaseDate(event.target.value)} defaultValue={releaseDate}/>
            <button type='submit'>Edit</button>
        </form>
        </>
    );
}

export default UpdateSong;