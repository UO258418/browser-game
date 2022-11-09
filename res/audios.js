const audioFilenames = [
    "battleship.ogg"
]

var audios = {}

function loadAudios(callback, audioFilenames, index = 0) {
    if(index >= audioFilenames.length) {
        callback();
        return;
    }

    let audio = new Audio();

    audio.onload = function(e) {
        loadAudios(callback, audioFilenames, index + 1);
    }

    audio.src = "res/audio/" + audioFilenames[index];
    let audioName = audioFilenames[index].split('.')[0];
    audios[audioName] = audio;
}