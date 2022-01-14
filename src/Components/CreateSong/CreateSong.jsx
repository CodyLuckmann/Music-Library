import React, {useState} from "react";

const SongForm = (props) => {

    const [title, setTitle] = useState('');
    const [album, setAlbum] = useState('');
    const [artist, setArtist] = useState('');
    const [genre, setGenre] = useState('');
    const [releaseDate, setReleaseDate] = useState('');

    function handleSubmit(formEvent){
        formEvent.preventDefault();
        let newSong = {
            title: title,
            album: album,
            artist: artist,
            genre: genre,
            release_date: releaseDate,

        }
        props.createSong(newSong);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type='text' onChange={(event) => setTitle(event.target.value)} value={title}/>
            <label>Album</label>
            <input type='text' onChange={(event) => setAlbum(event.target.value)} value={album}/>
            <label>Artist</label>
            <input type='text' onChange={(event) => setArtist(event.target.value)} value={artist}/>
            <label>Genre</label>
            <input type='text' onChange={(event) => setGenre(event.target.value)} value={genre}/>
            <label>Release Date</label>
            <input type='date' onChange={(event) => setReleaseDate(event.target.value)} value={releaseDate}/>
            <button type='submit'>Create Song</button>
        </form>
    );
}

export default SongForm;