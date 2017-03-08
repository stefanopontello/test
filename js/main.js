$(document).ready(

$('.selectpicker').selectpicker({
  size: 5
})

);



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
    "</h3></td></tr><tr><td><select id='accounts_debit' class=' multiple' data-live-search='true'></select></td>" +
    "<td><input type='number' class='form-control barra-importo' id='textbox' name='question1'></td>" +
    "<td><input type='number' class='form-control barra-importo' id='2' disabled>" +
    "</td></tr><tr><td><select id='accounts_credit' class='selectpicker' data-live-search='true'></select></td>" +
    "<td><input type='number' class='form-control barra-importo' id='3' disabled></td>" +
    "<td><input type='number' class='form-control barra-importo'id='4' name='question2'></td>" +
    "<tr><td><button id='button' type='button' onclick='check(i);' value='Check'>Check</button></tr>";
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

    if (name_debit == current.debitname && name_credit == current.creditname) {
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
    document.getElementById("results").innerHTML = "<h4>Compliments, your score is " + score + "!<br><br><img src='https://media.giphy.com/media/GCLlQnV7wzKLu/giphy.gif'>";
  } else {
    document.getElementById("results").innerHTML = "<h4>You can do better, your score is " + score + ".<br><br><img src='http://gifrific.com/wp-content/uploads/2012/04/NPH-dissapoint.gif'>";
  }
}
/*function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="";
  var x = xmlDoc.getElementsByTagName("CD1");
  for (i = 0; i <x.length; i++) { 
    var random_numb = Math.floor(Math.random() * 10000);

    table += "<tr><td colspan='3'><h3>" +
    x[i].getElementsByTagName("DESCRIPTION1")[0].childNodes[0].nodeValue +
    random_numb +
    x[i].getElementsByTagName("DESCRIPTION2")[0].childNodes[0].nodeValue +
    "</h3></td></tr><tr><td><select id='accounts_debit'><option value='Cash'>Cash</option><option value='Accounts receivable'>Accounts receivable</option><option value='Furniture'>Furniture</option><option value='Supplies'>Supplies</option><option value='Accounts payable'>Accounts payable</option></select>" +
    "</td><td><input type='text' id='textbox' name='question1'></td>" +
    "<td><input type='text' id='2' disabled>" +
    "</td></tr><tr><td><select id='accounts_credit'><option value='Cash'>Cash</option><option value='Accounts receivable'>Accounts receivable</option><option value='Furniture'>Furniture</option><option value='Supplies'>Supplies</option><option value='Accounts payable'>Accounts payable</option></select>" +
    "</td><td><input type='text' id='3' disabled></td>" +
    "<td><input type='text' id='4' name='question2'></td>" +
    "<tr><td><button id='button' type='button' onclick='check();' value='Check'>Check</button></tr></td>";
    check(this);
  }
  document.getElementById("lista").innerHTML = table;
}
*/

/*
//DISPLAY RESULTS
var table="";
for (var i = 0; i < keyArray.length; ++i) {
    var current = myData[keyArray[i]];
    table += "<tr><td colspan='3'><h3>" + 
    current.description +
    "</h3></td></tr><tr><td><select id='accounts_debit'><option value='Cash'>Cash</option><option value='Accounts receivable'>Accounts receivable</option><option value='Furniture'>Furniture</option><option value='Supplies'>Supplies</option><option value='Accounts payable'>Accounts payable</option></select>" +
    "</td><td><input type='number' id='textbox' name='question1'></td>" +
    "<td><input type='number' id='2' disabled>" +
    "</td></tr><tr><td><select id='accounts_credit'><option value='Cash'>Cash</option><option value='Accounts receivable'>Accounts receivable</option><option value='Furniture'>Furniture</option><option value='Supplies'>Supplies</option><option value='Accounts payable'>Accounts payable</option></select>" +
    "</td><td><input type='number' id='3' disabled></td>" +
    "<td><input type='number' id='4' name='question2'></td>" +
    "<tr><td><button id='button' type='button' onclick='check();' value='Check'>Check</button></tr>";
};

document.getElementById("lista").innerHTML = table;*/

