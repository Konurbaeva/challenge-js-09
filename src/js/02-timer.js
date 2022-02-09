import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';

const startElBtn = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

let difference = 0;
let interValId = 0;

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds

 const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    enableSeconds: true,
    minuteIncrement: 1,
    onClose(selectedDates) {

      const currentTime = Date.now();
      const selectedDate = selectedDates[0].getTime();
      difference = selectedDate - currentTime;

     if(selectedDate < currentTime) {
       alert("Please choose a date in the future");
       startElBtn.setAttribute('disabled', '');
       console.log('intervalId: ', interValId);
       clearInterval(interValId);
       
     } else {
       startElBtn.removeAttribute('disabled');
     }

      return selectedDate;
    },
  };


  function countDown() {

    startElBtn.setAttribute('disabled', '');

    interValId = setInterval(() => {

      difference = difference - 1000;
      let convertedDifference = convertMs(difference);

      daysEl.innerHTML =  convertedDifference.days;
      hoursEl.innerHTML =  convertedDifference.hours;
      minutesEl.innerHTML =  convertedDifference.minutes;
      secondsEl.innerHTML =  convertedDifference.seconds;

      return difference;
    }, 1000);

    console.log('interValId', interValId);
  }

startElBtn.setAttribute('disabled', '');


startElBtn.addEventListener('click', countDown)

flatpickr("#datetime-picker", options);



