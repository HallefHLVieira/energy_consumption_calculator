const inputPower = document.querySelector('#power');
const inputTotalhours =  document.querySelector('#totalHours');
const inputTotalDays = document.querySelector('#totalDays');
const inputPrice = document.querySelector('#price');
const elementResponse = document.querySelector("#response")
const buttonCalculate = document.querySelector('#calculate');

function consumptionCalculate() {
  if(inputPower.value === '' 
  | inputTotalhours.value === '' 
  | inputTotalDays.value === '' 
  | inputPrice.value === '')
  {
    alert("Preencha todos os campos!");
    return
  }

  const power = Number(inputPower.value);
  const totalhours = Number(inputTotalhours.value);
  const totalDays = Number(inputTotalDays.value);
  const price = Number(inputPrice.value);

  buttonCalculate.setAttribute('disable',true);

  const result = ((power * totalhours * totalDays)/1000) * price;

  const response = "<div> Seu eletro consumirá em R$: " + (Math.round(result * 100) / 100).toFixed(2); + "</div>";

  elementResponse.innerHTML = response

  elementResponse.style.opacity = 1;

  setTimeout(function() {
    elementResponse.style.opacity = 0;
    buttonCalculate.removeAttribute("disabled")
  }, 5000)


}
