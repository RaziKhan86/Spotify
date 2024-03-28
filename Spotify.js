let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}
if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}
progress.onchange = function() {
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}
let progress2 = document.getElementById("progress2");
let song2 = document.getElementById("song2");
let ctrlIcon2 = document.getElementById("ctrlIcon2");
song2.onloadedmetadata = function() {
    progress2.max = song2.duration;
    progress2.value = song2.currentTime;
}

function playPause2() {
    if (ctrlIcon2.classList.contains("fa-pause")) {
        song2.pause();
        ctrlIcon2.classList.remove("fa-pause");
        ctrlIcon2.classList.add("fa-play");
    } else {
        song2.play();
        ctrlIcon2.classList.add("fa-pause");
        ctrlIcon2.classList.remove("fa-play");
    }
}
if (song2.play()) {
    setInterval(() => {
        progress2.value = song2.currentTime;
    }, 500);
}
progress2.onchange = function() {
    song2.play();
    song2.currentTime = progress2.value;
    ctrlIcon2.classList.add("fa-pause");
    ctrlIcon2.classList.remove("fa-play");
}

let progress3 = document.getElementById("progress3");
let song3 = document.getElementById("song3");
let ctrlIcon3 = document.getElementById("ctrlIcon3");
song3.onloadedmetadata = function() {
    progress3.max = song3.duration;
    progress3.value = song3.currentTime;
}

function playPause3() {
    if (ctrlIcon3.classList.contains("fa-pause")) {
        song2.pause();
        ctrlIcon3.classList.remove("fa-pause");
        ctrlIcon3.classList.add("fa-play");
    } else {
        song3.play();
        ctrlIcon3.classList.add("fa-pause");
        ctrlIcon3.classList.remove("fa-play");
    }
}
if (song3.play()) {
    setInterval(() => {
        progress3.value = song3.currentTime;
    }, 500);
}
progress3.onchange = function() {
    song3.play();
    song3.currentTime = progress3.value;
    ctrlIcon3.classList.add("fa-pause");
    ctrlIcon3.classList.remove("fa-play");
}

let progress4 = document.getElementById("progress4");
let song4 = document.getElementById("song4");
let ctrlIcon4 = document.getElementById("ctrlIcon4");
song4.onloadedmetadata = function() {
    progress4.max = song4.duration;
    progress4.value = song4.currentTime;
}

function playPause4() {
    if (ctrlIcon4.classList.contains("fa-pause")) {
        song4.pause();
        ctrlIcon4.classList.remove("fa-pause");
        ctrlIcon4.classList.add("fa-play");
    } else {
        song4.play();
        ctrlIcon4.classList.add("fa-pause");
        ctrlIcon4.classList.remove("fa-play");
    }
}
if (song4.play()) {
    setInterval(() => {
        progress4.value = song4.currentTime;
    }, 500);
}
progress4.onchange = function() {
    song4.play();
    song4.currentTime = progress4.value;
    ctrlIcon4.classList.add("fa-pause");
    ctrlIcon4.classList.remove("fa-play");
}
let progress5 = document.getElementById("progress5");
let song5 = document.getElementById("song5");
let ctrlIcon5 = document.getElementById("ctrlIcon5");
song5.onloadedmetadata = function() {
    progress5.max = song5.duration;
    progress5.value = song5.currentTime;
}

function playPause5() {
    if (ctrlIcon5.classList.contains("fa-pause")) {
        song5.pause();
        ctrlIcon5.classList.remove("fa-pause");
        ctrlIcon5.classList.add("fa-play");
    } else {
        song5.play();
        ctrlIcon5.classList.add("fa-pause");
        ctrlIcon5.classList.remove("fa-play");
    }
}
if (song5.play()) {
    setInterval(() => {
        progress5.value = song5.currentTime;
    }, 500);
}
progress5.onchange = function() {
    song5.play();
    song5.currentTime = progress5.value;
    ctrlIcon5.classList.add("fa-pause");
    ctrlIcon5.classList.remove("fa-play");
}

let progress6 = document.getElementById("progress6");
let song6 = document.getElementById("song6");
let ctrlIcon6 = document.getElementById("ctrlIcon6");
song6.onloadedmetadata = function() {
    progress6.max = song6.duration;
    progress6.value = song6.currentTime;
}

function playPause6() {
    if (ctrlIcon6.classList.contains("fa-pause")) {
        song6.pause();
        ctrlIcon6.classList.remove("fa-pause");
        ctrlIcon6.classList.add("fa-play");
    } else {
        song6.play();
        ctrlIcon6.classList.add("fa-pause");
        ctrlIcon6.classList.remove("fa-play");
    }
}
if (song6.play()) {
    setInterval(() => {
        progress6.value = song6.currentTime;
    }, 500);
}
progress6.onchange = function() {
    song6.play();
    song6.currentTime = progress6.value;
    ctrlIcon6.classList.add("fa-pause");
    ctrlIcon6.classList.remove("fa-play");
}

let progress7 = document.getElementById("progress7");
let song7 = document.getElementById("song7");
let ctrlIcon7 = document.getElementById("ctrlIcon7");
song7.onloadedmetadata = function() {
    progress7.max = song7.duration;
    progress7.value = song7.currentTime;
}

function playPause7() {
    if (ctrlIcon7.classList.contains("fa-pause")) {
        song7.pause();
        ctrlIcon7.classList.remove("fa-pause");
        ctrlIcon7.classList.add("fa-play");
    } else {
        song7.play();
        ctrlIcon7.classList.add("fa-pause");
        ctrlIcon7.classList.remove("fa-play");
    }
}
if (song7.play()) {
    setInterval(() => {
        progress7.value = song7.currentTime;
    }, 500);
}
progress7.onchange = function() {
    song7.play();
    song7.currentTime = progress7.value;
    ctrlIcon7.classList.add("fa-pause");
    ctrlIcon7.classList.remove("fa-play");
}
let progress8 = document.getElementById("progress8");
let song8 = document.getElementById("song8");
let ctrlIcon8 = document.getElementById("ctrlIcon8");
song7.onloadedmetadata = function() {
    progress8.max = song8.duration;
    progress8.value = song8.currentTime;
}

function playPause8() {
    if (ctrlIcon8.classList.contains("fa-pause")) {
        song8.pause();
        ctrlIcon8.classList.remove("fa-pause");
        ctrlIcon8.classList.add("fa-play");
    } else {
        song8.play();
        ctrlIcon8.classList.add("fa-pause");
        ctrlIcon8.classList.remove("fa-play");
    }
}
if (song8.play()) {
    setInterval(() => {
        progress8.value = song8.currentTime;
    }, 500);
}
progress8.onchange = function() {
    song8.play();
    song8.currentTime = progress8.value;
    ctrlIcon8.classList.add("fa-pause");
    ctrlIcon8.classList.remove("fa-play");
}
let progress9 = document.getElementById("progress9");
let song9 = document.getElementById("song9");
let ctrlIcon9 = document.getElementById("ctrlIcon9");
song7.onloadedmetadata = function() {
    progress9.max = song9.duration;
    progress9.value = song9.currentTime;
}

function playPause9() {
    if (ctrlIcon9.classList.contains("fa-pause")) {
        song9.pause();
        ctrlIcon9.classList.remove("fa-pause");
        ctrlIcon9.classList.add("fa-play");
    } else {
        song9.play();
        ctrlIcon9.classList.add("fa-pause");
        ctrlIcon9.classList.remove("fa-play");
    }
}
if (song9.play()) {
    setInterval(() => {
        progress9.value = song9.currentTime;
    }, 500);
}
progress9.onchange = function() {
    song9.play();
    song9.currentTime = progress9.value;
    ctrlIcon9.classList.add("fa-pause");
    ctrlIcon9.classList.remove("fa-play");
}
let progress10 = document.getElementById("progress10");
let song10 = document.getElementById("song10");
let ctrlIcon10 = document.getElementById("ctrlIcon10");
song10.onloadedmetadata = function() {
    progress10.max = song10.duration;
    progress10.value = song10.currentTime;
}

function playPause10() {
    if (ctrlIcon10.classList.contains("fa-pause")) {
        song10.pause();
        ctrlIcon10.classList.remove("fa-pause");
        ctrlIcon10.classList.add("fa-play");
    } else {
        song10.play();
        ctrlIcon10.classList.add("fa-pause");
        ctrlIcon10.classList.remove("fa-play");
    }
}
if (song10.play()) {
    setInterval(() => {
        progress10.value = song10.currentTime;
    }, 500);
}
progress10.onchange = function() {
    song10.play();
    song10.currentTime = progress10.value;
    ctrlIcon10.classList.add("fa-pause");
    ctrlIcon10.classList.remove("fa-play");
}
let progress11 = document.getElementById("progress11");
let song11 = document.getElementById("song11");
let ctrlIcon11 = document.getElementById("ctrlIcon11");
song11.onloadedmetadata = function() {
    progress11.max = song11.duration;
    progress11.value = song11.currentTime;
}

function playPause11() {
    if (ctrlIcon11.classList.contains("fa-pause")) {
        song11.pause();
        ctrlIcon11.classList.remove("fa-pause");
        ctrlIcon11.classList.add("fa-play");
    } else {
        song11.play();
        ctrlIcon11.classList.add("fa-pause");
        ctrlIcon11.classList.remove("fa-play");
    }
}
if (song11.play()) {
    setInterval(() => {
        progress11.value = song11.currentTime;
    }, 500);
}
progress11.onchange = function() {
    song11.play();
    song11.currentTime = progress11.value;
    ctrlIcon11.classList.add("fa-pause");
    ctrlIcon11.classList.remove("fa-play");
}
let progress12 = document.getElementById("progress12");
let song12 = document.getElementById("song12");
let ctrlIcon12 = document.getElementById("ctrlIcon12");
song12.onloadedmetadata = function() {
    progress12.max = song12.duration;
    progress12.value = song12.currentTime;
}

function playPause12() {
    if (ctrlIcon12.classList.contains("fa-pause")) {
        song12.pause();
        ctrlIcon12.classList.remove("fa-pause");
        ctrlIcon12.classList.add("fa-play");
    } else {
        song12.play();
        ctrlIcon12.classList.add("fa-pause");
        ctrlIcon12.classList.remove("fa-play");
    }
}
if (song12.play()) {
    setInterval(() => {
        progress12.value = song12.currentTime;
    }, 500);
}
progress12.onchange = function() {
    song12.play();
    song12.currentTime = progress12.value;
    ctrlIcon12.classList.add("fa-pause");
    ctrlIcon12.classList.remove("fa-play");
}