var playlist = { celinedion: 'my heart will go on' }

function updatePlaylist(playlist, artist, songTitle) {
  return Object.assign( {}, playlist, { artist: songTitle })
}

updatePlaylist( {}, playlist, 'nhuwuynh', 'thao thuc minh oi')

console.log(playlist)
