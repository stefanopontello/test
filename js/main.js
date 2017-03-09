//SHUFFLE FUNCTION
var keyArray = Object.keys(myData);

function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

keyArray = shuffle(keyArray); // shuffle it!

//DISPLAY RESULTS
var i = 0;
displayCD(i);
var table="";
function displayCD(i) {
    var current = myData[keyArray[i]];
    table = "<tr><td colspan='3'><h3>" + 
    current.description +
    "</h3></td></tr><tr><td><select id='accounts_debit' class='multiple' data-live-search='true'></select></td>" +
    "<td><input type='number' class='form-control barra-importo' id='amount_debit' name='question1'></td>" +
    "<td><input type='number' class='form-control barra-importo' id='2' disabled>" +
    "</td></tr><tr><td><select id='accounts_credit' class='multiple' data-live-search='true'></select></td>" +
    "<td><input type='number' class='form-control barra-importo' id='3' disabled></td>" +
    "<td><input type='number' class='form-control barra-importo'id='amount_credit' name='question2'></td>" +
    "<tr><td colspan='3'><button id='button' type='button' onclick='check(i);' value='Check'>Check</button></tr>";
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

function next() {
if (i < keyArray.length-1) {
  i++;
  document.getElementById("results").innerHTML = "";
  document.getElementById("showbutton").innerHTML = "";
  displayCD(i);
  } else {
      document.getElementById("showbutton").innerHTML = "<input type='button' onclick='getScore()' value='Get Score'>"
  }
}

function previous() {
if (i > 0) {
  i--;
  document.getElementById("results").innerHTML = "";
  displayCD(i);
  }
}

var score = 0;

//CHECK
function check(i) {
  var current = myData[keyArray[i]];
  var name_debit = document.getElementById("accounts_debit").value;
  var name_credit = document.getElementById("accounts_credit").value;
  var amount_debit = document.getElementById("amount_debit").value;
  var amount_credit = document.getElementById("amount_credit").value;

    if (name_debit == current.debitname && name_credit == current.creditname && amount_debit == current.amount && amount_credit == current.amount) {
      //document.getElementById("results").innerHTML = "<img src='https://media.giphy.com/media/GCLlQnV7wzKLu/giphy.gif'>";
      next();
      score++

    } else {
      //document.getElementById("results").innerHTML = "<img src='http://gifrific.com/wp-content/uploads/2012/04/NPH-dissapoint.gif'>";
      next();
    };

  };

function getScore (){
  if(score >= 3) {
    document.getElementById("results").innerHTML = "<h4>Well done, your score is " + score + "!<br><br><img src='https://media.giphy.com/media/GCLlQnV7wzKLu/giphy.gif'>";
  } else {
    document.getElementById("results").innerHTML = "<h4>You can do better, your score is " + score + ".<br><br><img src='http://gifrific.com/wp-content/uploads/2012/04/NPH-dissapoint.gif'>";
  }
}


var seleziona = document.getElementById("prova");
  for(var f = 0, l = options.length; f < l; f++){
    var option = options[f];
    seleziona.options.add( new Option(option.text, option.value, option.selected) );
  };


//SELECTPICKER
$('.selectpicker').selectpicker({
  width: 300
});