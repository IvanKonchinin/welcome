'use strict';
window.addEventListener('DOMContentLoaded', () => {

function welcome(deadLine){

  const currentTimeDay = document.querySelector('.current-time-day');
  const currentWeekDay = document.querySelector('.current-week-day');
  const currentClock = document.querySelector('.current-time');
  const remainingDays = document.querySelector('.remaining-days');
  const timeDay = ['Доброе утро', 'Добрый день', 'Добрый вечер', 'Доброй ночи'];
  const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  const days = ['день', 'дня', 'дней'];

  function currentTime() {

    const date = new Date();
    const currentHours = date.getHours();
    const currentWeekDay = date.getDay();
    const dateStop = new Date(deadLine).getTime();
    const dateNow = date.getTime();
    const timeRemaining = (dateStop - dateNow) / 1000;
    const days = Math.floor(timeRemaining / 60 / 60 /24);
    return { currentHours, currentWeekDay, date, days};
  }

  function showDayTime(){

    let time = currentTime();

    if(+time.currentHours >= 12 && +time.currentHours < 18){
      currentTimeDay.textContent = timeDay[1];
    }
    else if (+time.currentHours >= 18 && +time.currentHours < 24){
      currentTimeDay.textContent = timeDay[2];
    }
    else if (+time.currentHours >= 0 && +time.currentHours < 6) {
      currentTimeDay.textContent = timeDay[3];
    }
    else{
      currentTimeDay.textContent = timeDay[0];
    }
  }  
  
  const declinationWords = function (num, arrText) {
    if (num % 10 === 1 && num % 100 !== 11) {
      return arrText[0];
    } else if (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)) {
      return arrText[1];
    }
    return arrText[2];
  };

  function showWeekDay() {
    let time = currentTime();
    currentWeekDay.textContent += week[time.currentWeekDay];
  }

  function showTime(){
    currentClock.textContent= '';
    let time = currentTime();
    currentClock.textContent = `Текущее время: ${time.date.toLocaleTimeString('en')}`;
  }

  function showRemainingDays() {
    let time = currentTime();
    remainingDays.textContent += `${time.days} ${declinationWords(time.days ,days)}`;
  }

  showDayTime();
  showWeekDay();
  setInterval(showTime, 1000);
  showRemainingDays();
}
  welcome('1 januar 2021');
});