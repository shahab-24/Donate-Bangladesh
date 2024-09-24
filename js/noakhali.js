
// for Noakhali-----

document.getElementById('noakhali_donation').addEventListener('click', function(){
  const initialAmount = document.getElementById('initial_amount').innerText;
const initialSum = parseFloat(initialAmount);

  const inputAmount = getInputValue('noakhali_input')
  if(inputAmount === 'number' || inputAmount > 0){
    const areaWiseAmount = getInnerText('noakhali_donation_amount');

    const totalAmount = inputAmount + areaWiseAmount;
    const finalTotal = initialSum - totalAmount;
  
    document.getElementById('noakhali_donation_amount').innerText = totalAmount;
    document.getElementById('initial_amount').innerText = finalTotal;


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



    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `Thanks For Your Donation!
       You Have Donated <span class="font-bold text-green-500 text-3xl">${inputAmount}</span> BDT`,
      showConfirmButton: false,
      timer: 1500
    });
    
  } else{
    
Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Please Put A Valid Number or Valid Amount!",
  footer: '<a href="#">Recheck Your Input</a>'
});
    return;
  }
  
})




// for Feni---

document.getElementById('feni_donation').addEventListener('click', function(){
  const initialAmount = document.getElementById('initial_amount').innerText;
  const initialSum = parseFloat(initialAmount);
  

  const inputAmount = getInputValue('feni_input')
  if(inputAmount === 'number' || inputAmount > 0){
    const areaWiseAmount = getInnerText('feni_donation_amount');

    const totalAmount = inputAmount + areaWiseAmount;
    const finalTotal = initialSum - totalAmount;
    
    document.getElementById('feni_donation_amount').innerText = totalAmount;
    document.getElementById('initial_amount').innerText = finalTotal;

    // history tab function----
    const historyList = document.createElement('div');
    historyList.className = 'bg-white border-l-4 border-green-500 p-2'
    historyList.innerHTML = `
    <h2 class="text-2xl font-semibold ml-2 flex"><img src="/assets/coin.png" alt="" /> 
    <span class="font-bold text-green-500 text-3xl ml-2 mr-2">
    ${inputAmount} </span> BDT donated for "Donate for Flood Relief in Feni,Bangladesh"
    </h2> 
   <p><span class="text-xl font-semibold">Donated Date: </span> ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</p>
    `
    const historyContainer = document.getElementById('history_container');
    historyContainer.insertBefore(historyList, historyContainer.firstChild)



 Swal.fire({
   position: "top-end",
   icon: "success",
   title: `Thanks For Your Donation!
    You Have Donated <span class="font-bold text-green-500 text-3xl">${inputAmount}</span> BDT`,
   showConfirmButton: false,
   timer: 1500
 });
    
  } else{
    
Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Please Put A Valid Number or Valid Amount!",
  footer: '<a href="#">Recheck Your Input</a>'
});
    return;
  }
  

  
})





// Quota injured---

document.getElementById('quota_donation').addEventListener('click', function(){
 
const initialAmount = document.getElementById('initial_amount').innerText;
const initialSum = parseFloat(initialAmount);

  const inputAmount = getInputValue('quota_input')
  if(inputAmount === 'number' || inputAmount > 0){
    const areaWiseAmount = getInnerText('quota_donation_amount');
    console.log(areaWiseAmount);


    const totalAmount = inputAmount + areaWiseAmount;
    const finalTotal = initialSum - totalAmount;
  
    document.getElementById('quota_donation_amount').innerText = totalAmount;
    document.getElementById('initial_amount').innerText = finalTotal;

    // history tab function----
    const historyList = document.createElement('div');
    historyList.className = 'bg-white border-l-4 border-green-500 p-2'
    historyList.innerHTML = `
    <h2 class="text-2xl font-semibold ml-2 flex"><img src="/assets/coin.png" alt="" /> 
    <span class="font-bold text-green-500 text-3xl ml-2 mr-2">
    ${inputAmount} </span> BDT donated for "Aid for Injured in the Quota Movement"
    </h2> 
   <p><span class="text-xl font-semibold">Donated Date: </span> ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</p>
    `
    const historyContainer = document.getElementById('history_container');
    historyContainer.insertBefore(historyList, historyContainer.firstChild)



 Swal.fire({
   position: "top-end",
   icon: "success",
   title: `Thanks For Your Donation!
    You Have Donated <span class="font-bold text-green-500 text-3xl">${inputAmount}</span> BDT`,
   showConfirmButton: false,
   timer: 1500
 });
    
  } else{
    
Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Please Put A Valid Number or Valid Amount!",
  footer: '<a href="#">Recheck Your Input</a>'
});
    return;
  }
  
  
})