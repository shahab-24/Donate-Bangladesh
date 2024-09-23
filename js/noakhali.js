const initialAmount = document.getElementById('initial_amount').innerText;

const initialSum = parseFloat(initialAmount);





// for Noakhali-----
document.getElementById('noakhali_donation').addEventListener('click', function(){
  console.log('connected from noakhali');

  // const inputValue = document.getElementById('noakhali_input').value;
  // const inputAmount = parseFloat(inputValue);

  const inputAmount = getInputValue('noakhali_input')
  if(inputAmount === 'number' || inputAmount > 0){
    const areaWiseAmount = getInnerText('noakhali_donation_amount')


    const totalAmount = inputAmount + areaWiseAmount;
    console.log(totalAmount);
    
    const finalTotal = initialSum - totalAmount;
    console.log(finalTotal);
    
  
  
    document.getElementById('noakhali_donation_amount').innerText = totalAmount;
    document.getElementById('initial_amount').innerText = finalTotal;
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `Thanks For Your Donation!
       You Have Donated ${inputAmount} BDT`,
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
  

  // const noakhaliInitial = document.getElementById('noakhali_donation_amount').innerText;
  // const noakhaliAmount = parseFloat(noakhaliInitial)
  

 
  
})

// for Feni---

document.getElementById('feni_donation').addEventListener('click', function(){
  console.log('connected from noakhali');

  // const inputValue = document.getElementById('noakhali_input').value;
  // const inputAmount = parseFloat(inputValue);

  const inputAmount = getInputValue('feni_input')
  if(inputAmount === 'number' || inputAmount > 0){
    const areaWiseAmount = getInnerText('feni_donation_amount')


    const totalAmount = inputAmount + areaWiseAmount;
    console.log(totalAmount);
    
    const finalTotal = initialSum - totalAmount;
    console.log(finalTotal);
    
  
  
    document.getElementById('feni_donation_amount').innerText = totalAmount;
    document.getElementById('initial_amount').innerText = finalTotal;
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `Thanks For Your Donation!
       You Have Donated ${inputAmount} BDT`,
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
  

  // const noakhaliInitial = document.getElementById('noakhali_donation_amount').innerText;
  // const noakhaliAmount = parseFloat(noakhaliInitial)
  

 
  
})