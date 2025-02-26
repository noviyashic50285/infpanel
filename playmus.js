"use strict";
const musicTitleEl = document.getElementById("music_title");
const playerProgressEl = document.getElementById("player_progress");
const progressEl = document.getElementById("progress");
const currentTimeEl = document.getElementById("current_time");
const durationEl = document.getElementById("duration");
const prevBtnEl = document.getElementById("prev");
const playvBtnEl = document.getElementById("play");
const nextvBtnEl = document.getElementById("next");
const songs = [
  {
    path: "musicv/5stavmeste.mp3",
    displayName: "Мы вместе",
  },
  {
    path: "musicv/ultrafz6stop.mp3",
    displayName: "Стоп",
  },
  {
    path: "musicv/vseletala.mp3",
    displayName: "Всё летала",
  },
  {
    path: "musicv/agent007.mp3",
    displayName: "Агент 007",
  },
  {
    path: "musicv/tolkotam.mp3",
    displayName: "Только там",
  },
  {
    path: "musicv/dosvidaniya.mp3",
    displayName: "Досвидания",
  },
  {
    path: "musicv/hochesh.mp3",
    displayName: "Хочешь",
  },
  {
    path: "musicv/viagralml.mp3",
    displayName: "L.M.L",
  },
  {
    path: "musicv/ivankukla.mp3",
    displayName: "Кукла",
  },

  {
    path: "musicn/verevki.mp3",
    displayName: "Верёвки",
  },
  {
    path: "musicn/magnolii.mp3",
    displayName: "В краю магнолий",
  },
  {
    path: "musicn/videlinoch.mp3",
    displayName: "Видели ночь",
  },
  {
    path: "musicn/marihuana.mp3",
    displayName: "Марихуана",
  },
  {
    path: "musicn/travaudoma.mp3",
    displayName: "Трава у дома",
  },
  {
    path: "musicn/beregzensh.mp3",
    displayName: "Берегите женщин",
  },
  {
    path: "musicn/kakbivaet.mp3",
    displayName: "Вот как бывает",
  },
  {
    path: "musicn/yavspominau.mp3",
    displayName: "Я вспоминаю",
  },
  {
    path: "musicn/pechalitsa.mp3",
    displayName: "Не надо печалиться",
  },
];
const music = new Audio();
let musicIndex = 0;
let musicIndexl = 0;
let isPlaying = false;
//================== Play Song  True or False====================
function togglePlay() {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
}
//================== Play Music====================
function playMusic() {
  isPlaying = true;
  playvBtnEl.classList.replace("fa-play", "fa-pause");
  playvBtnEl.setAttribute("title", "pause");
  music.play();
  }
//================== Pause Music====================
function pauseMusic() {
  isPlaying = false;
  playvBtnEl.classList.replace("fa-pause", "fa-play");
  playvBtnEl.setAttribute("pause", "title");
  music.pause();
}
//================== Load Songs ====================
function loadMusic(songs) {
  music.src = songs.path;
  musicTitleEl.textContent = songs.displayName;
}
//================== Change Music ====================
function changeMusic(direction) {
  musicIndex = musicIndex + direction + (songs.length % songs.length);
  loadMusic(songs[musicIndex]);
ubrcvet();
let audiolist = document.querySelectorAll( ".audiolist" );
audiolist[musicIndex].style.color = "white";
audiolist[musicIndex].style.background = "green";
playMusic();
}

function ubrcvet() {
let audiolist = document.querySelectorAll(".audiolist");
for( let i = 0; i < audiolist.length; i++){ 
    audiolist[i].style.color = "black";
    audiolist[i].style.background = "white";
}  //  musiclist1.style.color = "red";
}

//================== Set Progress ====================
function setProgressBar(e) {
  const width = playerProgressEl.clientWidth;
  const xValue = e.offsetX;
  music.currentTime = (xValue / width) * music.duration;
}
//================== Set Progress ====================
function updateProgressBar() {
  const { duration, currentTime } = music;
  const ProgressPercent = (currentTime / duration) * 100;
  progressEl.style.width = `${ProgressPercent}%`;
  const formattime = (timeRanges) =>
    String(Math.floor(timeRanges)).padStart(2, "0");
  durationEl.textContent = `${formattime(duration / 60)} : ${formattime(
    duration % 60,
  )}`;
  currentTimeEl.textContent = `${formattime(currentTime / 60)} : ${formattime(
    currentTime % 60,
  )}`;
}
//================= Btn Events========================
const btnEvents = () => {
  playvBtnEl.addEventListener("click", togglePlay);
  nextvBtnEl.addEventListener("click", () => changeMusic(1));
  prevBtnEl.addEventListener("click", () => changeMusic(-1));
  //========= Progressbar===========================
  music.addEventListener("ended", () => changeMusic(1));
  music.addEventListener("timeupdate", updateProgressBar);
  playerProgressEl.addEventListener("click", setProgressBar);
};
//================= Btn Events========================
document.addEventListener("DOMContentLoaded", btnEvents);
//============ Calling Load Music
loadMusic(songs[musicIndex]);

