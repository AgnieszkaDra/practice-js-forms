document.addEventListener('DOMContentLoaded', init);
const input = document.querySelector('input')
const color = document.querySelector('input[name="color"]')
const opacity = document.querySelector('input[name="opacity"]')
const box = document.querySelector('.box')


color.addEventListener('change', function(e){
    let theColor = color.value;
    setBoxShadow(box, theColor, opacity.value)
})



function opacityChange() {
    let opacity2 = opacity.value / 100
    console.log(opacity2)
    setBoxShadow(box, color.value, opacity2)
}
opacity.addEventListener('change', opacityChange)
opacity.addEventListener('mousemove', opacityChange)


function init() {
    const boxElement = document.querySelector('.box');
    setBoxShadow(boxElement, '#000000');
}

function setBoxShadow(element, colorInHex, opacity = 1) {
    const colorInRGBA = `rgba(
        ${getChannelColor(colorInHex, 'red')}, 
        ${getChannelColor(colorInHex, 'green')}, 
        ${getChannelColor(colorInHex, 'blue')}, 
        ${opacity}
    )`;

    element.style.boxShadow = `0 0 5px 5px ${colorInRGBA}`;
}


function getChannelColor(colorInHex, channelName) {
    let start;
    switch(channelName) {
        case 'red':
            start = 1;
            break;
        case 'green':
            start = 3;
            break;
        case 'blue':
            start = 5;
            break;
    }

    const channelColorHex = colorInHex.substr(start, 2);
    const channelColorDec = parseInt(channelColorHex, 16);

    return channelColorDec; 
}


