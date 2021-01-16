// Have to translate plates diagonally
// scaleWin
    // l-plate moves left and up
    // r-plate moves left and down

// scaleLose
    // l-plate moves right and down
    // r-plate moves right and up

let rotation = 0;
let translateXLeft = -4;
let translateXRight = -0.5;
let translateYLeft = 17;
let translateYRight = -16;

setInterval(scaleLose, 50)

function scaleWin() {
    if(rotation <= 6) {
        rotation += 0.3;
        translateXLeft -= 0.1;
        translateXRight -= 0.2;

        document.querySelector("#arm").style.webkitTransform = 'rotate('+ rotation +'deg)'
        document.querySelector("#arm").style.mozTransform = 'rotate('+ rotation +'deg)'
        document.querySelector("#arm").style.msTransform = 'rotate('+ rotation +'deg)'
        document.querySelector("#arm").style.transform = 'rotate('+ rotation +'deg)'

        lPlateWin();
        rPlateWin();

    } else {
        return;
    }
};


function lPlateWin() {
    translateYLeft -= 0.4;
    document.querySelector("#l-plate").style.webkitTransform = 'translate(' + translateXLeft + 'px, ' + translateYLeft + 'px)'
    document.querySelector("#l-plate").style.mozTransform = 'translate(' + translateXLeft + 'px, ' + translateYLeft + 'px)'
    document.querySelector("#l-plate").style.msTransform = 'translate(' + translateXLeft + 'px, ' + translateYLeft + 'px)'
    document.querySelector("#l-plate").style.transform = 'translate(' + translateXLeft + 'px, ' + translateYLeft + 'px)'
}


function rPlateWin() {
    translateYRight += 0.3;
    document.querySelector("#r-plate").style.webkitTransform = 'translate(' + translateXRight + 'px, ' + translateYRight + 'px)'
    document.querySelector("#r-plate").style.mozTransform = 'translate(' + translateXRight + 'px, ' + translateYRight + 'px)'
    document.querySelector("#r-plate").style.msTransform = 'translate(' + translateXRight + 'px, ' + translateYRight + 'px)'
    document.querySelector("#r-plate").style.transform = 'translate(' + translateXRight + 'px, ' + translateYRight + 'px)'
}


function scaleLose() {
    if(rotation >= -6) {
        rotation -= 0.3;
        translateXLeft += 0.2;
        translateXRight += 0.1;


        document.querySelector("#arm").style.webkitTransform = 'rotate('+ rotation +'deg)'
        document.querySelector("#arm").style.mozTransform = 'rotate('+ rotation +'deg)'
        document.querySelector("#arm").style.msTransform = 'rotate('+ rotation +'deg)'
        document.querySelector("#arm").style.transform = 'rotate('+ rotation +'deg)'

        lPlateLose();
        rPlateLose();

    } else {
        return
    }
};


function lPlateLose() {
    translateYLeft += 0.3;
    document.querySelector("#l-plate").style.webkitTransform = 'translate(' + translateXLeft + 'px, ' + translateYLeft + 'px)'
    document.querySelector("#l-plate").style.mozTransform = 'translate(' + translateXLeft + 'px, ' + translateYLeft + 'px)'
    document.querySelector("#l-plate").style.msTransform = 'translate(' + translateXLeft + 'px, ' + translateYLeft + 'px)'
    document.querySelector("#l-plate").style.transform = 'translate(' + translateXLeft + 'px, ' + translateYLeft + 'px)'
}


function rPlateLose() {
    translateYRight -= 0.35;
    document.querySelector("#r-plate").style.webkitTransform = 'translate(' + translateXRight + 'px, ' + translateYRight + 'px)'
    document.querySelector("#r-plate").style.mozTransform = 'translate(' + translateXRight + 'px, ' + translateYRight + 'px)'
    document.querySelector("#r-plate").style.msTransform = 'translate(' + translateXRight + 'px, ' + translateYRight + 'px)'
    document.querySelector("#r-plate").style.transform = 'translate(' + translateXRight + 'px, ' + translateYRight + 'px)'
}
