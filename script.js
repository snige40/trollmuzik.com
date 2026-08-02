function showMusic() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("music").style.display = "block";
}
const tracks = [
    "ncs1.mp3",
    "ncs2.mp3",
    "ncs3.mp3",
    "ncs4.mp3",
    "ncs5.mp3",
    "ncs6.mp3",
    "ncs7.mp3",
    "ncs8.mp3"
];

const player = document.getElementById("player");
const playBtn = document.getElementById("playPauseBtn");

let started = false;

function playRandom() {
    const random = Math.floor(Math.random() * tracks.length);
    player.src = tracks[random];
    player.play();
}

playBtn.onclick = () => {
    if (!started) {
        playRandom();
        started = true;
        playBtn.textContent = "⏸";
        return;
    }

    if (player.paused) {
        player.play();
        playBtn.textContent = "⏸";
    } else {
        player.pause();
        playBtn.textContent = "▶";
    }
};

player.onended = () => {
    playRandom();
};
document.getElementById("nextBtn").onclick = playRandom;
document.getElementById("prevBtn").onclick = playRandom;
document.getElementById("nextBtn").onclick = () => {
    playRandom();
};

document.getElementById("prevBtn").onclick = () => {
    playRandom();
};