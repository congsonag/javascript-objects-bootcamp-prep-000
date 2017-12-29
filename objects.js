var playlist = { celinedion: 'my heart will go on' }

function updatePlaylist(playlist, artist, songTitle) {
  Object.assign( {}, playlist, { [artist]: songTitle })
}