var playlist = { celinedion: 'my heart will go on' }

function updatePlaylist(playlist, artist, songTitle) {
  return Object.assign( {}, playlist, { artist: songTitle })
}

updatePlaylist(pl)