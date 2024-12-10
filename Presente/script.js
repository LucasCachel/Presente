document.getElementById('openMessage').addEventListener('click', function() {
  document.getElementById('pokemonArea').style.display = 'block';
  this.style.display = 'none';
  playMusic();
});

const bgMusic = document.getElementById('bgMusic');
const playMusicButton = document.getElementById('playMusic');

function playMusic() {
  bgMusic.play().catch(error => {
    console.error("A reprodução automática pode estar bloqueada pelo navegador. Clique no botão para iniciar a música.", error);
  });
}

playMusicButton.addEventListener('click', function() {
  if (bgMusic.paused) {
    bgMusic.play();
    this.textContent = '🔊 Parar Música';
  } else {
    bgMusic.pause();
    this.textContent = '🔈 Tocar Música';
  }
});
