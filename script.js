let alarmTime = null;
let alarmSet = false;

function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById("currentTime").innerText = timeString;

  if (alarmSet && timeString === alarmTime) {
    document.getElementById("alarmSound").play();
    document.getElementById("status").innerText = "Alarm Ringing!";
  }
}

setInterval(updateClock, 1000);

function setAlarm() {
  const input = document.getElementById("alarmTime").value;

  if (!input) {
    alert("Please select a time");
    return;
  }

  const [hour, minute] = input.split(":");

  const alarmDate = new Date();
  alarmDate.setHours(hour);
  alarmDate.setMinutes(minute);
  alarmDate.setSeconds(0);

  alarmTime = alarmDate.toLocaleTimeString();
  alarmSet = true;

  document.getElementById("status").innerText = "Alarm set for " + alarmTime;
}
