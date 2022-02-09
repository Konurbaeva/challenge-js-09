import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';

const startElBtn = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds

 const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function pad(value) {
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
      let difference = selectedDate - currentTime;

     if(selectedDate < currentTime) {
       alert("Please choose a date in the future");
       startElBtn.setAttribute('disabled', '');
     } else {
       startElBtn.removeAttribute('disabled');
     }

     setInterval(() => {

      difference = difference - 1000;
      let convertedDifference = convertMs(difference);

      daysEl.innerHTML =  convertedDifference.days;
      hoursEl.innerHTML =  convertedDifference.hours;
      minutesEl.innerHTML =  convertedDifference.minutes;
      secondsEl.innerHTML =  convertedDifference.seconds;

      return difference;
    }, 1000);

      return selectedDate;
    },
  };

startElBtn.setAttribute('disabled', '');
flatpickr("#datetime-picker", options);



