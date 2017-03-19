/*!
 * Double-Entry Bookkeeping Exercises & Test
 * Author: Stefano Pontello
 */

// Shuffle function
var keyArray = Object.keys(myData);

function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

keyArray = shuffle(keyArray); // shuffle it!

// Display entryonce at a time
var i = 0;
displayCD(i);
var table="";
function displayCD(i) {
    document.getElementById('danger-alert').innerHTML = "";
    var current = myData[keyArray[i]];
    table = "<tr><td colspan='3'><h3>" + 
    current.description +
    "</h3></td></tr><tr><td><select id='accounts_debit' class='multiple' data-live-search='true'><option value='undefined' id='choice' selected> - Select the account - </option></select></td>" +
    "<td><input type='number' class='form-control barra-importo' id='amount_debit' min='0' required></td>" +
    "<td><input type='number' class='form-control barra-importo' min='0' disabled>" +
    "</td></tr><tr><td><select id='accounts_credit' class='multiple' data-live-search='true'><option value='undefined' id='choice' selected> - Select the account - </option></select></td>" +
    "<td><input type='number' class='form-control barra-importo' min='0' disabled></td>" +
    "<td><input type='number' class='form-control barra-importo'id='amount_credit' min='0' required></td></tr>" +
    "<tr><td colspan='3'><input type='button' onclick='previous()' value='<<' class='button'><input type='button' onclick='next()' value='Skip' class='button'><div id='showbutton' class='button'></div><button class='button' id='button' type='button' onclick='check(i);' value='Check'>Check</button></tr>";
    
    document.getElementById("lista").innerHTML = table;

    var selectBox = document.getElementById("accounts_debit");
    for(var f = 0, l = options.length; f < l; f++){
      var option = options[f];
      selectBox.options.add( new Option(option.text, option.value, option.selected) );
    }

    var selectBox2 = document.getElementById("accounts_credit");
    for(var f = 0, l = options.length; f < l; f++){
      var option = options[f];
      selectBox2.options.add( new Option(option.text, option.value, option.selected) );
    }
  }

// Next entry
function next() {
if (i < keyArray.length-1) {
  i++;
  document.getElementById("results").innerHTML = "";
  document.getElementById("showbutton").innerHTML = "";
  displayCD(i);
  } else {
      document.getElementById("showbutton").innerHTML = "<input type='button' onclick='getScore()' data-toggle='modal' data-target='#myModal' value='Get Score' class='button'>"
  }
}

// Previous entry
function previous() {
if (i > 0) {
  i--;
  document.getElementById("results").innerHTML = "";
  displayCD(i);
  }
}

var score = 0;
// Check entry
function check(i) {
  var current = myData[keyArray[i]];
  var name_debit = document.getElementById("accounts_debit").value;
  var name_credit = document.getElementById("accounts_credit").value;
  var amount_debit = document.getElementById("amount_debit").value;
  var amount_credit = document.getElementById("amount_credit").value;

    if (name_debit == 'undefined' || name_credit == 'undefined' || amount_debit == '' || amount_credit == '') {
      document.getElementById('danger-alert').innerHTML = "<div class='alert alert-warning' role='alert'>Please fill in all the fields</div>";
    } else {
      document.getElementById('danger-alert').innerHTML = "";
      if (name_debit == current.debitname && name_credit == current.creditname && amount_debit == current.amount && amount_credit == current.amount) {
      document.getElementById('danger-alert').innerHTML = "<div class='alert alert-success' role='alert'>Correct! <input type='button' onclick='next()' value='Next' class='button'></div>";
      score++
      } else {
      document.getElementById('danger-alert').innerHTML = "<div class='alert alert-danger' role='alert'>Incorrect!</div>";
      };
    };
  }

// Get score function (on modal)
function getScore(){
  if(score >= 3) {
    document.getElementById("modal-results").innerHTML = "<h4>Well done, your score is " + score + " / " + numberquestions + "!<br><br><img src='https://media.giphy.com/media/GCLlQnV7wzKLu/giphy.gif'>";
  } else {
    document.getElementById("modal-results").innerHTML = "<h4>You can do better, your score is " + score + " / " + numberquestions + ".<br><br><img src='http://gifrific.com/wp-content/uploads/2012/04/NPH-dissapoint.gif'>";
  }
}


/*  for(var f = 0, l = options.length; f < l; f++){
    var option = options[f];
    document.getElementById("prova").append = "<option value='" + option.value + "'>" + option.text + "</option>";
};*/

for(f=0; f<options.length; f++) {
  $('#prova').append("<option value='" + options[f].value + "'>" + options[f].text + "</option>");                      
}

//SELECTPICKER
$('.selectpicker').selectpicker({
  width: 300
});

// Reload page (for modal)
function reload() {location.reload();}

function getDataAccount(str){
    if (str.value == 'Liability') {
    document.getElementById("txtHint").innerHTML = "Name of the account: " + str.text;
  } else {
    document.getElementById("txtHint").innerHTML = "Hola amigos";
  }
};