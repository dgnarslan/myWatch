const user = document.getElementById('userName');

user.innerHTML = prompt('Enter your name:');

function GetTime() {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  let date = now.toLocaleDateString();

  hour < 10
    ? (document.getElementById('hour').innerHTML = '0' + hour)
    : (document.getElementById('hour').innerHTML = hour);

  minute < 10
    ? (document.getElementById('minute').innerHTML = '0' + minute)
    : (document.getElementById('minute').innerHTML = minute);
  second < 10
    ? (document.getElementById('second').innerHTML = '0' + second)
    : (document.getElementById('second').innerHTML = second);

  document.getElementById('date').innerHTML = date;
}

setInterval(function () {
  GetTime();
}, 1000);

function changeTheme() {
  const element = document.getElementById('theme');
  const changeButton = document.getElementById('changeButton');
  element.classList.toggle('dark');
  changeButton.classList.toggle('dark-btn');
}
