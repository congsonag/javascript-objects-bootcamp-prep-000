var playlist = { celinedion: 'my heart will go on', nhwuynh: 'chua co' }

function updatePlaylist(playlist, artist, songTitle) {
  return Object.assign( {}, playlist, { artist: songTitle })
}
