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