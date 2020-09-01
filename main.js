
// function setDate(){
//     n = new Date();
//     year = n.getFullYear();
//     month = n.getMonth() + 1;
//     day = n.getDate();
//     document.getElementById("date").innerHTML = month + "/" + day + "/" + year;;
// }

function setTime() {

    n = new Date();
    year = n.getFullYear();
    month = n.getMonth() + 1;
    day = n.getDate();
    document.getElementById("date").innerHTML = month + "/" + day + "/" + year;

    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    const hourHand = 30*h + m/2;
    const minuteHand = 6*m + 90;
    const seconHand = 6*s + 90 ;
    
    hour.style.transform = `rotate(${hourHand}deg)`;
    minute.style.transform = `rotate(${minuteHand}deg)`;
    second.style.transform = `rotate(${seconHand}deg)`;
};
// setDate()

setInterval(setTime, 1000);

