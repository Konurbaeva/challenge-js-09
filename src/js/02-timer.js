import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';


const startElBtn = document.querySelector('[data-start]');



function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
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
    minuteIncrement: 1,
    onClose(selectedDates) {

      const currentDate = Date.now();
      const selectedDate = selectedDates[0].getTime();

     console.log('currentDate', currentDate) 
     console.log('chosenDate', selectedDate)

     if(selectedDate < currentDate) {
       alert("Please choose a date in the future");
       startElBtn.setAttribute('disabled', '');
     } else{
      startElBtn.removeAttribute('disabled');
     }
      return selectedDate;
    },
  };


flatpickr("#datetime-picker", options);



