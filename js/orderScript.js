//funkcija za potvrdu porudzbine
function confirmOrder() {
  
  var date = new Date();
  console.log("Datum je " + date);

  var ukupnaCena = 0;

  var ime = document.getElementById("ime").value;
  console.log("Ime porucioca je: " + ime);

  var lesnikKol = document.getElementById("lesnikKol").value;
  console.log("Kolicina lesnika je " + lesnikKol);
  if(lesnikKol === null || lesnikKol==="") {
    lesnikKol = 0;
  }
  var lesnikCena = document.getElementById("lesnikCena").value;
  console.log("Cena lesnika je " + lesnikCena);
  if (lesnikCena == null || lesnikCena == "") {
    lesnikCena = 0;
  }
  ukupnaCena = lesnikCena * lesnikKol;
  console.log("ukupna cena je " + ukupnaCena);
  document.getElementById('ukupnaCena').innerHTML = "UKUPNA CENA: " + ukupnaCena;


  var message = "Porudzbina broj 7 je uspesno sacuvana \n";
  message += "Porucilac " + ime + "\n";
  message += "je porucio " + lesnikKol + " kg lesnika po ceni od " + lesnikCena + "\n";
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
