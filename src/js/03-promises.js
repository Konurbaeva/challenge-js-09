

const formEl = document.querySelector('.form')
const buttonEl = document.querySelector('[type="submit"]');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  if (shouldResolve) {
   // resolve(position)
  } else {
  //  reject(position)

  }
}

function onPromise(resolve, reject) {

  const DELAY = 1000;

  setTimeout(() => {
    if (shouldResolve) {
      resolve(`✅ resolved: ${position}`);
    }

    reject('❌ rejected');
  }, DELAY);

}

function onFormNotLoad(event){

  event.preventDefault();

}


buttonEl.addEventListener('click', createPromise)
formEl.addEventListener('submit', onFormNotLoad)