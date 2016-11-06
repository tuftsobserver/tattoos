function aud_play_pause(id) {
  var audio = document.getElementById('audio' + id);
  var player = document.getElementById('player' + id);
  if (audio.paused) {
  	// stop all other players
  	for (var i = 1; i <= 12; ++i) {
  		if (i == id) {
  			continue;
  		}
  		document.getElementById('audio' + i).pause();
  		document.getElementById('player' + i).innerHTML = '';
  	}
    audio.play();
    player.innerHTML = '<img src="img/audiobars.svg"/>';
  } else {
    audio.pause();
    player.innerHTML = '';
  }
}