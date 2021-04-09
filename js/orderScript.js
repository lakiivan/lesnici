//funkcija za potvrdu porudzbine
function confirmOrder() {
  
  //var date = new Date();
  //console.log("Datum je " + date);

  var ukupnaCena = calculateUkupnaCena();

  var ime = document.getElementById("ime").value;
  var lesnikKol = document.getElementById("lesnikKol").value;
  var lesnikCena = document.getElementById("lesnikCena").value;
  var orahKol = document.getElementById("orahKol").value;
  var orahCena = document.getElementById("orahCena").value;

  //console.log("Ime porucioca je: " + ime);


  var message = "Porudzbina broj 7 je uspesno sacuvana \n";
  message += "Porucilac " + ime + "\n";
  if (lesnikKol != 0) {
    message += "je porucio " + lesnikKol + " kg lesnika po ceni od " + lesnikCena + "\n";  
  }
  if (orahKol != 0) {
    message += "je porucio " + orahKol + " kg oraha po ceni od " + orahCena + "\n";
  }
  message += "UKUPNA Vrednost porudzbine je " + ukupnaCena;
   alert(message);

}

function getDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth(); //January is 0!
  var yyyy = today.getFullYear();

  if(dd<10) {
      dd = '0'+dd
  }

  if(mm===0) {
      mm = 'Jan';
  } else if (mm===1) {
    mm='Feb';
  } else if (mm===2) {
    mm='Mar';
  } else if (mm===3) {
    mm='Apr';
  } else if (mm===4) {
    mm='Maj';
  } else if (mm===5) {
    mm='Jun';
  } else if (mm===6) {
    mm='Jul';
  } else if (mm===7) {
    mm='Avg';
  } else if (mm===8) {
    mm='Sep';
  }  else if (mm===9) {
    mm='Okt';
  } else if (mm===10) {
    mm='Nov';
  } else {
    mm='Dec';
  }

  var MM = mm;

  today = dd + '-' + MM + '-' + yyyy;
  console.log(today);
  document.getElementById("datum").value = today;
}


window.onload = function() {
  getDate();
};

function calculateUkupnaCena() {
  var ukupnaCena = 0;
  var lesnikKol = document.getElementById("lesnikKol").value;
  var lesnikCena = document.getElementById("lesnikCena").value;
  var orahKol = document.getElementById("orahKol").value;
  var orahCena = document.getElementById("orahCena").value;
  
  ukupnaCena = lesnikKol * lesnikCena + orahKol * orahCena;

  console.log("Ukupna cena je: " + ukupnaCena);
  document.getElementById('ukupnaCena').innerHTML = "UKUPNA CENA: " + ukupnaCena;

}
