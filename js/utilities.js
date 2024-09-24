function getInputValue(inputId){
  const inputValue = document.getElementById(inputId).value;
  const inputAmount = parseFloat(inputValue);
  console.log(inputAmount);
  return inputAmount;

}


function getInnerText(displayId){
  console.log('connected from innertext', displayId);
  const areaInitial = document.getElementById(displayId).innerText;
  const areaAmount = parseFloat(areaInitial)
  console.log(areaAmount);
  return areaAmount;
  
}


