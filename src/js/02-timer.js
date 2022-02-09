import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);

      let choosenDate = selectedDates[0];
     
      console.log('dates: ', choosenDate);
      return choosenDate;
    },
  };



flatpickr("#datetime-picker", options);

