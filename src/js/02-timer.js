import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';

let choosenDate = '123';

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

      choosenDate = selectedDates[0];
     
      console.log(convertMs(choosenDate));
      console.log('choosenDate: ', choosenDate)

      const currentDate = Date.now();

     console.log('currentDate', currentDate) // ms 1644419414312#

      return choosenDate;
    },
  };


flatpickr("#datetime-picker", options);



