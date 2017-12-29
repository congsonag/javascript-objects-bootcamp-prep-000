var playlist = { celinedion: 'my heart will go on', nhwuynh: 'chua co' }

function updatePlaylist(playlist, artist, songTitle) {
  return Object.assign( {}, playlist, { artist: songTitle })
}

playlist= updatePlaylist( {}, playlist, 'nhuwuynh', 'thao thuc minh oi')

console.log(playlist)
