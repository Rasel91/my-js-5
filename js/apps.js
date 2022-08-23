

const playerArray=[];

function display(teamPlayer){
    // console.log(teamPlayer);
  const tableBody = document.getElementById('player-select');
  tableBody.innerHTML = '';

    for(let i = 0; i<teamPlayer.length; i++){
    //  console.log(playerArray[i].playerName);
     const name = playerArray[i].playerName;
      console.log(name);

     const tr = document.createElement('tr');
     tr.innerHTML =`
         <th>${i+1}</th>
        <td>${name}</td>
     
     `;
     tableBody.appendChild(tr);

    }

}

function addTocart(element){
 
    // console.log(element.parentNode.children[0].innerText);

    const playerName= element.parentNode.children[0].innerText;
    console.log(playerName);

    const playerObj ={
        playerName : playerName,
    };

  playerArray.push(playerObj);

// console.log(playerArray);
// console.log(playerArray.length);



if( playerArray.length == 6){
  return true;
  
}else 
{
  alert;
}

document.getElementById('Select-Total').innerText = playerArray.length;

display(playerArray);

}


// =============================
// step-1
document.getElementById('btn-calculate').addEventListener('click',function(){
// step-2
  const perPlayerCoast = document.getElementById('per-player-cost');
  const perPlayerCoastString = perPlayerCoast.value;
  const perPlayerCoastAmount = parseFloat(perPlayerCoastString);
  // console.log(perPlayerCoastAmount);
  // step-3
  perPlayerCoast.value = '';
// step-4
  const calculateField = document.getElementById('all-player-cost');
  const calculateFieldString = calculateField.innerText;
  const newcalculateFieldAmount = parseFloat(calculateFieldString);

  // step-5

  const allPlayerTkCalculation =newcalculateFieldAmount+ perPlayerCoastAmount;
  calculateField.innerText = allPlayerTkCalculation*playerArray.length;  

  return calculateField;

   


});




document.getElementById('btn-total-calculation').addEventListener('click', function(){

  const managerSalaryField = document.getElementById('manager-salary');
  const managerSalaryFieldString = managerSalaryField.value;
  const managerSalaryFieldAmount = parseFloat(managerSalaryFieldString);

  // console.log(managerSalaryFieldAmount);

  managerSalaryField.value= '';

  const coachSalaryField = document.getElementById('coach-salary');
  const coachSalaryFieldString = coachSalaryField.value;
  const coachSalaryFieldAmount = parseFloat(coachSalaryFieldString);

  coachSalaryField.value = '';
  // console.log(coachSalaryFieldAmount);

 const newAdd =  coachSalaryFieldAmount+managerSalaryFieldAmount;


 const allExpensesField = document.getElementById('all-expense');
 const allExpensesFieldString = allExpensesField.innerText;
 const allExpensesFieldAmount = parseFloat(allExpensesFieldString);



 const totalExpense = allExpensesFieldAmount+newAdd ;
 allExpensesField.innerText = totalExpense  ;



})