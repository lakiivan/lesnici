// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {

  // Unobtrusive event binding
  document.querySelector("#orderi")
  .addEventListener("click", function () {

      // Call server to get the name
      $ajaxUtils
      .sendGetRequest("data/orders.json", 
        function (res) {
          var orders = res.orders;
          var message = "";
          message += "<div>"
          var i;
          var counter = 0;
          for (i = 0; i < orders.length; i++) {
            if (orders[i].isporuceno === 'ne') {
              counter++;
              message += "<p>";
              message += "Record id: " + orders[i].recordId 
              + ", name " + orders[i].name 
              + ", za naplatu - " + orders[i].cena + " din;"
              + " lesnici: " + orders[i].lesnik + " kg;"
              + " orasi: " + orders[i].orah  + " kg;"
              + " isporuceno: " + orders[i].isporuceno 
              + ", naplaceno: " + orders[i].naplaceno +  "<br>"
              message += "</p>";
              console.log(counter);
            } 

          }
          message += "</div>";
          console.log("counter is: " + counter);
          var messageHead =  "<h2> Aktivni orderi: " + counter + "</h2>";

          document.querySelector("#contentHead")
          .innerHTML = messageHead;
          document.querySelector("#content")
          .innerHTML = message;

        });
    });


  //svi orderi
  document.querySelector("#allOrders")
  .addEventListener("click", function () {

      // Call server to get the name
      $ajaxUtils
      .sendGetRequest("data/orders.json", 
        function (res) {
          var orders = res.orders;
          var message = " ";
          message += "<div>"
          var i;
          for (i = 0; i < orders.length; i++) {
              message += "<p>";
              message += "Record id: " + orders[i].recordId 
              + ", name " + orders[i].name 
              + ", za naplatu - " + orders[i].cena  + " din;"
              + " lesnici: " + orders[i].lesnik + " kg;"
              + " orasi: " + orders[i].orah  + " kg;"
              + " isporuceno: " + orders[i].isporuceno 
              + ", naplaceno: " + orders[i].naplaceno +  "<br>"
              message += "</p>";
              console.log(orders[i].name);
          }
          message += "</div>";

          var messageHead =  "<h2> Ukupno svi orderi: " + orders.length + "</h2>";

          document.querySelector("#contentHead")
          .innerHTML = messageHead;

          document.querySelector("#content")
          .innerHTML = message;

        });
    });
}
);