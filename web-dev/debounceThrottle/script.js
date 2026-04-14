//debouncing limits the execution of a function call and waits for a certain amount of time before running it again

const input = document.querySelector('input');
const defaultText = document.getElementById('default');
const debounceText = document.getElementById('debounce');
const throttleText = document.getElementById('throttle');

const updateDebouncedText = debounce((text) => {
  debounceText.textContent = text;
});

const updateThrottledText = throttle((text) => {
  throttleText.textContent = text;
});

input.addEventListener('input', (e) => {
  defaultText.textContent = e.target.value;
  updateDebouncedText(e.target.value);
  updateThrottledText(e.target.value);
});

function debounce(cb, delay = 2000) {
  let timeout;
  return (...args) => {
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

function throttle(cb, delay = 2000) {
  let shouldWait = false;
  let waitingArgs;

  const timeoutFunc = () => {
    if (waitingArgs == null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
    }
  };

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }

    cb(...args);
    shouldWait = true;

    setTimeout(timeoutFunc, delay);
  };
}
