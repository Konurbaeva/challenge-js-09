

const formEl = document.querySelector('.form')
const buttonEl = document.querySelector('[type="submit"]');
const delay = document.querySelector('[name="delay"]');
const step = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve("Success! Value passed to resolve function");
      } else {
        reject("Error! Error passed to reject function");
      }
    }, position, delay);
  });
  return promise;
}

createPromise(step, delay)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });


function onFormSubmit(evt) {
  evt.preventDefault();

  const {
    elements: { delay, step, amount },
  } = evt.currentTarget;

  const formSubmitObj = {
    delay: delay.value,
    step: step.value,
    amount: amount.value,
  };

  if (delay.value === "" || step.value === "") {
    alert("Please fill in all the fields!");
    evt.currentTarget.reset();
  }

  console.log(formSubmitObj);

  createPromise(1000, 500);

  evt.currentTarget.reset();
}

formEl.addEventListener('submit', onFormSubmit);

