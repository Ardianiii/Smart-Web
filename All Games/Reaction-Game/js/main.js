var circle = document.getElementById('circle');
var showTime = document.getElementById('showTime');
var timeStart = new Date().getTime()

function showCircle(){
    circle.style.display = 'block';
    circle.style.top = Math.random() * 500 + 'px';
    circle.style.left =  Math.random() * 500 + 'px';
    circle.style.backgroundColor = randomColor();
    timeStart = new Date().getTime();
}
showCircle();

circle.onclick = function(){
    randomShape();
    circle.style.display = 'none';
    setTimeout(showCircle, 1000);
    var timeEnd = new Date().getTime();
    var time = (timeEnd - timeStart)/1000;
    showTime.innerHTML = time + 'sekona';
}
function randomColor(){
    var hexCode = '0123456789ABCDEF';
    var color = '#';

    for(var i = 0;  i <  6; i++) {
        color = color + hexCode[Math.floor(Math.random()* 16)];
    }
    return color;
}
var circle2 = document.getElementById('circle2');
var showTime = document.getElementById('showTime');
var timeStart2 = new Date().getTime()

function showCircle2(){
    circle2.style.display = 'block';
    circle2.style.top = Math.random() * 650 + 'px';
    circle2.style.left =  Math.random() * 950 + 'px';
    circle2.style.backgroundColor = randomColor();
    timeStart2 = new Date().getTime();
}
showCircle2();

circle2.onclick = function(){
    circle2.style.display = 'none';
    setTimeout(showCircle2, 1000);
    var timeEnd = new Date().getTime();
    var time = (timeEnd - timeStart2)/1000;
    showTime2.innerHTML = time + 'sekona';
}


var shape = document.getElementById('shapes');
var shapes = document.getElementById('shape');
function randomShape(){
    var randomShape1 = document.getElementById('shape')
    for(var i = 0; i > 4; i++){
        shape[i].style.display = 'block';
    }
}









