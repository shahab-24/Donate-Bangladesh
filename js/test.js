function donationCalculation(donatedId, inputAmount){
  const mainBalanceElement = document.getElementById('initial_amount');
  const mainAccountBalance = parseFloat(mainBalanceElement.innerText);

  const donatedFundElement = document.getElementById(donatedId);
  const donatedFund = parseFloat(donatedFundElement.innerText);

  
  const totalDonatedFund = donatedFund + inputAmount;
  donatedFundElement.innerText = totalDonatedFund;

  const remainingBalance = mainAccountBalance - inputAmount;
  mainBalanceElement.innerText = remainingBalance;
}



document.getElementById('noakhali_donation').addEventListener('click', function(){
  // const initialAmount = document.getElementById('initial_amount').innerText;
// const initialSum = parseFloat(initialAmount);

  const inputAmount = getInputValue('noakhali_input')
  if(inputAmount === 'number' || inputAmount > 0){
    // const areaWiseAmount = getInnerText('noakhali_donation_amount');

    // const totalAmount = inputAmount + areaWiseAmount;
    // const finalTotal = initialSum - inputAmount;
  
    // document.getElementById('noakhali_donation_amount').innerText = totalAmount;
    // document.getElementById('initial_amount').innerText = finalTotal;
    donationCalculation('noakhali_donation_amount', inputAmount)

       // history tab function----
       const historyList = document.createElement('div');
       historyList.className = 'bg-white border-l-4 border-green-500 p-2'
       historyList.innerHTML = `
        
       <h2 class="text-2xl font-semibold ml-2 flex"><img src="/assets/coin.png" alt="" /> 
       <span class="font-bold text-green-500 text-3xl ml-2 mr-2">
       ${inputAmount} </span> BDT donated for "Donate for Flood at Noakhali, Bangladesh"
       </h2> 
      <p><span class="text-xl font-semibold">Donated Date: </span> ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</p>
       `
       const historyContainer = document.getElementById('history_container');
       historyContainer.insertBefore(historyList, historyContainer.firstChild)



   
    
  } else{
    

    return;
  }
  
})



