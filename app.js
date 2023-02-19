const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".seconds");

updateClock();


function updateClock(){
    const currentDate = new Date();
    let hour = currentDate.getHours();
    let minute = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let hourNow = (hour  / 12 ) * 360;
    hourEl.style.transform = `rotate(${hourNow}deg)`
    let currentMinute = (minute / 60) * 360;
    minuteEl.style.transform = `rotate(${currentMinute}deg)` 
    let currentSecomd = (seconds / 60) * 360;
    secondEl.style.transform = `rotate(${currentSecomd}deg)` 
}

setInterval( updateClock,1000)


