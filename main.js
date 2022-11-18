// Register contexts
ContextManager.registerContext('wcanvas');
ContextManager.registerContext('gcanvas');
ContextManager.registerContext('uicanvas');

window.onresize = () => {
    ContextManager.resizeContexts(window.innerWidth, window.innerHeight);
}

window.onkeydown = () => {
    audios.battleship.loop = true;
    audios.battleship.volume = audioSettings.backgroundMusicVolume;
    audios.battleship.play();
    window.onkeydown = null;
}

// Mouse coordinates
let mouseX = 0;
let mouseY = 0;

window.onmousemove = (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
}

/* ----------------------------------------------------------- */
let fpscounter = new FPSCounter(ContextManager.getCanvasContext('uicanvas'));

// layers
let gameLayer;

loadImages(startup, filenames);

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
    gameLayer.draw();
    fpscounter.draw();
}


/* GAME LOOP */
function loop() {
    processInput();
    update();
    draw();
}
