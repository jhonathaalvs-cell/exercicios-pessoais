function trocarVideo(videoId) {
    const player = document.getElementById("animePlayer");

    player.src = `https://www.youtube.com/embed/${videoId}`;
}