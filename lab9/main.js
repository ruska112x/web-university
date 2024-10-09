const weekDays = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

const clockFunction = () => {
    let timeZoneSelect = document.getElementById("timeZones");
    let tz = timeZoneSelect.options[timeZoneSelect.selectedIndex].text;
    let clock = document.getElementById("clock");
    let date = document.getElementById("date");
    const now = new Date(new Date().toLocaleString("en-US", { timeZone: tz }));
    let hours = addZero(now.getHours());
    let minutes = addZero(now.getMinutes());
    let seconds = addZero(now.getSeconds());
    let dayOfWeek = now.getDay();
    let dayOfMonth = addZero(now.getDate());
    let month = now.getMonth();
    let year = now.getFullYear();
    let clockString = hours + ":" + minutes + ":" + seconds;
    let dateString = weekDays[dayOfWeek - 1] + ", " + dayOfMonth + "." + (month + 1) + "." + year;
    clock.innerHTML = clockString;
    date.innerHTML = dateString;
    setTimeout(clockFunction, 1000);
}

const addZero = (i) => {
    if (i < 10) {
        i = "0" + i
    };
    return i;
}
