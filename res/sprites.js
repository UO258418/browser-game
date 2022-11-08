const filenames = [
    "grass.jpg",
    "snow.jpg",
    "water.jpg",
    "sand.jpg",
    "deepwater.jpg",
    "player.png",
    "dick.png",
    "blood.png"
]

var sprites = {}

function loadImages(callback, filenames, index = 0) {
    if(index >= filenames.length) {
        callback();
        return;
    } 

    let img = new Image();

    img.onload = function(e) {
        loadImages(callback, filenames, index + 1);
    }

    img.src = "res/img/" + filenames[index];
    let imgName = filenames[index].split('.')[0];
    sprites[imgName] = img;
}