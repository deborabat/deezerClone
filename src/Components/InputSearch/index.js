import React, {useState} from 'react'
import { FaSistrix } from "react-icons/fa";
import {Input, ErrorMsg} from './styles.js';

export default function InputSearch(props) {
  
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  

  {search &&
    async function load(value) {
      const response = await api.get(
        `/search?q=${value}&type=album%2Cartist%2Cplaylist%2Ctrack&market=br`
      );
  
      setArtists(response.data.artists.items);
      setAlbums(response.data.albums.items);
      setPlaylists(response.data.playlists.items);
    }
    const delayedSearch = debounce((value) => {
      load(value);
    }, 1000);
  }


  return (
    <div>
      <FaSistrix color ={'black'} size={'15px'}  />
      <Input 
        type="text" 
        onChange={(e) => delayedSearch(e.target.value)}
        placeholder="Busque artistas, músicas ou podcasts"
      />
  
    </div>
  );
}
