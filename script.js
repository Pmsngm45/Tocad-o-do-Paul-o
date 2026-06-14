function trocarMusica() {
  const audio = document.getElementById("audio");
  const select = document.getElementById("musicSelect");

  audio.src = select.value;
  audio.play();
}
