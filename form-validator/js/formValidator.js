// formValidator.js

import { validateFullName, validateEmail } from './validateInput.js';
import { inputStates } from './formState.js';
import { updateSubmitButton } from './formListeners.js';

// Configurable: reglas de validación por input name
const validators = {
    nombre: validateFullName,
    apellido: validateFullName,
    email: validateEmail,
  };

// Manejo de inputs dinámico
function validateInput(input) {
    const { name, value } = input;
    const validator = validators[name];
  
    if (!validator) return; // Ignorar campos no configurados
    const isValid = validator(value);
  
    if (inputStates[name] !== isValid) {
      inputStates[name] = isValid;
      updateSubmitButton();
    }
  
    input.classList.toggle('error', !isValid);
}

export { validators, validateInput}

