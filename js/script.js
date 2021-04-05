

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
              message += "<table id='aktivniOrderiTable'><tr>";
              message += "<th scope='col' class='orderiHeadTd'>Order id</th>";
              message +="<th scope='col' class='orderiHeadTd'>Ime</th>";
              message +="<th scope='col' class='orderiHeadTd'>naplaceno</th>";
              message +="<th scope='col' class='orderiHeadTd'>lesnik, kg</th>";
              message +="<th scope='col' class='orderiHeadTd'>lomljeni, kg</th>";
              message +="<th scope='col' class='orderiHeadTd'>orah, kg</th>";
              message +="<th scope='col' class='orderiHeadTd'>crni orah, kg</th>";
              message +="<th scope='col' class='orderiHeadTd'>isporuceno</th></tr>";
          for (i = 0; i < orders.length; i++) {
            if (orders[i].isporuceno === 'ne') {
              counter++;
              message +="<tr>";
              message +="<td class='orderiTd'>" + orders[i].recordId +"</td>";
              message +="<td class='orderiTd'>" + orders[i].name +"</td>"; 
              message +="<td class='orderiTd'>" + orders[i].naplaceno +"</td>"; 
              message +="<td class='orderiTd'>" + orders[i].lesnik +"</td>"; 
              message +="<td class='orderiTd'>" + orders[i].lomljeni +"</td>"; 
              message +="<td class='orderiTd'>" + orders[i].orah +"</td>"; 
              message +="<td class='orderiTd'>" + orders[i].crniOrah +"</td>";  
              message +="<td class='orderiTd'>" + orders[i].isporuceno +"</td>";
              message +="</tr>";

              /*message += "<p id='podaci'>";
              message += "Record id: " + orders[i].recordId 
              + ", name " + orders[i].name 
              + ", za naplatu - " + orders[i].cena + " din;"
              + " lesnici: " + orders[i].lesnik + " kg;"
              + " orasi: " + orders[i].orah  + " kg;"
              + " isporuceno: " + orders[i].isporuceno 
              + ", naplaceno: " + orders[i].naplaceno +  "<br>"
              message += "</p>";*/
              console.log(counter);
            } 

          }
          message += "</table>";
          console.log("counter is: " + counter);
          var messageHead =  "<h2 id='podaci'> Aktivni orderi: " + counter + "</h2>";

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
              message += "<p id='podaci'>";
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

          var messageHead =  "<h2 id='podaci'> Ukupno svi orderi: " + orders.length + "</h2>";

          document.querySelector("#contentHead")
          .innerHTML = messageHead;

          document.querySelector("#content")
          .innerHTML = message;

        });
    });
}
);