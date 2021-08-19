// handle deposit button even 

document.getElementById('deposit-button').addEventListener('click', function(){

    // get the amount deposited 

    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // console.log(newDepositAmount);

    const depositTotal = document.getElementById('deposit-total');
   

    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);
    //  console.log(depositTotal);

    const newDepositTotal = previousDepositAmount + newDepositAmount;
     

     depositTotal.innerText = newDepositTotal;



    //  updates account balance

    const balanceTotal = document.getElementById('balance-total');
     const balanceTotalText = balanceTotal.innerText;
     const previousBalanceTotal = parseFloat( balanceTotalText);
    //  console.log( previousBalanceTotal);
    const newBalanceTotal = newDepositAmount + previousBalanceTotal;
    
    balanceTotal.innerText = newBalanceTotal;

       //  clear the input deposit field 

       depositInput.value ='';
    })


    // handle withdraw even handler

    document.getElementById( 'withdraw-button').addEventListener('click',function(){

    const withDrawInput = document.getElementById('withdraw-input');
    const withDrawAmountText = withDrawInput.value;
    const newDrawAmount = parseFloat(withDrawAmountText);

    // set withdrawTotal Amount
    const withDrawTotal = document.getElementById('withdraw-total');
     
    const previousWithDrawText = withDrawTotal.innerText;
    
    const previousWithDrawTotal = parseFloat(previousWithDrawText);

    const newWithDrawTotal = previousWithDrawTotal + newDrawAmount;
    
    withDrawTotal.innerText = newWithDrawTotal;
     
        // update balance 

        const balanceTotal = document.getElementById( 'balance-total');
        const previousBalanceTotal = balanceTotal.innerText;
        const newBalanceTotal = parseFloat(previousBalanceTotal);

       

        const upDateBalance = newBalanceTotal - newWithDrawTotal;
        balanceTotal.innerText = upDateBalance;
        


        //  clear the input withdraw field 
       
        withDrawInput.value = '';




   })


 