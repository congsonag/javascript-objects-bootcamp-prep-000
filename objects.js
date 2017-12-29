var playlist = { celinedion: 'my heart will go on', nhwuynh: 'chua co' }

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign( {}, playlist, { [artist]: songTitle })
}
