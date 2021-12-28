import React, { useState } from 'react';
import FlatList from 'flatlist-react';
import { debounce } from 'lodash';
import RenderItem from '../../Components/RenderItem';

import api from '../../services/api';

import { Container, TiTle} from './styles.js';


export default function List({}) {
  const [artist, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [newReleases, setNewReleases] = useState([]);

  const [load, setLoad] = useState(true);


  async function loadReleases() {
    const response = await api.get(
      '/browse/new-releases?country=BR&limit=5'
    );

    setNewReleases(response.data.albums.items);

    setLoad(false);
}

  

  useEffect(() => {
    loadReleases();
  }, []);
  

  return (
    <Container >
      {load && <TiTle>Carregando...</TiTle>}
      {artist.length !== 0 && (
        <>
          <TiTle>Artistas</TiTle>
          <FlatList
            list={artist}
            renderItem={<RenderItem aitemType="artists"
            itemData={artist}/>}
            renderWhenEmpty={() => <div>List is empty!</div>}
          />
        </>
      )}
      {albums.length !== 0 && (
        <>
          <TiTle>Albums</TiTle>
          <FlatList
            list={albums}
            renderItem={<RenderItem itemType="album"
            itemData={albums}/>}
            renderWhenEmpty={() => <div>List is empty!</div>}
          />
        </>
      )}
      {playlists.length !== 0 && (
        <>
          <TiTle>Playlists</TiTle>
          <FlatList
            list={playlists}
            renderItem={<RenderItem itemType="playlist"
            itemData={playlists}/>}
            renderWhenEmpty={() => <div>List is empty!</div>}
          />
        </>
      )}
      {newReleases.length !== 0 && (
        <>
          <TiTle>Playlists</TiTle>
          <FlatList
            list={newReleases}
            renderItem={<RenderItem itemType="newReleases"
            itemData={newReleases}/>}
            renderWhenEmpty={() => <div>List is empty!</div>}
          />
        </>
      )}
    </Container>
  );
}