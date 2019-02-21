/*
-Constructor function
-Separate render() method for each cookie stand location, that creates and appends its row to the table
-The header row and footer row are each created in their own stand-alone function
-Code is DRY. Duplicate code has been removed
-Working on a non-master branch for the day, with regular commit history.
*/


'use strict';

// Constructor Function
var Store = function(min_cust, max_cust, store_name, store_open, store_close, cookies_sold_each_hour, avg_cookies_per_customer) {
  this.min_cust = min_cust;
  this.max_cust = max_cust;
  this.avg_cookies_per_customer = avg_cookies_per_customer;
  this.store_name = store_name;
  this.store_open = store_open;
  this.store_close = store_close;
  this.cookies_sold_each_hour = [];
  this.avg_cookies_per_customer = avg_cookies_per_customer || 6.3;
};

// Calculates the average number of cookies, per customer, needed each hour
Store.prototype.cookies_per_hour = function() {
  var random_customers = Math.floor(_random(this.min_cust, this.max_cust));
  return Math.floor(this.avg_cookies_per_customer * random_customers);
};

// Calculates the average number of cookies, per customer, needed each hour
Store.prototype.calculate_cookies_per_hour = function() {
  for (var i = this.store_opens; i < this.store_close; i++) { //change to 6am/8pm?
    var cookies_sold = this.cookies_per_hour();
    this.cookies_sold_each_hour.push(cookies_sold);
  }
};

// ==============================================================
// rendering the hard way

// var render_all_stores_table = function() {
//   this.calculate_cookies_per_hour();

//   var target = document.getElementById('cookie-table');
//   var store_row = document.createElement('tr');
//   var name_td = document.createElement('td');     // field for name of store
//   name_td.textContent = this.store_name;  // gave field storename
//   store_row.appendChild(name_td);                 // append text to the store row

//   for (var i = 0; i < this.cookies_sold_each_hour.length; i++) {
//     var cookie_hour_td = document.createElement('td');
//     cookie_hour_td.textContent = this.cookies_sold_each_hour[i];
//     store_row.appendChild(cookie_hour_td);
//   }

//   target.appendChild(store_row);
// };

Salmon_cookies.prototype.render_as_a_table_row = render_one_stores_table;

// Salmon_cookies.prototype.render = function (){
//     this.calculate_cookies_sold_each_hour();

//     var target = document.getElementById('store-table');
//     var tr_el = document.createElement('tr');
//     var td_el = document.createElement('td');

//     td_el.textContent = this.store_name;
//     tr_el.appendChild(td_el);

//     /*
//     If I add another  tr_el = document.createElement('tr'); here, it hides the this.store_name element. Why?
//     I would like to be able to add more space between the td elements. I still need to figure out how to add hours
//     and how to use the total cookies functions I created earlier to give me the total number of cookies, though
//     I have some idea, involviong the variables listed inside the constructor function*/
//     td_el = document.createElement('td');
//     td_el.textContent = this.location;
//     tr_el.appendChild(td_el);

//     td_el = document.createElement('td');
//     td_el.textContent = this. min_cust;
//     tr_el.appendChild(td_el);

//     td_el = document.createElement('td');
//     td_el.textContent = this. max_cust;
//     tr_el.appendChild(td_el);

//     td_el = document.createElement('td');
//     td_el.textContent = this.open_hour;
//     tr_el.appendChild(td_el);

//     td_el = document.createElement('td');
//     td_el.textContent = this.close_hour;
//     tr_el.appendChild(td_el);

//     for(var i = 0; i < this.cookies_sold_each_hour.length; i++){
//         td_el = document.createElement('td');
//         td_el.textContent = this.cookies_sold_each_hour[i];
//         tr_el.appendChild(td_el);
//     }



//     target.appendChild(tr_el);
// }



// instantiating
var firstAndPike = new Store(23, 65, 6.3, '1st & Pike', 6, 20, []);
var seaTac = new Store(3, 24, 1.2, 'SeaTac Airport', 6, 20, []);
var seattleCenter	= new Store(11, 38, 3.7, 'Seattle Center', 6, 20, []);
var capHill	= new Store(20, 38, 2.3, 'Capitol Hill', 6, 20, []);
var alki = new Store(2, 16, 4.6, 'Alki', 6, 20, []);


// make them render
firstAndPike.render();
seaTac.render();
seattleCenter.render();
capHill.render();
alki.render();

render_all_stores_table();

var all_locations = [firstAndPike, seaTac, seattleCenter, capHill, alki];

for(var i = 0; i < all_locations.length; i++){
  all_locations[i].render_as_a_table_row();
}
