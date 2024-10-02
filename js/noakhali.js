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


// Noakhali-----

document.getElementById('noakhali_donation').addEventListener('click', function(){

  const mainBalanceElement = document.getElementById('initial_amount');
  const mainAccountBalance = parseFloat(mainBalanceElement.innerText);

  const inputAmount = getInputValue('noakhali_input')
  if(inputAmount === 'number' || inputAmount > 0 && mainAccountBalance > 0){
   
    donationCalculation('noakhali_donation_amount', inputAmount)

       // history tab function----
       const historyList = document.createElement('div');
       historyList.className = 'bg-white border-l-4 border-green-500 p-2'
       historyList.innerHTML = `
       <h2 class="text-2xl font-semibold ml-2 flex"><img src="assets/coin.png" alt="" /> 
       <span class="font-bold text-green-500 text-3xl ml-2 mr-2">
       ${inputAmount} </span> BDT donated for Flood at Noakhali, Bangladesh.
       </h2> 
      <p><span class="text-xl font-semibold">Donated Date: </span> ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</p>
       `
       const historyContainer = document.getElementById('history_container');
       historyContainer.insertBefore(historyList, historyContainer.firstChild)



    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `Thanks For Your Donation!
       <div class="flex justify-center items-center"> You Have Donated 
    <img class="mx-0" src="assets/coin.png" alt="" /> <span class="mx-0 font-bold text-green-500 text-3xl ml-2 mr-2 mb-2">
     ${inputAmount}</span> BDT </div>`,
      showConfirmButton: false,
      timer: 1500
    });
    
  } else{
    
Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Please Put A Valid Amount!",
  footer: '<a href="#">Recheck Your Input</a>'
});
    return;
  }
  
})

// feni---------
document.getElementById('feni_donation').addEventListener('click', function(){
 
  const mainBalanceElement = document.getElementById('initial_amount');
  const mainAccountBalance = parseFloat(mainBalanceElement.innerText);


  const inputAmount = getInputValue('feni_input')
  if(inputAmount === 'number' || inputAmount > 0 && mainAccountBalance > 0 ){
   
donationCalculation('feni_donation_amount', inputAmount)
    // history tab function----
    const historyList = document.createElement('div');
    historyList.className = 'bg-white border-l-4 border-green-500 p-2'
    historyList.innerHTML = `
    <h2 class="text-2xl font-semibold ml-2 flex">
    <img src="assets/coin.png" alt="" /> 
    <span class="font-bold text-green-500 text-3xl ml-2 mr-2">
    ${inputAmount} </span> BDT donated for Flood Relief in Feni,Bangladesh.
    </h2> 
   <p><span class="text-xl font-semibold">Donated Date: </span> ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</p>
    `
    const historyContainer = document.getElementById('history_container');
    historyContainer.insertBefore(historyList, historyContainer.firstChild)



 Swal.fire({
   position: "top-end",
   icon: "success",
   title: `Thanks For Your Donation!
    <div class="flex justify-center items-center"> You Have Donated 
    <img class="mx-0" src="assets/coin.png" alt="" /> <span class="mx-0 font-bold text-green-500 text-3xl ml-2 mr-2 mb-2">
     ${inputAmount}</span> BDT </div>`,
   showConfirmButton: false,
   timer: 1500
 });
    
  } else{
    
Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Please Put A Valid Amount!",
  footer: '<a href="#">Recheck Your Input</a>'
});
    return;
  }
  

  
})

// Quota injured---
document.getElementById('quota_donation').addEventListener('click', function(){

  const mainBalanceElement = document.getElementById('initial_amount');
  const mainAccountBalance = parseFloat(mainBalanceElement.innerText);
 

  const inputAmount = getInputValue('quota_input')
  if(inputAmount === 'number' || inputAmount > 0 && mainAccountBalance > 0){

   donationCalculation('quota_donation_amount', inputAmount)
    // history tab function----
    const historyList = document.createElement('div');
    historyList.className = 'bg-white border-l-4 border-green-500 p-2'
    historyList.innerHTML = `
    <h2 class="text-2xl font-semibold ml-2 flex"><img src="assets/coin.png" alt="" /> 
    <span class="font-bold text-green-500 text-3xl ml-2 mr-2">
    ${inputAmount} </span> BDT donated for Aid for Injured in the Quota Movement.
    </h2> 
   <p><span class="text-xl font-semibold">Donated Date: </span> ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</p>
    `
    const historyContainer = document.getElementById('history_container');
    historyContainer.insertBefore(historyList, historyContainer.firstChild)



 Swal.fire({
   position: "top-end",
   icon: "success",
   title: `Thanks For Your Donation!
   <div class="flex justify-center items-center"> You Have Donated 
    <img class="mx-0" src="assets/coin.png" alt="" /> <span class="mx-0 font-bold text-green-500 text-3xl ml-2 mr-2 mb-2">
     ${inputAmount}</span> BDT </div>`,
   showConfirmButton: false,
   timer: 1500
 });
    
  } else{
    
Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Please Put A Valid Amount!",
  footer: '<a href="#">Recheck Your Input</a>'
});
    return;
  }
  
  
})