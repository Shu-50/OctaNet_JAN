
let currentSong = new Audio();
let songs = [];
let currFolder = '';
let currentIndex = 0;


function toggleMenu() {
    const leftblock = document.getElementById('leftblock');
    if (leftblock.style.display === 'none' || leftblock.style.display === '') {
        leftblock.style.display = 'block';
    } else {
        leftblock.style.display = 'none';
    }
}


function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;

    //or
    // return `${minutes}:${remainingSeconds}`;
}

async function getSongs(folder) {
    currFolder = folder;
    let response = await fetch(`/${folder}/`);
    let text = await response.text();
    let div = document.createElement("div");
    div.innerHTML = text;
    let as = div.getElementsByTagName("a");
    songs = [];

    for (let link of as) {
        if (link.href.endsWith(".mp3")) {
            songs.push(link.href.split(`/${folder}/`)[1]);
        }
    }
    // Show all the songs in the playlist
    let songul = document.querySelector(".explore").getElementsByTagName("ul")[0]
    songul.innerHTML = "";
    for (const song of songs) {
        songul.innerHTML = songul.innerHTML + `<li>
                            <div class="info">
                                <div> ${song.replaceAll("%20", " ")}</div>
                                
                            </div>
                             </li>`;

    }

    //attach event listener to each song
    Array.from(document.querySelector(".explore").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", () => {
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())

        })
    })

    return songs
}

function playMusic(track, pause = false) {
    currentSong.src = `/${currFolder}/` + track;
    if (!pause) {
        currentSong.play();
        document.getElementById("play-pause").src = "SVGs/pause.svg";
    }
    document.querySelector(".songinfo").innerText = decodeURI(track);
    document.querySelector(".songtime").innerText = "00:00 / 00:00";
}

function playPause() {
    if (currentSong.paused) {
        currentSong.play();
        document.getElementById("play-pause").src = "SVGs/pause.svg";
    } else {
        currentSong.pause();
        document.getElementById("play-pause").src = "SVGs/play.svg";
    }
}

function nextTrack() {
    currentIndex = (currentIndex + 1) % songs.length;
    playMusic(songs[currentIndex]);
}

function previousTrack() {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    playMusic(songs[currentIndex]);
}

async function main() {
    // Get the list of all the songs
    songs = await getSongs("Songs");
    playMusic(songs[0], true);

    // Attach event listeners to play, next, and previous buttons
    document.getElementById("play-pause").addEventListener("click", playPause);
    document.getElementById("next").addEventListener("click", nextTrack);
    document.getElementById("previous").addEventListener("click", previousTrack);

    // Update time and progress
    currentSong.addEventListener("timeupdate", () => {
        document.querySelector(".songtime").innerText = `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`;
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
    });

    // Click on the progress bar to seek
    document.querySelector(".load").addEventListener("click", (e) => {
        let percent = e.offsetX / e.target.clientWidth;
        currentSong.currentTime = currentSong.duration * percent;
    });
}

main();
