
function setDate() {
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    const hourHand = 30*h + m/2;
    const minuteHand = 6*m;
    const seconHand = 6*s;
    
    hour.style.transform = `rotate(${hourHand}deg)`;
    minute.style.transform = `rotate(${minuteHand}deg)`;
    second.style.transform = `rotate(${seconHand}deg)`;
};

setInterval(setDate, 1000);

