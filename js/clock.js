const clock = document.getElementById("clock");

function getClock() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDay();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2,'0');

  clock.innerText = `${year} / ${month} / ${day}
  ${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
