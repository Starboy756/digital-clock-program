function updateClock(){

    const nowTime = new Date();
    let hours = nowTime.getHours();
    const meridiem = hours >= 12 ? "PM":"AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,"0");
    const minutes = nowTime.getMinutes().toString().padStart(2,"0");
    const seconds = nowTime.getSeconds().toString().padStart(2,"0");
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`
    document.getElementById("clock").textContent = timeString;

}

updateClock();
setInterval(updateClock,1000)