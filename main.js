//RUN SCRIPT ON LOADING
loadDoc();
//AJAX
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET", "https://stefanopontello.github.io/cd_catalog.xml", true);
  xhttp.send();
}


function myFunction(xml) {
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
  }
  document.getElementById("lista").innerHTML = table;
}


//CHECK
function check(x, i) {
  var name_debit = document.getElementById("accounts_debit").value;
  var name_credit = document.getElementById("accounts_credit").value;

    if (name_debit == x[i].getElementsByTagName("DEBITNAME")[0].childNodes[0].nodeValue && name_credit == x[i].getElementsByTagName("CREDITNAME")[0].childNodes[0].nodeValue) {
      alert('Perfect!');
    } else {
      alert('Try again!');
    };

  };




/*//CHECK
function check() {
  var debit = document.quiz.question1.value;
  var credit = document.quiz.question2.value;
  var name_debit = document.getElementById("accounts_debit").value;
  var name_credit = document.getElementById("accounts_credit").value;

    if (debit == random_numb && credit == random_numb && name_debit == "Furniture" && name_credit == "Accounts payable") {
      alert('Perfect!');
    } else {
      alert('Try again!');
    };

  };*/



/*//RANDOM NUMBER
    var random_numb = Math.floor(Math.random() * 10000);
    document.getElementById("amount").innerHTML = random_numb;
    document.quiz.question1.value = random_numb;
    document.quiz.question2.value = random_numb;
*/

/*
//AJAX
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET", "http://localhost/double_entry/cd_catalog.xml", true);
  xhttp.send();
}

function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="";
  var x = xmlDoc.getElementsByTagName("CD1");
  for (i = 0; i <x.length; i++) { 
    var random_numb = Math.floor(Math.random() * 10000);
    document.getElementById("amount").innerHTML = random_numb;

    table += "<tr><td colspan='3'>" +
    x[i].getElementsByTagName("DESCRIPTION1")[0].childNodes[0].nodeValue +
    random_numb +
    x[i].getElementsByTagName("DESCRIPTION2")[0].childNodes[0].nodeValue +
    "</td></tr><tr><td><select id='accounts_debit'><option value='Cash'>Cash</option><option value='Accounts receivable'>Accounts receivable</option><option value='Furniture'>Furniture</option><option value='Supplies'>Supplies</option><option value='Accounts payable'>Accounts payable</option></select>" +
    "</td><td><input type='text' id='textbox' name='question1' value=''></td>" +
    "<td><input type='text' id='2' disabled>" +
    "</td></tr><tr><td><select id='accounts_credit'><option value='Cash'>Cash</option><option value='Accounts receivable'>Accounts receivable</option><option value='Furniture'>Furniture</option><option value='Supplies'>Supplies</option><option value='Accounts payable'>Accounts payable</option></select>" +
    "</td><td><input type='text' id='3' disabled></td>" +
    "<td><input type='text' id='4' name='question2'></td>" +
    "<tr><td><button id='button' type='button' onclick='check();' value='Check'>Check</button></tr></td>";

    document.quiz.question1.value = random_numb;
    document.quiz.question2.value = random_numb;

  }
  document.getElementById("lista").innerHTML = table;
}  */

