//main.js

import { debounce } from './debounce.js';
import { validators, validateInput } from './formValidator.js';
import { form, attachCheckboxListener, attachSubmitListener } from './formListeners.js';

const inputs = form.querySelectorAll('.form-group input');

const debouncedValidateInput = debounce(validateInput, 500);

inputs.forEach((input) => {
  if (validators[input.name]) {
    input.addEventListener('input', () => debouncedValidateInput(input));
  }
});

attachCheckboxListener();
attachSubmitListener();
