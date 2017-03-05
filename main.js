//SHUFFLE FUNCTION
var keyArray = Object.keys(myData);

function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

keyArray = shuffle(keyArray); // shuffle it!

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
    "<tr><td><button id='button' type='button' onclick='check(i);' value='Check'>Check</button></tr></td>";
}

document.getElementById("lista").innerHTML = table;

/*
var currentQuestion = 0;

function displayQuestion() {
    if(currentQuestion < keyArray.length) { // if there's still questions to display
        var current = myData[keyArray[i]]; // get the question to display
        var questionHtml = current.description;// generate the HTML for the question here
        $('#questions').html(questionHtml);
        currentQuestion += 1; // increase tracking index
    }
    else {
        finished();
    }
} */

//CHECK
function check(i) {

  var name_debit = document.getElementById("accounts_debit").value;
  var name_credit = document.getElementById("accounts_credit").value;


    if (name_debit == current.debitname && name_credit == current.creditname) {
      alert('Perfect!');
    } else {
      alert('Try again!');
    };

  };

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
