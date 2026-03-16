const dayEl = document.getElementById("day")
const hourEl = document.getElementById("hour")
const minuteEl = document.getElementById("minutes")
const secondEl = document.getElementById("second")

const newYearTime = new Date("Jan 1, 2027 00:00:00").getTime();

function updateCountDown () {
    const now = new Date().getTime();
    // console.log(now, newYearTime);

    const gap = newYearTime - now;
    console.log(gap);
    
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);

    dayEl.innerText = d;
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;

    setTimeout(updateCountDown, 1000)
}

updateCountDown()