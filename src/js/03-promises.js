import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
const delayEl = document.querySelector('[name="delay"]');
const stepEl = document.querySelector('[name="step"]');
const amountEl = document.querySelector('[name="amount"]');

function createPromise(position, delay){
  const promiseObj = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
  return promiseObj;
};

formEl.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const formSubmitObj = {
    delay: delayEl.value,
    step: stepEl.value,
    amount: amountEl.value,
  };

  let delay = parseInt(formSubmitObj.delay);
  let step = parseInt(formSubmitObj.step);
  let amount = parseInt(formSubmitObj.amount);

  setTimeout(() => {
    for (let i = 1; i <=  amount; i++) {
      createPromise(i, delay)
      .then((promiseObj) => {
        Notiflix.Notify.success(promiseObj);
      })
      .catch((promiseObj) => {
        Notiflix.Notify.failure(promiseObj);
      });

      delay += step;
    }
  }, delay);
});