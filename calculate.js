function calculateTip() {

    var amount = document.getElementById('bill').value;
    var persons = document.getElementById('count').value;
    var tip = 0;
    if(document.getElementById('5').checked) {
        tip = document.getElementById('5').value;  
    }
    else if(document.getElementById('10').checked) {
        tip = document.getElementById('10').value;
    }
    else if(document.getElementById('15').checked) {
        tip = document.getElementById('15').value;
    }
  else if(document.getElementById('20').checked) {
        tip = document.getElementById('20').value;
    }
  else if(document.getElementById('25').checked) {
        tip = document.getElementById('25').value;
    }
  else{
    var ntip = (document.getElementById('cutm').value)/100;
    tip = ntip.toFixed(2);
    
  }

    if (amount === '' && tip === '0') {
        alert("Please enter valid values");
        return;
    }
    var total = (amount * tip) / persons;
    total = total.toFixed(2);

    document.getElementById('tipamt').innerHTML = total;

    var all = amount/ persons;
    all = all.toFixed(2);
    document.getElementById('totalperson').innerHTML = all;

};
function normal(){
document.getElementById('tipamt').innerHTML = '$0.00';
document.getElementById('totalperson').innerHTML = '$0.00';
};