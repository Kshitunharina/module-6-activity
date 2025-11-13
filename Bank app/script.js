
var credit_button = document.getElementById("credit");
var debit_button = document.getElementById("debit");

credit_button.addEventListener('click', function(){
	var current_balance_el = document.getElementById('balance');
	var entered_amount_el = document.getElementById("amount").value;
	var message_el = document.getElementById('message');
	var account_balance = parseInt(current_balance_el.innerText) + parseInt(entered_amount_el);
	if(!entered_amount_el){
		message_el.innerText = "Please enter amount.";
		message_el.style.color = "#ff0000";
	}
	else{
		if(parseInt(entered_amount_el) > 0 ){
			current_balance_el.innerText = parseInt(account_balance); 
			message_el.innerText = "";
		}
		else{
			message_el.innerText = "Please enter amount greater than 0";
			message_el.style.color = "#ff0000";
		}
	}
	entered_amount_el.value = "0"; 
});

debit_button.addEventListener('click', function(){
	var current_balance_el = document.getElementById('balance');
	var entered_amount_el = document.getElementById("amount").value;
	var message_el = document.getElementById('message');
	var account_balance = parseInt(current_balance_el.innerText) - parseInt(entered_amount_el);
	
	if(!entered_amount_el){
		message_el.innerText = "Please enter amount.";
		message_el.style.color = "#ff0000";
	}
	else if(parseInt(entered_amount_el) > parseInt(current_balance_el.innerText)){
		message_el.innerText = "You don't have balance.Please enter lesser amount.";
		message_el.style.color = "#ff0000";
	}
	else{
		current_balance_el.innerText = parseInt(account_balance);  
		message_el.innerText = "";
	}
	entered_amount_el.value = "0"; 
});