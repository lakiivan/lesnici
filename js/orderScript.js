//funkcija za potvrdu porudzbine
function confirmOrder() {
  
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
