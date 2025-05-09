//formListener.js

import { inputStates, isFormValid } from './formState.js';
import { showTooltip } from './showTooltip.js';

const form = document.querySelector('form');
const button = document.getElementById('button');
const elemTerms = document.getElementById('terminos');

function updateSubmitButton() {
    const isValid = isFormValid();
    button.classList.toggle('cursor', isValid);
  }
  
// Listener para checkbox
function attachCheckboxListener() {
    elemTerms.addEventListener('change', () => {
      const isChecked = elemTerms.checked;
      if (inputStates.terminos !== isChecked) {
        inputStates.terminos = isChecked;
        updateSubmitButton();
      }
    });
  }

function attachSubmitListener() {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      if (!isFormValid()) {
        showTooltip('Por favor completa todos los campos correctamente.', 'error');
        return;
      }
  
      showTooltip('Formulario enviado con éxito ✅', 'success');
      form.reset();
  
      Object.keys(inputStates).forEach(key => inputStates[key] = false);
      updateSubmitButton();
    });
  }

  export {form, updateSubmitButton, attachCheckboxListener, attachSubmitListener};