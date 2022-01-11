
const DisplayMusic = (props) => {
    return(
        <table>
            <thead>
            <tr>
                <th>Title</th>
                <th>Album</th>
                <th>Artist</th>
                <th>Genre</th>
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
                </tr>
                );
                })}
            </tbody>
        </table>
    );
}

export default DisplayMusic;