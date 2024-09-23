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





// function totalCalculations(id, displayId){
//   console.log('calculations',id, displayId);

  
//   const inputAmount = getInputValue(id)
//   const areaWiseAmount = getInnerText(displayId)
//   console.log(inputAmount, areaWiseAmount);

//   const totalAmount = inputAmount + areaWiseAmount;
//   console.log(totalAmount);
  
//   // document.getElementById('noakhali_donation_amount').innerText = totalAmount;
//   const totalInnerText = changeInnerText(displayId);
//   console.log(totalInnerText);
// totalInnerText.innerText = totalAmount;
// }

// function changeInnerText(displayId){
//  const totalAmount = document.getElementById(displayId).innerText;
//   return totalAmount;

// }