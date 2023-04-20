import './style.css';
import validator from 'validator';

const input = document.getElementById('text-input');
const options = document.getElementById('options');
const validationBtn = document.getElementById('validation-btn');
const textValidation = document.getElementById('validation');

validationBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const campos = {
    Email: validator.isEmail(input.value),
    CPF: validator.isTaxID(input.value, 'pt-BR'),
    'Cartão de Crédito': validator.isCreditCard(input.value),
    Passaporte: validator.isPassportNumber(input.value, 'BR'),
    Celular: validator.isMobilePhone(input.value, 'pt-BR'),
  };

  textValidation.innerHTML = `A validação retornou ${campos[options.value]}`;
});
