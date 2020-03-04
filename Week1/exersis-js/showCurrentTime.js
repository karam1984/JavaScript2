let time = document.createElement('h1'); 
const body = document.getElementsByTagName('body')[0]; 
body.appendChild(time); 

function Now() {
    let date = new Date(); 
    let h = date.getHours(); 
    let m = date.getMinutes(); 
    let s = date.getSeconds();
    time.innerText = `${h}:${m}:${s}`; 
}
setInterval(function () { 
    Now()
}, 500);

