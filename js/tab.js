
document.getElementById('btn_history_tab').addEventListener('click', function(){
  const historyTab = document.getElementById('btn_history_tab');
  historyTab.classList.add('bg-[#B4F461]',
    'rounded-md',
    'py-4',
    'px-8', 
    'font-semibold',
    'text-2xl');

    const donateTab = document.getElementById('btn_donate_tab');
    donateTab.classList.remove('bg-[#B4F461]',
    'rounded-md',
    'py-4',
    'px-8', 
    'font-semibold',
    'text-2xl') 
    donateTab.classList.add('rounded-md','py-4','px-8','font-semibold','text-2xl', 'border-2');

    const cardContainer = document.getElementById('card_container');
    cardContainer.classList.add('hidden');

    const historyList = document.getElementById('history_list');
    historyList.classList.remove('hidden');
    
})



// donate tab-----------

document.getElementById('btn_donate_tab').addEventListener('click', function(){
  console.log('tab');
  const donateTab = document.getElementById('btn_donate_tab');
  donateTab.classList.add('bg-[#B4F461]',
    'rounded-md',
    'py-4',
    'px-8', 
    'font-semibold',
    'text-2xl');
  
    const historyTab = document.getElementById('btn_history_tab');
    historyTab.classList.remove('bg-[#B4F461]',
    'rounded-md',
    'py-4',
    'px-8', 
    'font-semibold',
    'text-2xl') ;
  
  historyTab.classList.add('rounded-md','py-4','px-8','font-semibold','text-2xl', 'border-2');

    const cardContainer = document.getElementById('card_container');
    cardContainer.classList.remove('hidden');

    const historyList = document.getElementById('history_list');
    historyList.classList.add('hidden');

})