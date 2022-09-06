const now_playing = document.querySelector('.now-playing');
const track_art = document.querySelector('.track-art');
const track_name = document.querySelector('.track-name');
const track_artist = document.querySelector('.track-artist');

const playpause_btn = document.querySelector('.playpause-track');
const next_btn = document.querySelector('.next-track');
const prev_btn = document.querySelector('.prev-track');

const seek_slider = document.querySelector('.seek_slider');
const volume_slider = document.querySelector('.volume_slider');
const curr_time = document.querySelector('.current-time');
const total_duration = document.querySelector('.total-duration');
//let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer

const music_list = [
    {
        artist: "Harry Styles",
        name: "Watermelon Sugar",
        music: "/music/Watermelon_Sugar.mp3",
        img: "/images/Watermelon-sugar.jpg"
      },
      {
        artist: "Hozier",
        name: "Take Me To Church",
        music: "/music/Take_Me_To_Church.mp3",
        img: "/images/Take-me-to-church.jpg"
      },
      {
        artist: "Alec Benjamin",
        name: "Devil Doesn't Bargain",
        music: "/music/Devil_Doesn't_Bargain.mp3",
        img: "/images/Devil-Doesn't-Bargain.jpg"
      },
      {
        artist: "Troye Sivan",
        name: "Angel Baby",
        music: "/music/Angel_Baby.mp3",
        img: "/images/Angel-Baby.jpg"
      },
      {
        artist: "Elley Duhe",
        name: "Middle of the Night",
        music: "/music/Middle_of_the_Night.mp3",
        img: "/images/Middle-of-the-Night.jpg"
      },
      {
        artist: "SAINT JHN",
        name: "The best part of life",
        music: "/music/THE_BEST_PART_OF_LIFE.mp3",
        img: "/images/The-best-part-of-life.jpg"
      },
      {
        artist: "Forrest Frank",
        name: "Slow Down",
        music: "/music/slow_down.mp3",
        img: "/images/Slow-Down.jpg"
      },
      {
        artist: "RUTH B",
        name: "Dandelions",
        music: "/music/Dandelions.mp3",
        img: "/images/Dandelions.jpg"
      },
      {
        artist: "Chris Brown",
        name: "Under the influence",
        music: "/music/Under_The_Influence.mp3",
        img: "/images/Under-the-influence.jpg"
      },
      {
        artist: "JP Cooper",
        name: "In these arms",
        music: "/music/In_These_Arms.mp3",
        img: "/images/In-these-arms.jpg"
      },
];

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
}

function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}

function randomTrack(){
    isRandom ? pauseRandom() : playRandom();
}
function playRandom(){
    isRandom = true;
    randomIcon.classList.add('randomActive');
}
function pauseRandom(){
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
function repeatTrack(){
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack(){
    curr_track.play();
    isPlaying = true;
    track_art.classList.add('rotate');
    wave.classList.add('loader');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove('rotate');
    wave.classList.remove('loader');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
function nextTrack(){
    if(track_index < music_list.length - 1 && isRandom === false){
        track_index += 1;
    }else if(track_index < music_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}
function prevTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}

function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume(){
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationMinutes;
    }
}