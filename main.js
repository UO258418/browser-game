const canvas = document.getElementById('gcanvas');
const ctx = canvas.getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

window.onresize = () => {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    fpscounter.setFont(fpscounter.font); // when resizing canvas some ctx settings reset
}

window.onkeydown = () => {
    audios.battleship.loop = true;
    audios.battleship.volume = audioSettings.backgroundMusicVolume;
    audios.battleship.play();
    window.onkeydown = null;
}

/* ----------------------------------------------------------- */
let fpscounter = new FPSCounter();

// layers
let gameLayer;

loadAudios(loadImages(startup, filenames), audioFilenames);

function startup() {
    gameLayer = new GameLayer();
    setInterval(loop, 1000 / settings.FPS);
}

/* process input */
function processInput() {
    gameLayer.processInput();
}


/* update */
function update() {
    gameLayer.update();
    fpscounter.update();
}


/* draw */
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    gameLayer.draw();
    fpscounter.draw();
}


/* GAME LOOP */
function loop() {
    processInput();
    update();
    draw();
}
