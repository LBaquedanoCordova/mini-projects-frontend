//formState.js

const inputStates = {
    nombre: false,
    apellido: false,
    email: false,
    terminos: false
};

const isFormValid = () => Object.values(inputStates).every(Boolean);

export {inputStates, isFormValid}