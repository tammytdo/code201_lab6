'use strict';

// Constructor Function
var Store = function(store_name, min_cust, max_cust, store_open, store_close, avg_cookies_per_customer) {
  this.store_name = store_name;
  this.min_cust = min_cust;
  this.max_cust = max_cust;
  this.store_open = store_open;
  this.store_close = store_close;
  this.cookies_sold_each_hour = [];
  this.avg_cookies_per_customer = avg_cookies_per_customer || 6.3;
};

// Calculates the average number of cookies, per customer, needed each hour
Store.prototype.cookies_per_hour = function() {
  var random_customers = Math.floor(Math.random(this.min_cust, this.max_cust));
  return Math.floor(this.avg_cookies_per_customer * random_customers);
};

// Calculates the average number of cookies, per customer, needed each hour
Store.prototype.calculate_cookies_per_hour = function() {
  for (var i = 6; i < 20; i++) { //change to store_open and store_close?
    var cookies_sold = this.cookies_per_hour();
    this.cookies_sold_each_hour.push(cookies_sold);
  }
};

var render_one_stores_table = function() {
  this.cookies_sold_each_hour();
  var target = document.getElementById('cookie-table');
  var store_row = document.createElement('tr');
  var name_td = document.createElement('td');
  name_td.textContent = this.store_name;
  store_row.appendChild(name_td);

  for (var i = 0; i < this.cookies_sold_each_hour.length; i++) {
    var cookie_hour_id = document.createElement('td');
    cookie_hour_id.textContent = this.cookies_sold_each_hour[i];
    store_row.appendChild(cookie_hour_id);
  }
  target.appendChild(store_row);
};


Store.prototype.render_as_a_table_row = render_one_stores_table;

// instantiating
var firstAndPike = new Store(23, 65, '1st & Pike', 6, 20, 6.3);
var seaTac = new Store(3, 24, 'SeaTac Airport', 6, 20, 1.2);
var seattleCenter	= new Store(11, 38, 'Seattle Center', 6, 20, 3.7);
var capHill	= new Store(20, 38, 'Capitol Hill', 6, 20, 2.3);
var alki = new Store(2, 16, 'Alki', 6, 20, 4.6);

var all_locations = [firstAndPike, seaTac, seattleCenter, capHill, alki];

for(var i = 0; i < all_locations.length; i++){
  all_locations[i].render_as_a_table_row();
}
