/*let line = document.querySelector('.line');
let slides = document.querySelectorAll('.slide');
let sliderWidth = document.querySelector('.slider').offsetWidth;
let widthArray = [0];
let lineWith = 0;
let offset = 0;
let step = 0;
let ostatok = 0;
//console.log(sliderWidth);

for (let i = 0; i < slides.length; i++) {
    widthArray.push(slides[i].offsetWidth);
    lineWith += slides[i].offsetWidth;
}
line.style.width = lineWith + 'px';
console.log(widthArray);

document.onclick = function() {
    ostatok = lineWith - sliderWidth - (offset + widthArray[step]);
    if (ostatok >= 0) {
        offset = offset + widthArray[step];
        line.style.left = -offset + 'px';

    } else {
        line.style.left = -(lineWith - sliderWidth) + 'px';
        offset = 0;
        step = -1;
    }
    if (step + 1 == slides.length) {
        step = 0;
        offset = 0;
    } else {
        step++;
    }
}*/