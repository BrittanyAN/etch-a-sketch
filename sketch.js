var pad = document.querySelector('#pad');
var resetBtn = document.querySelector('#reset');

for (var i = 0; i < 16*16; i++) {
    pad.appendChild(document.createElement('div'));
}

var pixels = document.querySelectorAll('#pad div');

pixels.forEach((pixelNode) => {
    pixelNode.classList.add('pixel');
    pixelNode.addEventListener('mouseover', (e) => {
        pixelNode.classList.add('black');
    })
})

resetBtn.addEventListener("click", (e) => {
    pixels.forEach((pixelNode) => {
        pixelNode.classList.remove('black');
    })
})
