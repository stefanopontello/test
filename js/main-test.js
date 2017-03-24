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

// Display entry once at a time
var i = 0;
//displayCD(i);
var table="";
function displayCD(i) {
    var current = myData[keyArray[i]];
    table = "<tr><td colspan='3'><h3>" + 
    current.description +
    "</h3></td></tr><tr><td><select id='accounts_debit' class='multiple' data-live-search='true'><option value='undefined' id='choice' selected> - Select the account - </option></select></td>" +
    "<td><input type='number' class='form-control barra-importo' id='amount_debit' min='0' required></td>" +
    "<td><input type='number' class='form-control barra-importo' min='0' disabled>" +
    "</td></tr><tr><td><select id='accounts_credit' class='multiple' data-live-search='true'><option value='undefined' id='choice' selected> - Select the account - </option></select></td>" +
    "<td><input type='number' class='form-control barra-importo' min='0' disabled></td>" +
    "<td><input type='number' class='form-control barra-importo'id='amount_credit' min='0' required></td></tr>" +
    "<tr><td colspan='3'><input type='button' onclick='previous()' value='<<' class='button'><input type='button' onclick='next()' value='>>' class='button'><div id='showbutton' class='button'></div><button class='button' id='button' type='button' onclick='check(i);' value='Check'>Check</button></tr>";
    
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
if (i < numberquestions-1) {
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
var errors = [];
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
      next();
      score++
      } else {
        var newValue = { 'I_DN': name_debit, 'C_DN': current.debitname, 'I_CN': name_credit, 'C_CN': current.creditname, 'I_AD': amount_debit, 'C_AD': current.amount, 'I_AC': amount_credit, 'C_AC': current.amount};
        errors.push(newValue);
      }
        console.log(errors);
        next();
      };
    };

// Get score function (on modal)
function getScore(){
  if(score >= numberquestions * 0.5) {
    document.getElementById("modal-results").innerHTML = "<h4>Well done, your score is " + score + " / " + numberquestions + "!<br><br><img src='https://media.giphy.com/media/GCLlQnV7wzKLu/giphy.gif'>";
  } else {
    document.getElementById("modal-results").innerHTML = "<h4>You can do better, your score is " + score + " / " + numberquestions + ".<br><br><img src='http://gifrific.com/wp-content/uploads/2012/04/NPH-dissapoint.gif'>";
    var l;
    for (l=0; l<errors.length; l++)
    {
      document.getElementById("solutions").innerHTML += "<h3>Error:<br><br>" +
      "<table class='solutions-style-err table table-nonfluid'><tr><td>" + errors[l].I_DN + "</td><td>" + errors[l].I_AD + "</td><td><input type='number' class='form-control barra-importo' min='0' disabled></td></tr>" +
      "<tr><td>" + errors[l].I_CN + "</td><td><input type='number' class='form-control barra-importo' min='0' disabled></td><td>" + errors[l].I_AC + "</td></tr></table>" +
      "<table class='solutions-style-sol table table-nonfluid'><tr><td>" + errors[l].C_DN + "</td><td>" + errors[l].C_AD + "</td><td><input type='number' class='form-control barra-importo' min='0' disabled></td></tr>" +
      "<tr><td>" + errors[l].C_CN + "</td><td><input type='number' class='form-control barra-importo' min='0' disabled></td><td>" + errors[l].C_AC + "</td></tr></table>";
    }
  }
}

//SELECTPICKER
$('.selectpicker').selectpicker({
  width: 300
});

// Reload page (for modal)
function reload() {
  location.reload();
}

// Set number of questions
var numberquestions = 0;
function startquestion() {
  numberquestions = document.getElementById("number-question").value;
  if (numberquestions <= 0) {
    document.getElementById('danger-alert').innerHTML = "<div class='alert alert-warning' role='alert'>Please fill in all the fields</div>";
  } else {
  document.getElementById('danger-alert').innerHTML = "";
  document.getElementById('form-number-question').innerHTML = "";
  displayCD(i);
  }
};

// Timer-test
function clock() {
  // Collect time + minutes
  var time_in_minutes = document.getElementById('timer-test').value;
  if (time_in_minutes <= 0) {
    document.getElementById('danger-alert').innerHTML = "<div class='alert alert-warning' role='alert'>Please fill in all the fields</div>";
  } else {
  document.getElementById('danger-alert').innerHTML = "";
  var current_time = Date.parse(new Date());
  var deadline = new Date(current_time + time_in_minutes*60*1000);
}
  // Calculate time
  function time_remaining(endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );
    return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
  }

  // Run clock
  function run_clock(id,endtime){
    var clock = document.getElementById(id);
    function update_clock(){
      var t = time_remaining(endtime);
      clock.innerHTML = 'Time remaining: ' + t.minutes + ':' + t.seconds + ' min';
      if(t.total<=0){ 
        document.getElementById('barra').innerHTML = ("<div class='time-out-screen'><input type='button' onclick='getScore()' data-toggle='modal' data-target='#myModal' value='Get Score' class='button time-out-button'></div>");
        clearInterval(timeinterval); }
    }
    update_clock(); // run function once at first to avoid delay
    var timeinterval = setInterval(update_clock,1000);
  }
  run_clock('clockdiv',deadline);
}