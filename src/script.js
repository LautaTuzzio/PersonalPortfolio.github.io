function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    var timeString = hours + ':' + minutes;
    if (hours >=12){
        time = " PM"
    }else{
        time = " AM"
    }
    document.querySelector('.clock').textContent = timeString + time;
}
setInterval(updateClock, 1000); // Update the clock every second

