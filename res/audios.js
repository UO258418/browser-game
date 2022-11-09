const audioFilenames = [
    "battleship.ogg",
    "scrotum.mp3"
]

var audios = {}

function loadAudios(audioFilenames) {
    audioFilenames.forEach(filename => {
        let audio = new Audio();
        audio.src = "res/audio/" + filename;
        let audioName = filename.split('.')[0];
        audios[audioName] = audio;
    });
}

loadAudios(audioFilenames);